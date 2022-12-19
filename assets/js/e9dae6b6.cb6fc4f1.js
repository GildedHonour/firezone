"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[2895],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89791:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={title:"Regenerate Secret Keys",sidebar_position:7},i=void 0,s={unversionedId:"administer/regen-keys",id:"administer/regen-keys",title:"Regenerate Secret Keys",description:"When you install Firezone, secrets are generated for encrypting database",source:"@site/docs/administer/regen-keys.mdx",sourceDirName:"administer",slug:"/administer/regen-keys",permalink:"/administer/regen-keys",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/administer/regen-keys.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Regenerate Secret Keys",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Troubleshoot",permalink:"/administer/troubleshoot"},next:{title:"Debug Logs",permalink:"/administer/debug-logs"}},l={},p=[{value:"Regenerate secrets",id:"regenerate-secrets",level:2},{value:"Regenerate WireGuard private key",id:"regenerate-wireguard-private-key",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},d=c("Tabs"),u=c("TabItem"),m={toc:p};function g(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you install Firezone, secrets are generated for encrypting database\nfields, securing WireGuard tunnels, securing cookie sessions, and more."),(0,a.kt)("p",null,"If you're looking to regenerate one or more of these secrets, it's possible\nto do so using the same bootstrap scripts that were used when installing\nFirezone."),(0,a.kt)("h2",{id:"regenerate-secrets"},"Regenerate secrets"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Replacing the ",(0,a.kt)("inlineCode",{parentName:"p"},"DATABASE_ENCRYPTION_KEY")," will render all encrypted data in the\ndatabase useless. This ",(0,a.kt)("strong",{parentName:"p"},"will")," break your Firezone install unless you are\nstarting with an empty database. You have been warned.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"GUARDIAN_SECRET_KEY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SECRET_KEY_BASE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LIVE_VIEW_SIGNING_SALT"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"COOKIE_SIGNING_SALT"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"COOKIE_ENCRYPTION_SALT"),"\nwill render all browser sessions and JWTs useless.")),(0,a.kt)("p",null,"Use the procedure below to regenerate secrets:"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(u,{value:"docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Navigate to the Firezone installation directory, then:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mv .env .env.bak\ndocker run firezone/firezone bin/gen-env > .env\n"))),(0,a.kt)(u,{value:"omnibus",label:"Omnibus",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mv /etc/firezone/secrets.json /etc/firezone/secrets.bak.json\nsudo firezone-ctl reconfigure\n")))),(0,a.kt)("h2",{id:"regenerate-wireguard-private-key"},"Regenerate WireGuard private key"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Replacing the WireGuard private key will render all existing device configs\nuseless. Only do so if you're prepared to also regenerate device configs\nafter regenerating the WireGuard private key.")),(0,a.kt)("p",null,"To regenerate WireGuard private key, simply move or rename the private key file.\nFirezone will generate a new one on next start."),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(u,{value:"docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose stop firezone\nsudo mv $HOME/.firezone/firezone/private_key $HOME/.firezone/firezone/private_key.bak\ndocker-compose start firezone\n"))),(0,a.kt)(u,{value:"omnibus",label:"Omnibus",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo firezone-ctl stop phoenix\nsudo mv /var/opt/firezone/cache/wg_private_key /var/opt/firezone/cache/wg_private_key.bak\nsudo firezone-ctl start phoenix\n")))))}g.isMDXComponent=!0}}]);