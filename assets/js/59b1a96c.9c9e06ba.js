"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[67],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"Overview",sidebar_position:1},a=void 0,s={unversionedId:"README",id:"README",title:"Overview",description:"Firezone is an open-source secure remote access",source:"@site/docs/README.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/README.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Deploy",permalink:"/deploy/"}},l={},u=[{value:"Quick Start",id:"quick-start",level:2},{value:"Common Configuration Guides",id:"common-configuration-guides",level:2},{value:"Get Help",id:"get-help",level:2},{value:"Contribute to Firezone",id:"contribute-to-firezone",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://firezone.dev"},"Firezone")," is an open-source secure remote access\nplatform that can be deployed on your own infrastructure in minutes.\nUse it to ",(0,o.kt)("strong",{parentName:"p"},"quickly and easily")," secure access to\nyour private network and internal applications from an intuitive web UI."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/183804397-ae81ca4e-6972-41f9-80d4-b431a077119d.png",alt:"Architecture"})),(0,o.kt)("p",null,"These docs explain how to deploy, configure, and use Firezone."),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"deploy"},"Deploy"),": A step-by-step walk-through setting up Firezone.\nStart here if you are new."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"authenticate"},"Authenticate"),": Set up authentication using local\nemail/password, OpenID Connect, or SAML 2.0 and optionally enable\nTOTP-based MFA."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"administer"},"Administer"),": Day to day administration of the Firezone\nserver."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"user-guides"},"User Guides"),": Useful guides to help you learn how to use\nFirezone and troubleshoot common issues. Consult this section\nafter you successfully deploy the Firezone server.")),(0,o.kt)("h2",{id:"common-configuration-guides"},"Common Configuration Guides"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./user-guides/use-cases/split-tunnel"},"Split Tunneling"),":\nOnly route traffic to certain IP ranges through the VPN."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./user-guides/use-cases/nat-gateway"},"Setting up a NAT Gateway with a Static IP"),":\nConfigure Firezone with a static IP address to provide\na single egress IP for your team's traffic."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./user-guides/use-cases/reverse-tunnel"},"Reverse Tunnels"),":\nEstablish tunnels between multiple peers.")),(0,o.kt)("h2",{id:"get-help"},"Get Help"),(0,o.kt)("p",null,"If you're looking for help installing, configuring, or using Firezone, check our\ncommunity support options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://discourse.firez.one/"},"Discussion Forums"),": Ask questions, report\nbugs, and suggest features."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://join.slack.com/t/firezone-users/shared_invite/zt-111043zus-j1lP_jP5ohv52FhAayzT6w"},"Public Slack Group"),":\nJoin live discussions, meet other users, and get to know the contributors."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/firezone/firezone/issues"},"Open a PR"),": Contribute a bugfix\nor make a contribution to Firezone.")),(0,o.kt)("p",null,"If you need help deploying or maintaining Firezone for your team or organization, consider\n",(0,o.kt)("a",{parentName:"p",href:"https://firezone.dev/contact/sales"},"contacting us about our paid support plan"),"."),(0,o.kt)("h2",{id:"contribute-to-firezone"},"Contribute to Firezone"),(0,o.kt)("p",null,"We deeply appreciate any and all contributions to the project and do our best to\nensure your contribution is included. To get started, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/firezone/firezone/blob/master/CONTRIBUTING.md"},"CONTRIBUTING.md\n"),"."))}c.isMDXComponent=!0}}]);