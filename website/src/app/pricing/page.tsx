import { Metadata } from "next";
import CustomerLogos from "@/components/CustomerLogos";
import { HiCheck } from "react-icons/hi2";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing • Firezone",
  description: "Firezone pricing",
};

export default function Page() {
  return (
    <>
      <section className="bg-neutral-100">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h1 className="justify-center mb-4 text-2xl font-extrabold text-center leading-none tracking-tight text-neutral-900 sm:text-4xl">
              Plans & Pricing
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 border-t border-neutral-200 pb-14">
        <div className="mx-auto max-w-screen-lg sm:grid sm:grid-cols-2 pt-14 sm:gap-4">
          <div className="p-8 bg-neutral-50 border-2 border-neutral-200">
            <h3 className="mb-4 text-2xl tracking-tight font-semibold text-primary-450">
              Starter
            </h3>
            <p className="mb-8">
              Secure remote access for individuals and small groups
            </p>
            <h2 className="mb-16 text-2xl sm:text-4xl tracking-tight font-semibold text-neutral-900">
              Free
            </h2>
            <div className="mb-24 w-full text-center">
              <Link href="/product/early-access">
                <button
                  type="button"
                  className="w-64 text-white font-bold tracking-tight rounded duration-0 hover:scale-105 transition transform shadow-lg text-lg px-5 py-2.5 bg-gradient-to-br from-accent-700 to-accent-600"
                >
                  Request early access
                </button>
              </Link>
            </div>
            <ul role="list" className="font-medium space-y-2">
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Works on local area networks, NAS, Raspberry Pi, data centers,
                  and cloud VMs
                </span>
              </li>
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Remote access to your homelab
                </span>
              </li>
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Authenticate with magic link and OIDC
                </span>
              </li>
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Linux, macOS, iOS, ChromeOS, Android
                </span>
              </li>
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Community Support
                </span>
              </li>
            </ul>
          </div>
          <div className="p-8 bg-neutral-50 border-2 border-neutral-200">
            <h3 className="mb-4 text-2xl tracking-tight font-semibold text-primary-450">
              Enterprise
            </h3>
            <p className="mb-8">
              Zero trust network access for teams and organizations
            </p>
            <h2 className="mb-16 text-2xl sm:text-4xl tracking-tight font-semibold text-neutral-900">
              Contact us
            </h2>
            <div className="mb-16 w-full text-center">
              <Link href="/contact/sales">
                <button
                  type="button"
                  className="w-64 text-white font-bold tracking-tight rounded duration-0 hover:scale-105 transition transform shadow-lg text-lg px-5 py-2.5 bg-gradient-to-br from-accent-700 to-accent-600"
                >
                  Request a demo
                </button>
              </Link>
            </div>
            <p className="mb-2">
              <strong>Everything in Starter, plus:</strong>
            </p>
            <ul role="list" className="font-medium space-y-2">
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  SSO with Google Workspace
                </span>
              </li>
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Automatically sync users and groups
                </span>
              </li>
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Managed relay network
                </span>
              </li>
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Network access logs
                </span>
              </li>
              <li className="flex space-x-2.5">
                <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                <span className="leading-tight text-neutral-900 ">
                  Dedicated Slack and email support
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-screen-xl">
          <CustomerLogos />
        </div>
      </section>
      <section className="bg-white border-t border-neutral-200 py-14">
        <div className="mb-14 mx-auto max-w-screen-md">
          <h2 className="mb-14 justify-center text-4xl font-semibold text-neutral-900">
            Compare plans
          </h2>
          <table className="w-full mx-auto text-left">
            <thead>
              <tr>
                <th></th>
                <th
                  scope="col"
                  className="px-6 py-6 uppercase text-primary-450 tracking-light"
                >
                  Starter
                </th>
                <th
                  scope="col"
                  className="px-6 py-6 uppercase text-primary-450 tracking-light"
                >
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">
                  <span
                    data-tooltip-target="users-tooltip"
                    data-tooltip-placement="top"
                    className="underline hover:no-underline cursor-help"
                  >
                    Users
                  </span>
                  <div
                    id="users-tooltip"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-100 bg-neutral-900 rounded shadow-sm opacity-90 tooltip"
                  >
                    Human operators and end-users of your Firezone account
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">No limit</td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">
                  <span
                    data-tooltip-target="sa-tooltip"
                    data-tooltip-placement="top"
                    className="underline hover:no-underline cursor-help"
                  >
                    Service Accounts
                  </span>
                  <div
                    id="sa-tooltip"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-100 bg-neutral-900 rounded shadow-sm opacity-90 tooltip"
                  >
                    Machine accounts used to access resources without a user
                    present
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">No limit</td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">
                  <span
                    data-tooltip-target="sites-tooltip"
                    data-tooltip-placement="top"
                    className="underline hover:no-underline cursor-help"
                  >
                    Sites
                  </span>
                  <div
                    id="sites-tooltip"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-100 bg-neutral-900 rounded shadow-sm opacity-90 tooltip"
                  >
                    Sites are a collection of gateways and resources that share
                    the same network connectivity context. Typically a subnet or
                    VPC.
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">No limit</td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">
                  <span
                    data-tooltip-target="admins-tooltip"
                    data-tooltip-placement="top"
                    className="underline hover:no-underline cursor-help"
                  >
                    Admins
                  </span>
                  <div
                    id="admins-tooltip"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-100 bg-neutral-900 rounded shadow-sm opacity-90 tooltip"
                  >
                    Users with account-wide access to deploy gateways, manage
                    billing, and edit users, sites, or other configuration
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">No limit</td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">
                  <span
                    data-tooltip-target="policies-tooltip"
                    data-tooltip-placement="top"
                    className="underline hover:no-underline cursor-help"
                  >
                    Policies
                  </span>
                  <div
                    id="policies-tooltip"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-100 bg-neutral-900 rounded shadow-sm opacity-90 tooltip"
                  >
                    Policies control access to resources (e.g. group “A” may
                    access resource “B”)
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </td>
                <td className="px-6 py-4">No limit</td>
                <td className="px-6 py-4">No limit</td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">
                  <span
                    data-tooltip-target="resources-tooltip"
                    data-tooltip-placement="top"
                    className="underline hover:no-underline cursor-help"
                  >
                    Resources
                  </span>
                  <div
                    id="resources-tooltip"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-100 bg-neutral-900 rounded shadow-sm opacity-90 tooltip"
                  >
                    Anything you wish to manage access to (e.g. database, VPC,
                    home network, web server, SaaS application)
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </td>
                <td className="px-6 py-4">No limit</td>
                <td className="px-6 py-4">No limit</td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">
                  <span
                    data-tooltip-target="devices-tooltip"
                    data-tooltip-placement="top"
                    className="underline hover:no-underline cursor-help"
                  >
                    Connected Clients
                  </span>
                  <div
                    id="devices-tooltip"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-100 bg-neutral-900 rounded shadow-sm opacity-90 tooltip"
                  >
                    Any device or machine that the Firezone client application
                    connects from
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </td>
                <td className="px-6 py-4">No limit</td>
                <td className="px-6 py-4">No limit</td>
              </tr>
              <tr>
                <td className="px-6 pt-8 pb-4 text-lg font-semibold text-primary-450 tracking-light">
                  Networking Features
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">NAT hole punching</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Cloud & local networks</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Native Firezone clients</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Split tunneling</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">DNS-based routing</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Gateway load-balancing</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Automatic gateway failover</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Global relay network</td>
                <td className="px-6 py-4">&#8212;</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-6 pt-8 pb-4 text-lg font-semibold text-primary-450 tracking-light"
                >
                  Authentication & Authorization
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Resource-level access policies</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Universal OIDC connector</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Google Workspace integration</td>
                <td className="px-6 py-4">&#8212;</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">User / group sync</td>
                <td className="px-6 py-4">&#8212;</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-6 pt-8 pb-4 text-lg font-semibold text-primary-450 tracking-light"
                >
                  Security Features
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Daily key rotation</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Policy authorization logs</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Geomapped IPs</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-6 pt-8 pb-4 text-lg font-semibold text-primary-450 tracking-light"
                >
                  Support
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Community Forums</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Community Slack</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Priority Email</td>
                <td className="px-6 py-4">&#8212;</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr className="border-b border-1 border-neutral-200">
                <td className="px-6 py-4">Dedicated Slack</td>
                <td className="px-6 py-4">&#8212;</td>
                <td className="px-6 py-4">
                  <HiCheck className="flex-shrink-0 w-5 h-5 text-neutral-900" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="px-6 py-14">
                  <Link href="/product/early-access">
                    <button
                      type="button"
                      className="w-48 text-white font-bold tracking-tight rounded duration-0 hover:scale-105 transition transform shadow-lg text-md py-2.5 bg-gradient-to-br from-accent-700 to-accent-600"
                    >
                      Request early access
                    </button>
                  </Link>
                </td>
                <td className="px-6 py-14">
                  <Link href="/contact/sales">
                    <button
                      type="button"
                      className="w-48 text-white font-bold tracking-tight rounded duration-0 hover:scale-105 transition transform shadow-lg text-md py-2.5 bg-gradient-to-br from-accent-700 to-accent-600"
                    >
                      Request a demo
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-neutral-100 border-t border-neutral-200 p-14">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-14 justify-center text-4xl font-semibold text-neutral-900">
            Frequently asked questions
          </h2>

          <div className="px-4 w-full mb-14">
            <ol className="list-decimal">
              <li>
                <Link
                  href="#how-long"
                  className="hover:underline text-accent-500"
                >
                  How long does it take to set up Firezone?
                </Link>
              </li>
              <li>
                <Link
                  href="#rip-replace"
                  className="hover:underline text-accent-500"
                >
                  Do I need to rip and replace my current VPN to use Firezone?
                </Link>
              </li>
              <li>
                <Link href="#data" className="hover:underline text-accent-500">
                  What happens to my data with Firezone enabled?
                </Link>
              </li>
              <li>
                <Link
                  href="#change-plan"
                  className="hover:underline text-accent-500"
                >
                  How do I cancel or change my plan?
                </Link>
              </li>
              <li>
                <Link
                  href="#when-billed"
                  className="hover:underline text-accent-500"
                >
                  When will I be billed?
                </Link>
              </li>
              <li>
                <Link
                  href="#payment-methods"
                  className="hover:underline text-accent-500"
                >
                  What payment methods are available?
                </Link>
              </li>
              <li>
                <Link
                  href="#special-pricing"
                  className="hover:underline text-accent-500"
                >
                  Do you offer special pricing for nonprofits and educational
                  institutions?
                </Link>
              </li>
              <li>
                <Link
                  href="#special-pricing"
                  className="hover:underline text-accent-500"
                >
                  Other than using Firezone, is there anything I can do to
                  improve my cybersecurity?
                </Link>
              </li>
            </ol>
          </div>

          <a id="how-long" className="pt-8"></a>
          <blockquote className="font-semibold text-md p-2 my-2 border-s-4 border-neutral-300">
            <p>How long does it take to set up Firezone?</p>
          </blockquote>
          <p className="mb-8">
            Firezone can be set up in{" "}
            <Link
              href="/kb/quickstart"
              className="hover:underline text-accent-500"
            >
              less than 10 minutes
            </Link>
            , and gateways can be added by running a simple Docker command.{" "}
            <Link href="/kb" className="hover:underline text-accent-500">
              Visit our docs
            </Link>{" "}
            for more information and step by step instructions.
          </p>

          <a id="rip-replace" className="pt-8"></a>
          <blockquote className="font-semibold text-md p-2 my-2 border-s-4 border-neutral-300">
            <p>Do I need to rip and replace my current VPN with Firezone?</p>
          </blockquote>
          <p className="mb-8">
            No. As long they're set up to access different resources, you can
            run Firezone alongside your existing remote access solutions, and
            switch over whenever you’re ready. There’s no need for any downtime
            or unnecessary disruptions.
          </p>

          <a id="data" className="pt-8"></a>
          <blockquote className="font-semibold text-md p-2 my-2 border-s-4 border-neutral-300">
            <p>What happens to my data with Firezone enabled?</p>
          </blockquote>
          <p className="mb-8">
            Network traffic is always end-to-end encrypted, and by default,
            routes directly to gateways running on your infrastructure. If you
            have managed relays enabled (Enterprise plan only), encrypted data
            may pass through our global relay network if a direct connection
            cannot be established. Firezone can never decrypt the contents of
            your traffic.
          </p>

          <a id="change-plan" className="pt-8"></a>
          <blockquote className="font-semibold text-md p-2 my-2 border-s-4 border-neutral-300">
            <p>How do I cancel or change my plan?</p>
          </blockquote>
          <p className="mb-8">
            Please{" "}
            <Link
              href="mailto:support@firezone.dev"
              className="hover:underline text-color-accent-500"
            >
              contact support
            </Link>{" "}
            if you would like to change your plan or terminate your account.
          </p>

          <a id="when-billed" className="pt-8"></a>
          <blockquote className="font-semibold text-md p-2 my-2 border-s-4 border-neutral-300">
            <p>When will I be billed?</p>
          </blockquote>
          <p className="mb-8">
            When you start service, or at the beginning of each billing cycle.
            Enterprise plans are billed quarterly or annually.
          </p>

          <a id="payment-methods" className="pt-8"></a>
          <blockquote className="font-semibold text-md p-2 my-2 border-s-4 border-neutral-300">
            <p>What payment methods are available?</p>
          </blockquote>
          <p className="mb-8">
            The Starter plan is free and does not require a credit card to get
            started. Enterprise plans can be paid via credit card, ACH, or wire
            transfer and will have a 100% discount applied for the duration of
            the beta.
          </p>

          <a id="special-pricing" className="pt-8"></a>
          <blockquote className="font-semibold text-md p-2 my-2 border-s-4 border-neutral-300">
            <p>
              Do you offer special pricing for nonprofits and educational
              institutions?
            </p>
          </blockquote>
          <p className="mb-8">
            Yes. Not-for-profit organizations and educational institutions are
            eligible for a 50% discount. Contact us (support@firezone.dev) to
            request the discount.
          </p>

          <a id="enhance-cybersecurity" className="pt-8"></a>
          <blockquote className="font-semibold text-md p-2 my-2 border-s-4 border-neutral-300">
            <p>
              Other than using Firezone, is there anything I can do to improve
              my cybersecurity?
            </p>
          </blockquote>
          <p className="mb-8">
            Firezone helps protect your network and private resources, however,
            organizations should consider a balanced security and risk
            management posture that takes into account all the different parts
            of their business.
          </p>
        </div>
      </section>

      <section className="bg-neutral-100 border-t border-neutral-200 p-14">
        <div className="mx-auto max-w-screen-xl md:grid md:grid-cols-2">
          <div>
            <h2 className="w-full justify-center mb-8 text-2xl md:text-3xl font-semibold text-neutral-900">
              The WireGuard® solution for Enterprise.
            </h2>
          </div>
          <div className="mb-14 w-full text-center">
            <Link href="/contact/sales">
              <button
                type="button"
                className="w-64 text-white font-bold tracking-tight rounded duration-0 hover:scale-105 transition transform shadow-lg text-lg px-5 py-2.5 bg-primary-450"
              >
                Request a demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
