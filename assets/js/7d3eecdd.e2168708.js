"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[63],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=o,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||r;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"Onelogin",sidebar_position:6},a=void 0,l={unversionedId:"authenticate/oidc/onelogin",id:"authenticate/oidc/onelogin",title:"Onelogin",description:"Firezone supports Single Sign-On (SSO) using OneLogin",source:"@site/docs/authenticate/oidc/onelogin.mdx",sourceDirName:"authenticate/oidc",slug:"/authenticate/oidc/onelogin",permalink:"/authenticate/oidc/onelogin",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/authenticate/oidc/onelogin.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Onelogin",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/authenticate/oidc/okta"},next:{title:"Zitadel",permalink:"/authenticate/oidc/zitadel"}},p={},c=[{value:"Obtain Config Settings",id:"obtain-config-settings",level:2},{value:"Step 1 - Configure Custom Connector",id:"step-1---configure-custom-connector",level:3},{value:"Step 2 - Configure the OIDC Application",id:"step-2---configure-the-oidc-application",level:3},{value:"Integrate With Firezone",id:"integrate-with-firezone",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Firezone supports Single Sign-On (SSO) using OneLogin\nthrough the generic OIDC connector. This guide will walk you through how to\nobtain the following config settings required for the integration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Config ID"),": The provider's config ID. (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"onelogin"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Label"),": The button label text that shows up on your Firezone login screen. (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"Onelogin"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Scope"),": ",(0,o.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-basic-1_0.html#Scopes"},"OIDC scopes"),"\nto obtain from your OIDC provider. This should be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"openid email profile"),"\nto provide Firezone with the user's email in the returned claims."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Response type"),": Set to ",(0,o.kt)("inlineCode",{parentName:"li"},"code"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Client ID"),": The client ID of the application."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Client secret"),": The client secret of the application."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Discovery Document URI"),": The\n",(0,o.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"},"OpenID Connect provider configuration URI"),"\nwhich returns a JSON document used to construct subsequent requests to this\nOIDC provider.")),(0,o.kt)("h2",{id:"obtain-config-settings"},"Obtain Config Settings"),(0,o.kt)("h3",{id:"step-1---configure-custom-connector"},"Step 1 - Configure Custom Connector"),(0,o.kt)("p",null,"Create a new OIDC connector by visiting ",(0,o.kt)("strong",{parentName:"p"},"Appliances > Custom Connectors"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"App name"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Firezone")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Icon"),": ",(0,o.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/52545545/156854754-da66a9e1-33d5-47f5-877f-eff8b330ab2b.png"},"Firezone logo"),"\nor\n",(0,o.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/52545545/156854754-da66a9e1-33d5-47f5-877f-eff8b330ab2b.png"},"Firezone icon"),"\n(save link as)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sign on method"),": select ",(0,o.kt)("strong",{parentName:"li"},"OpenID Connect")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Redirect URI"),": Add your Firezone ",(0,o.kt)("inlineCode",{parentName:"li"},"<EXTERNAL_URL> + /auth/oidc/<Config ID>/callback/"),"\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://firezone.example.com/auth/oidc/onelogin/callback/"),").")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/173190108-569e5cb5-e66b-4505-a4c5-fedd22872a04.png",alt:"Onelogin Configuration"})),(0,o.kt)("h3",{id:"step-2---configure-the-oidc-application"},"Step 2 - Configure the OIDC Application"),(0,o.kt)("p",null,"Next, click ",(0,o.kt)("strong",{parentName:"p"},"Add App to Connector")," to create an OIDC application.\nVisit the ",(0,o.kt)("strong",{parentName:"p"},"SSO")," tab, then change the token endpoint authentication method\nto ",(0,o.kt)("strong",{parentName:"p"},"POST"),"."),(0,o.kt)("p",null,"You will find the values for the config settings required by Firezone\non this page as well."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/180120191-dfeab4ef-d7f5-4c04-a7b2-7d9338af34e6.png",alt:"Onelogin Config Parameters"})),(0,o.kt)("h2",{id:"integrate-with-firezone"},"Integrate With Firezone"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/settings/security"),' page in the admin portal, click\n"Add OpenID Connect Provider" and enter the details you obtained in the steps\nabove.'),(0,o.kt)("p",null,"Enable or disable the ",(0,o.kt)("strong",{parentName:"p"},"Auto create users")," option to automatically create\nan unprivileged user when signing in via this authentication mechanism."),(0,o.kt)("p",null,"And that's it! The configuration should be updated immediately.\nYou should now see a ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign in with Onelogin")," button on the sign in page."))}u.isMDXComponent=!0}}]);