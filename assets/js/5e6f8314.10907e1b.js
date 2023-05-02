"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[2041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"OpenID Connect",sidebar_position:10,description:"Setup single sign-on with your identity provider. Integrate providers like Okta, Google, Azure, and JumpCloud using Firezone's OpenID Connect (OIDC) connector."},i="Integrate your identity provider using OIDC",l={unversionedId:"authenticate/oidc/README",id:"authenticate/oidc/README",title:"OpenID Connect",description:"Setup single sign-on with your identity provider. Integrate providers like Okta, Google, Azure, and JumpCloud using Firezone's OpenID Connect (OIDC) connector.",source:"@site/docs/authenticate/oidc/README.mdx",sourceDirName:"authenticate/oidc",slug:"/authenticate/oidc/",permalink:"/docs/authenticate/oidc/",draft:!1,editUrl:"https://github.com/firezone/firezone/blob/master/www/docs/authenticate/oidc/README.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"OpenID Connect",sidebar_position:10,description:"Setup single sign-on with your identity provider. Integrate providers like Okta, Google, Azure, and JumpCloud using Firezone's OpenID Connect (OIDC) connector."},sidebar:"tutorialSidebar",previous:{title:"Multi-Factor Authentication",permalink:"/docs/authenticate/multi-factor"},next:{title:"Auth0",permalink:"/docs/authenticate/oidc/auth0"}},p={},d=[{value:"Supported identity providers",id:"supported-identity-providers",level:2},{value:"General setup guide",id:"general-setup-guide",level:2},{value:"PKCE",id:"pkce",level:3},{value:"OIDC logout URI",id:"oidc-logout-uri",level:3}],u={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-your-identity-provider-using-oidc"},"Integrate your identity provider using OIDC"),(0,a.kt)("p",null,"Firezone supports Single Sign-On (SSO) via OpenID Connect (OIDC)."),(0,a.kt)("h2",{id:"supported-identity-providers"},"Supported identity providers"),(0,a.kt)("p",null,"In general, most identity providers that offer OIDC support work with Firezone.\nSome providers that only implement the OIDC partially or use uncommon\nconfigurations may have issues, however. If your identity provider falls into\nthis category, ",(0,a.kt)("a",{parentName:"p",href:"/contact/sales"},"contact us ")," about a custom integration."),(0,a.kt)("p",null,"The following OIDC providers are known to work well with Firezone:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Provider"),(0,a.kt)("th",{parentName:"tr",align:null},"Support Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"azuread"},"Azure Active Directory")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Fully tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null},"Ensure the ",(0,a.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims"},(0,a.kt)("inlineCode",{parentName:"a"},"email")," claim")," is present in the token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"okta"},"Okta")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Fully tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"onelogin"},"Onelogin")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Fully tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.keycloak.org/"},"Keycloak")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Fully tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"auth0"},"Auth0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Fully tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null},"Auth0 does not provide an ",(0,a.kt)("inlineCode",{parentName:"td"},"end_session_uri")," in its OIDC discovery document. Signing out of Auth0 from Firezone is not supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"google"},"Google Workspace")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Fully tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null},"Google does not provide an ",(0,a.kt)("inlineCode",{parentName:"td"},"end_session_uri")," in its OIDC discovery document. Signing out of Google Workspace from Firezone is not supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"zitadel"},"Zitadel")),(0,a.kt)("td",{parentName:"tr",align:null},"Untested but known to work"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://goauthentik.io/"},"Authentik")),(0,a.kt)("td",{parentName:"tr",align:null},"Untested but known to work"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"general-setup-guide"},"General setup guide"),(0,a.kt)("p",null,"If you're using an OIDC provider not listed above, the following OIDC attributes\nare required for setting up an OIDC provider in Firezone:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"discovery_document_uri"),": The\n",(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"},"OpenID Connect provider configuration URI"),'\nwhich returns a JSON document used to construct subsequent requests to this\nOIDC provider. Some providers refer to this as the "well-known URL".'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"client_id"),": The client ID of the application."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"client_secret"),": The client secret of the application."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"redirect_uri"),": Instructs OIDC provider where to redirect after\nauthentication. This should be your Firezone\n",(0,a.kt)("inlineCode",{parentName:"li"},"EXTERNAL_URL + /auth/oidc/<provider_key>/callback/")," (e.g.\n",(0,a.kt)("inlineCode",{parentName:"li"},"https://firezone.example.com/auth/oidc/google/callback/"),")."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"response_type"),": Set to ",(0,a.kt)("inlineCode",{parentName:"li"},"code"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"scope"),":\n",(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-basic-1_0.html#Scopes"},"OIDC scopes"),"\nto obtain from your OIDC provider. At a minimum, Firezone requires the\n",(0,a.kt)("inlineCode",{parentName:"li"},"openid")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"email")," scopes."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"label"),": The button label text displayed on the Firezone portal login page.")),(0,a.kt)("h3",{id:"pkce"},"PKCE"),(0,a.kt)("p",null,"Firezone supports Proof Key for Code Exchange (PKCE) for increased login\nsecurity. We recommend you enable PKCE in your IdP's settings whenever\navailable. ",(0,a.kt)("a",{parentName:"p",href:"https://oauth.net/2/pkce/"},"Read more about PKCE here"),"."),(0,a.kt)("h3",{id:"oidc-logout-uri"},"OIDC logout URI"),(0,a.kt)("p",null,"The OpenID Connect standard\n",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html"},"defines a mechanism"),"\nfor a Relying Party (RP) to request that an OpenID Provider log out the\nEnd-User."),(0,a.kt)("p",null,"Unfortunately, not all IdPs support this (e.g. Google, Auth0). For the providers\nthat do support this mechanism, Firezone automatically detects the\n",(0,a.kt)("inlineCode",{parentName:"p"},"end_session_uri")," found in the provider's discovery document and uses that to\nlog out the End-User."))}c.isMDXComponent=!0}}]);