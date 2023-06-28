locals {
  project_owners = [
    "a@firezone.dev",
    "gabriel@firezone.dev",
    "jamil@firezone.dev"
  ]

  region            = "us-east1"
  availability_zone = "us-east1-d"

  tld = "firez.one"
}

terraform {
  cloud {
    organization = "firezone"
    hostname     = "app.terraform.io"

    workspaces {
      name = "staging"
    }
  }
}

provider "random" {}
provider "null" {}
provider "google" {}
provider "google-beta" {}

# Create the project
module "google-cloud-project" {
  source = "../../modules/google-cloud-project"

  id                 = "firezone-staging"
  name               = "Staging Environment"
  organization_id    = "335836213177"
  billing_account_id = "01DFC9-3D6951-579BE1"
}

# Grant owner access to the project
resource "google_project_iam_binding" "project_owners" {
  project = module.google-cloud-project.project.project_id
  role    = "roles/owner"
  members = formatlist("user:%s", local.project_owners)
}

# Grant GitHub Actions ability to write to the container registry
module "google-artifact-registry" {
  source = "../../modules/google-artifact-registry"

  project_id   = module.google-cloud-project.project.project_id
  project_name = module.google-cloud-project.name

  region = local.region

  writers = [
    # This is GitHub Actions service account configured manually
    # in the project github-iam-387915
    "serviceAccount:github-actions@github-iam-387915.iam.gserviceaccount.com"
  ]
}

# Create a VPC
module "google-cloud-vpc" {
  source = "../../modules/google-cloud-vpc"

  project_id = module.google-cloud-project.project.project_id
  name       = module.google-cloud-project.project.project_id
}

# Enable Google Cloud Storage for the project
module "google-cloud-storage" {
  source = "../../modules/google-cloud-storage"

  project_id = module.google-cloud-project.project.project_id
}

# Create DNS managed zone
module "google-cloud-dns" {
  source = "../../modules/google-cloud-dns"

  project_id = module.google-cloud-project.project.project_id

  tld            = local.tld
  dnssec_enabled = false
}

# Create the Cloud SQL database
module "google-cloud-sql" {
  source     = "../../modules/google-cloud-sql"
  project_id = module.google-cloud-project.project.project_id
  network    = module.google-cloud-vpc.id

  compute_region            = local.region
  compute_availability_zone = local.availability_zone

  compute_instance_cpu_count   = "2"
  compute_instance_memory_size = "7680"

  database_name = module.google-cloud-project.project.project_id

  database_highly_available = false
  database_backups_enabled  = false

  database_read_replica_locations = []

  database_flags = {
    # Increase the connections count a bit, but we need to set it to Ecto ((pool_count * pool_size) + 50)
    "max_connections" = "500"

    # Sets minimum threshold on dead tuples to prevent autovaccum running too often on small tables
    # where 5% is less than 50 records
    "autovacuum_vacuum_threshold" = "50"

    # Trigger autovaccum for every 5% of the table changed
    "autovacuum_vacuum_scale_factor"  = "0.05"
    "autovacuum_analyze_scale_factor" = "0.05"

    # Give autovacuum 4x the cost limit to prevent it from never finishing
    # on big tables
    "autovacuum_vacuum_cost_limit" = "800"

    # Give hash joins a bit more memory to work with
    # "hash_mem_multiplier" = "3"

    # This is standard value for work_mem
    "work_mem" = "4096"
  }
}

# Generate secrets
resource "random_password" "erlang_cluster_cookie" {
  length  = 64
  special = false
}

resource "random_password" "auth_token_key_base" {
  length  = 64
  special = false
}

resource "random_password" "auth_token_salt" {
  length  = 32
  special = false
}

resource "random_password" "relays_auth_token_key_base" {
  length  = 64
  special = false
}

resource "random_password" "relays_auth_token_salt" {
  length  = 32
  special = false
}

resource "random_password" "gateways_auth_token_key_base" {
  length  = 64
  special = false
}

resource "random_password" "gateways_auth_token_salt" {
  length  = 32
  special = false
}

resource "random_password" "secret_key_base" {
  length  = 64
  special = false
}

resource "random_password" "live_view_signing_salt" {
  length  = 32
  special = false
}

resource "random_password" "cookie_signing_salt" {
  length  = 32
  special = false
}

resource "random_password" "cookie_encryption_salt" {
  length  = 32
  special = false
}

# # Deploy nginx to the compute for HTTPS termination
# # module "nginx" {
# #   source = "../../modules/nginx"
# #   project_id = module.google-cloud-project.project.project_id
# # }

# Create VPC subnet for the application instances,
# we want all apps to be in the same VPC in order for Erlang clustering to work
resource "google_compute_subnetwork" "apps" {
  project = module.google-cloud-project.project.project_id

  name = "app"

  ip_cidr_range = "10.128.0.0/20"
  region        = local.region
  network       = module.google-cloud-vpc.id

  private_ip_google_access = true
}

# Deploy the web app to the GCE
resource "random_password" "web_db_password" {
  length = 16
}

resource "google_sql_user" "web" {
  project = module.google-cloud-project.project.project_id

  instance = module.google-cloud-sql.master_instance_name

  name     = "web"
  password = random_password.web_db_password.result
}

resource "google_sql_database" "firezone" {
  project = module.google-cloud-project.project.project_id

  name     = "firezone"
  instance = module.google-cloud-sql.master_instance_name
}

locals {
  target_tags = ["app-web", "app-api", "app-relay"]

  cluster = {
    name   = "firezone"
    cookie = base64encode(random_password.erlang_cluster_cookie.result)
  }

  shared_application_environment_variables = [
    # Database
    {
      name  = "DATABASE_HOST"
      value = module.google-cloud-sql.master_instance_ip_address
    },
    {
      name  = "DATABASE_NAME"
      value = google_sql_database.firezone.name
    },
    {
      name  = "DATABASE_USER"
      value = google_sql_user.web.name
    },
    {
      name  = "DATABASE_PASSWORD"
      value = google_sql_user.web.password
    },
    # Secrets
    {
      name  = "SECRET_KEY_BASE"
      value = random_password.secret_key_base.result
    },
    {
      name  = "AUTH_TOKEN_KEY_BASE"
      value = base64encode(random_password.auth_token_key_base.result)
    },
    {
      name  = "AUTH_TOKEN_SALT"
      value = base64encode(random_password.auth_token_salt.result)
    },
    {
      name  = "RELAYS_AUTH_TOKEN_KEY_BASE"
      value = base64encode(random_password.relays_auth_token_key_base.result)
    },
    {
      name  = "RELAYS_AUTH_TOKEN_SALT"
      value = base64encode(random_password.relays_auth_token_salt.result)
    },
    {
      name  = "GATEWAYS_AUTH_TOKEN_KEY_BASE"
      value = base64encode(random_password.gateways_auth_token_key_base.result)
    },
    {
      name  = "GATEWAYS_AUTH_TOKEN_SALT"
      value = base64encode(random_password.gateways_auth_token_salt.result)
    },
    {
      name  = "SECRET_KEY_BASE"
      value = base64encode(random_password.secret_key_base.result)
    },
    {
      name  = "LIVE_VIEW_SIGNING_SALT"
      value = base64encode(random_password.live_view_signing_salt.result)
    },
    {
      name  = "COOKIE_SIGNING_SALT"
      value = base64encode(random_password.cookie_signing_salt.result)
    },
    {
      name  = "COOKIE_ENCRYPTION_SALT"
      value = base64encode(random_password.cookie_encryption_salt.result)
    },
    # Erlang
    {
      name  = "ERLANG_DISTRIBUTION_PORT"
      value = "9000"
    },
    {
      name  = "CLUSTER_NAME"
      value = local.cluster.name
    },
    {
      name  = "ERLANG_CLUSTER_ADAPTER"
      value = "Elixir.Domain.Cluster.GoogleComputeLabelsStrategy"
    },
    {
      name = "ERLANG_CLUSTER_ADAPTER_CONFIG"
      value = jsonencode({
        project_id          = module.google-cloud-project.project.project_id
        cluster_name        = local.cluster.name
        cluster_name_label  = "cluster_name"
        node_name_label     = "application"
        polling_interval_ms = 7000
      })
    },
    {
      name  = "RELEASE_COOKIE"
      value = local.cluster.cookie
    },
    # Auth
    {
      name  = "AUTH_PROVIDER_ADAPTERS"
      value = "email,openid_connect,token"
    },
    # Telemetry
    {
      name  = "TELEMETRY_ENABLED"
      value = "false"
    },
    # OpenTelemetry requires an exporter to be set on every node
    # {
    #   name  = "OTLP_ENDPOINT"
    #   value = "http://0.0.0.0:55680",
    # },
    # Emails
    {
      name  = "OUTBOUND_EMAIL_ADAPTER"
      value = "Elixir.Swoosh.Adapters.Postmark"
    },
    {
      name  = "OUTBOUND_EMAIL_ADAPTER_OPTS"
      value = "{\"api_key\":\"${var.postmark_server_api_token}\"}"
    }
  ]
}

module "web" {
  source     = "../../modules/elixir-app"
  project_id = module.google-cloud-project.project.project_id

  compute_instance_type               = "n1-standard-1"
  compute_instance_region             = local.region
  compute_instance_availability_zones = ["${local.region}-d"]

  dns_managed_zone_name = module.google-cloud-dns.zone_name

  vpc_network    = module.google-cloud-vpc.self_link
  vpc_subnetwork = google_compute_subnetwork.apps.self_link

  container_registry = module.google-artifact-registry.url

  image_repo = module.google-artifact-registry.repo
  image      = "web"
  image_tag  = var.web_image_tag

  scaling_horizontal_replicas = 2

  observability_log_level = "debug"

  erlang_release_name   = "firezone"
  erlang_cluster_cookie = random_password.erlang_cluster_cookie.result

  application_name    = "web"
  application_version = "0-0-1"

  application_dns_tld = "app.${local.tld}"

  application_ports = [
    {
      name     = "http"
      protocol = "TCP"
      port     = 80

      health_check = {
        initial_delay_sec = 30

        check_interval_sec  = 5
        timeout_sec         = 5
        healthy_threshold   = 1
        unhealthy_threshold = 2

        http_health_check = {}
      }
    }
  ]

  application_environment_variables = concat([
    # Web Server
    {
      name  = "EXTERNAL_URL"
      value = "https://app.${local.tld}"
    },
    {
      name  = "PHOENIX_HTTP_WEB_PORT"
      value = "80"
    }
  ], local.shared_application_environment_variables)

  application_labels = {
    "cluster_name" = local.cluster.name
  }
}

module "api" {
  source     = "../../modules/elixir-app"
  project_id = module.google-cloud-project.project.project_id

  compute_instance_type               = "n1-standard-1"
  compute_instance_region             = local.region
  compute_instance_availability_zones = ["${local.region}-d"]

  dns_managed_zone_name = module.google-cloud-dns.zone_name

  vpc_network    = module.google-cloud-vpc.self_link
  vpc_subnetwork = google_compute_subnetwork.apps.self_link

  container_registry = module.google-artifact-registry.url

  image_repo = module.google-artifact-registry.repo
  image      = "api"
  image_tag  = var.api_image_tag

  scaling_horizontal_replicas = 2

  observability_log_level = "debug"

  erlang_release_name   = "firezone"
  erlang_cluster_cookie = random_password.erlang_cluster_cookie.result

  application_name    = "api"
  application_version = "0-0-1"

  application_dns_tld = "api.${local.tld}"

  application_ports = [
    {
      name     = "http"
      protocol = "TCP"
      port     = 80

      health_check = {
        initial_delay_sec = 30

        check_interval_sec  = 5
        timeout_sec         = 5
        healthy_threshold   = 1
        unhealthy_threshold = 2

        tcp_health_check = {}
      }
    }
  ]

  application_environment_variables = concat([
    # Web Server
    {
      name  = "EXTERNAL_URL"
      value = "https://api.${local.tld}"
    },
    {
      name  = "PHOENIX_HTTP_API_PORT"
      value = "80"
    },
  ], local.shared_application_environment_variables)

  application_labels = {
    "cluster_name" = local.cluster.name
  }
}

# Erlang Cluster
## Allow traffic between Elixir apps for Erlang clustering
resource "google_compute_firewall" "erlang-distribution" {
  project = module.google-cloud-project.project.project_id

  name    = "erlang-distribution"
  network = module.google-cloud-vpc.self_link

  allow {
    protocol = "tcp"
    ports    = [4369, 9000]
  }

  allow {
    protocol = "udp"
    ports    = [4369, 9000]
  }

  source_ranges = [google_compute_subnetwork.apps.ip_cidr_range]
  target_tags   = local.target_tags
}

## Allow service account to list running instances
resource "google_project_iam_custom_role" "erlang-discovery" {
  project = module.google-cloud-project.project.project_id

  title       = "Read list of Compute instances"
  description = "This role is used for Erlang Cluster discovery and allows to list running instances."

  role_id = "compute.list_instances"
  permissions = [
    "compute.instances.list",
    "compute.zones.list"
  ]
}

resource "google_project_iam_member" "application" {
  for_each = toset([
    module.api.service_account.email,
    module.web.service_account.email,
  ])

  project = module.google-cloud-project.project.project_id

  role   = "projects/${module.google-cloud-project.project.project_id}/roles/${google_project_iam_custom_role.erlang-discovery.role_id}"
  member = "serviceAccount:${each.value}"
}

# Deploy relays

module "relays" {
  source     = "../../modules/relay-app"
  project_id = module.google-cloud-project.project.project_id

  instances = {
    "asia-east1" = {
      "asia-east1-a" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

    "asia-south1" = {
      "asia-south1-a" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

    "australia-southeast1" = {
      "australia-southeast1-a" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

    "me-central1" = {
      "me-central1-a" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

    "europe-west1" = {
      "europe-west1-d" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

    "southamerica-east1" = {
      "southamerica-east1-b" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

    "us-east1" = {
      "us-east1-d" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

    "us-west2" = {
      "us-west2-b" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

    "us-central1" = {
      "us-central1-b" = {
        type     = "n1-standard-1"
        replicas = 1
      }
    }

  }

  vpc_network = "projects/${var.project_id}/global/networks/default"

  container_registry = module.google-artifact-registry.url

  image_repo = module.google-artifact-registry.repo
  image      = "relay"
  image_tag  = var.relay_image_tag

  observability_log_level = "debug"

  application_name    = "relay"
  application_version = "0-0-1"

  application_ports = [
    {
      name     = "http"
      protocol = "TCP"
      port     = 80

      health_check = {
        initial_delay_sec = 30

        check_interval_sec  = 5
        timeout_sec         = 5
        healthy_threshold   = 1
        unhealthy_threshold = 2

        http_health_check = {}
      }
    }
  ]

  application_environment_variables = concat([
    # Web Server
    {
      name  = "EXTERNAL_URL"
      value = "https://app.${local.tld}"
    },
    {
      name  = "PHOENIX_HTTP_WEB_PORT"
      value = "80"
    }
  ], local.shared_application_environment_variables)
}

# Enable SSH on staging
resource "google_compute_firewall" "ssh" {
  project = module.google-cloud-project.project.project_id

  name    = "staging-ssh"
  network = module.google-cloud-vpc.self_link

  allow {
    protocol = "tcp"
    ports    = [22]
  }

  allow {
    protocol = "udp"
    ports    = [22]
  }

  allow {
    protocol = "sctp"
    ports    = [22]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = local.target_tags
}
