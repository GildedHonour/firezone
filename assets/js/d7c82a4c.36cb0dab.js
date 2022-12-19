"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[4665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Omnibus",sidebar_position:3,description:"Install Firezone via our Omnibus deployment option to manage secure access to private networks and resources."},o="Install Firezone with Omnibus",l={unversionedId:"deploy/omnibus/README",id:"deploy/omnibus/README",title:"Omnibus",description:"Install Firezone via our Omnibus deployment option to manage secure access to private networks and resources.",source:"@site/docs/deploy/omnibus/README.mdx",sourceDirName:"deploy/omnibus",slug:"/deploy/omnibus/",permalink:"/deploy/omnibus/",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/deploy/omnibus/README.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Omnibus",sidebar_position:3,description:"Install Firezone via our Omnibus deployment option to manage secure access to private networks and resources."},sidebar:"tutorialSidebar",previous:{title:"Supported Platforms",permalink:"/deploy/docker/supported-platforms"},next:{title:"Supported Platforms",permalink:"/deploy/omnibus/supported-platforms"}},s={},p=[{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:2},{value:"Step 2: Install server",id:"step-2-install-server",level:2},{value:"Option 1: Automatic install",id:"option-1-automatic-install",level:3},{value:"Option 2: Install from our Debian or RedHat repositories",id:"option-2-install-from-our-debian-or-redhat-repositories",level:3},{value:"Option 3: Manual install",id:"option-3-manual-install",level:3},{value:"Bootstrap Firezone",id:"bootstrap-firezone",level:3},{value:"Step 3: Install client apps",id:"step-3-install-client-apps",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Post setup",id:"post-setup",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-firezone-with-omnibus"},"Install Firezone with Omnibus"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Due to Omnibus being EOL'd by Chef in 2024, Docker is now the preferred method\nof deploying Firezone. See the ",(0,a.kt)("a",{parentName:"p",href:"../docker"},"Docker deployment guide")," to get\nstarted."),(0,a.kt)("p",{parentName:"admonition"},"Read below to continue with an Omnibus-based deployment.")),(0,a.kt)("p",null,"Firezone can be deployed on a server running a supported ",(0,a.kt)("a",{parentName:"p",href:"supported-platforms"},"Linux distribution\n")," in a few minutes with our Debian or Red Hat package.\nThis guide will walk you through the steps to get started."),(0,a.kt)("h2",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure you're on a ",(0,a.kt)("a",{parentName:"li",href:"supported-platforms"},"supported Linux distribution"),".\nA kernel upgrade may be required to ensure WireGuard\xae is available."),(0,a.kt)("li",{parentName:"ul"},"Ensure port forwarding is enabled on your firewall.\nThe default Firezone configuration requires the following ports to be open:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"80/tcp")," (optional): For automatically issuing SSL certificates."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"443/tcp"),": To access the web UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"51820/udp"),": VPN traffic listen port.")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Before deploying Firezone in ",(0,a.kt)("strong",{parentName:"p"},"production"),", you'll need a valid DNS record\npointing to this instance. See ",(0,a.kt)("a",{parentName:"p",href:"../#prepare-to-deploy"},"Prepare to Deploy"),"\nif you haven't done this already.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Firezone modifies the kernel netfilter and routing tables.\nOther programs that modify the Linux routing table or firewall may interfere\nwith Firezone\u2019s operation. For help troubleshooting connectivity issues, see the\n",(0,a.kt)("a",{parentName:"p",href:"../../administer/troubleshoot"},"troubleshooting guide"),".")),(0,a.kt)("h2",{id:"step-2-install-server"},"Step 2: Install server"),(0,a.kt)("p",null,"After prerequisites are satisfied, you're ready to install the Firezone Server."),(0,a.kt)("h3",{id:"option-1-automatic-install"},"Option 1: Automatic install"),(0,a.kt)("p",null,"The easiest way to get started using Firezone is via the automatic installation\nscript below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo -E bash -c "$(curl -fsSL https://github.com/firezone/firezone/raw/master/scripts/omnibus_install.sh)"\n')),(0,a.kt)("p",null,"This will ask you a few questions regarding your install, install the latest\nrelease for your platform, create an administrator user, then print to the\nconsole instructions for logging in to the web UI."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/171948328-4771552f-e5dd-4c30-8c0b-baac80b6e7b1.png",alt:"install complete"})),(0,a.kt)("p",null,"By default, the web UI can be reached at the IP or domain name of your server.\nYou can regenerate the admin credentials using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"firezone-ctl create-or-reset-admin")," command."),(0,a.kt)("h3",{id:"option-2-install-from-our-debian-or-redhat-repositories"},"Option 2: Install from our Debian or RedHat repositories"),(0,a.kt)("p",null,"If the automatic install script fails, try these steps to install Firezone from our\n",(0,a.kt)("a",{parentName:"p",href:"https://cloudsmith.io/~firezone/repos/firezone"},"Cloudsmith repository"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"Install WireGuard")," for your distro.\nIf using Linux kernel 5.6 or higher, skip this step.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install our package repository for your distro's package format:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"deb packages:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/firezone/firezone/setup.deb.sh' \\\n  | sudo -E bash\n")))),(0,a.kt)("p",{parentName:"li"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudsmith.io/~firezone/repos/firezone/setup/#formats-deb"},"Debian setup docs"),"\nfor more options if the script fails to setup the repo."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"rpm packages:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/firezone/firezone/setup.rpm.sh' \\\n  | sudo -E bash\n")))),(0,a.kt)("p",{parentName:"li"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudsmith.io/~firezone/repos/firezone/setup/#formats-rpm"},"RedHat setup docs"),"\nfor more options if the script fails to setup the repo.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Firezone with your distro's package manager:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Using apt\nsudo apt install firezone\n\n# Using dnf\nsudo dnf install firezone\n\n# Using yum\nsudo yum install firezone\n\n# Using zypper\nsudo zypper install firezone\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the ",(0,a.kt)("a",{parentName:"p",href:"#bootstrap-firezone"},"bootstrap instructions")," to setup Firezone."))),(0,a.kt)("h3",{id:"option-3-manual-install"},"Option 3: Manual install"),(0,a.kt)("p",null,"If all else fails, try these steps to install Firezone manually."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/"},"Install WireGuard")," for your distro.\nIf using Linux kernel 5.6 or higher, skip this step."),(0,a.kt)("li",{parentName:"ol"},"Download the relevant package for your distribution from the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/firezone/firezone/releases"},"releases page"),"."),(0,a.kt)("li",{parentName:"ol"},"Install with ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo rpm -i firezone*.rpm")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo dpkg -i firezone*.deb"),"\ndepending on your distro."),(0,a.kt)("li",{parentName:"ol"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"#bootstrap-firezone"},"bootstrap instructions")," to setup Firezone.")),(0,a.kt)("h3",{id:"bootstrap-firezone"},"Bootstrap Firezone"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Bootstrap the application with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo firezone-ctl reconfigure"),". This will\ninitialize config files, set up needed services and generate the default\nconfiguration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the default configuration located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/firezone/firezone.rb"),".\nWe've chosen sensible defaults that should be a good starting point for most\ninstallations. For production installations, you'll want to specify a valid\nexternal URL and enable ACME for certificate issuance and renewal:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# Auto-generated based on the server's hostname.\n# Set this to the URL used to access the Firezone Web UI.\ndefault['firezone']['external_url'] = 'https://firezone.example.com'\n\n# Set the email that will be used for the issued certificates and certifications.\ndefault['firezone']['ssl']['email_address'] = 'your@email.com'\n\n# Enable ACME renewal\ndefault['firezone']['ssl']['acme']['enabled'] = true\n")),(0,a.kt)("p",{parentName:"li"},"See the complete ",(0,a.kt)("a",{parentName:"p",href:"../../reference/configuration-file"},"configuration file reference for more details\n"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reconfigure the application to pick up the new changes:\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo firezone-ctl reconfigure"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, create an admin user with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo firezone-ctl create-or-reset-admin"),".\nThe login credentials will be printed to the console output.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now you should be able to sign in to the web UI at the URL you specified in\nstep 5 above, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://firezone.example.com")))),(0,a.kt)("p",null,"Find solutions to common issues during deployment in ",(0,a.kt)("a",{parentName:"p",href:"../../administer/troubleshoot"},"Troubleshoot\n"),"."),(0,a.kt)("h2",{id:"step-3-install-client-apps"},"Step 3: Install client apps"),(0,a.kt)("p",null,"Once successfully deployed, users and devices can be added to\nconnect to the VPN server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../user-guides/add-users"},"Add Users"),":\nAdd users to grant them access to your network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../user-guides/client-instructions"},"Client Instructions"),":\nInstructions to establish a VPN session.")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"First, check our ",(0,a.kt)("a",{parentName:"p",href:"../../administer/troubleshoot"},"troubleshooting guide")," to see\nif your issue is covered there. If you are unable to resolve the issue:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ask a question in our ",(0,a.kt)("a",{parentName:"li",href:"https://discourse.firez.one/"},"discussion forums")," or ",(0,a.kt)("a",{parentName:"li",href:"https://www.firezone.dev/slack"},"\nSlack channel")),(0,a.kt)("li",{parentName:"ul"},"Report bugs or propose new features on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/firezone/firezone"},"Github\n"))),(0,a.kt)("h2",{id:"post-setup"},"Post setup"),(0,a.kt)("p",null,"Congrats! You have completed the setup, but there's a lot more you can do with\nFirezone:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../authenticate/"},"Integrate your identity provider"),"\nfor authenticating clients"),(0,a.kt)("li",{parentName:"ul"},"Using Firezone to\n",(0,a.kt)("a",{parentName:"li",href:"../../user-guides/use-cases/nat-gateway"},"establish a static IP")),(0,a.kt)("li",{parentName:"ul"},"Create tunnels between multiple peers with\n",(0,a.kt)("a",{parentName:"li",href:"../../user-guides/use-cases/reverse-tunnel"},"reverse tunnels")),(0,a.kt)("li",{parentName:"ul"},"Only route certain traffic through Firezone with\n",(0,a.kt)("a",{parentName:"li",href:"../../user-guides/use-cases/split-tunnel"},"split tunneling"))),(0,a.kt)("p",null,"Support us by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Starring our repo on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/firezone/firezone"},"Github")),(0,a.kt)("li",{parentName:"ul"},"Following us on Twitter at ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/firezonehq"},"@firezonehq")),(0,a.kt)("li",{parentName:"ul"},"Following us on LinkedIn at ",(0,a.kt)("a",{parentName:"li",href:"https://www.linkedin.com/company/firezonehq"},"@firezonehq"))))}m.isMDXComponent=!0}}]);