"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[2723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(r),c=o,k=s["".concat(i,".").concat(c)]||s[c]||m[c]||a;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},24960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={title:"Supported Platforms",sidebar_position:1},l=void 0,p={unversionedId:"deploy/docker/supported-platforms",id:"deploy/docker/supported-platforms",title:"Supported Platforms",description:"Firezone currently supports the following platforms for Docker-based",source:"@site/docs/deploy/docker/supported-platforms.mdx",sourceDirName:"deploy/docker",slug:"/deploy/docker/supported-platforms",permalink:"/deploy/docker/supported-platforms",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/deploy/docker/supported-platforms.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Supported Platforms",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/deploy/docker/"},next:{title:"Omnibus",permalink:"/deploy/omnibus/"}},i={},d=[],u={toc:d};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Firezone currently supports the following platforms for Docker-based\ndeployments."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"OS"),(0,o.kt)("th",{parentName:"tr",align:null},"Architecture(s)"),(0,o.kt)("th",{parentName:"tr",align:null},"Runtime"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"amd64")," ",(0,o.kt)("inlineCode",{parentName:"td"},"arm64")),(0,o.kt)("td",{parentName:"tr",align:null},"Docker Server"),(0,o.kt)("td",{parentName:"tr",align:null},"Fully-supported"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"wireguard")," module needed for kernels ","<"," ",(0,o.kt)("inlineCode",{parentName:"td"},"5.6"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"amd64")," ",(0,o.kt)("inlineCode",{parentName:"td"},"arm64")),(0,o.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,o.kt)("td",{parentName:"tr",align:null},"Fully-supported"),(0,o.kt)("td",{parentName:"tr",align:null},"Not recommended for production deployments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"macOS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"amd64")," ",(0,o.kt)("inlineCode",{parentName:"td"},"arm64")),(0,o.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,o.kt)("td",{parentName:"tr",align:null},"Fully-supported"),(0,o.kt)("td",{parentName:"tr",align:null},"Not recommended for production deployments.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Windows"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"amd64")," ",(0,o.kt)("inlineCode",{parentName:"td"},"arm64")),(0,o.kt)("td",{parentName:"tr",align:null},"Docker Desktop"),(0,o.kt)("td",{parentName:"tr",align:null},"Fully-supported"),(0,o.kt)("td",{parentName:"tr",align:null},"Not recommended for production deployments.")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Docker Desktop ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/blog/how-docker-desktop-networking-works-under-the-hood/"},"rewrites the source address\n"),"\nfor packets flowing out of container networks under some conditions. This can\ncause routing loops and other hard to debug connectivity issues with Firezone.\nWe recommend ",(0,o.kt)("strong",{parentName:"p"},"only")," using Docker Server for Linux for production deployments.")))}m.isMDXComponent=!0}}]);