"use strict";(self.webpackChunkroadtrip_docs=self.webpackChunkroadtrip_docs||[]).push([[688],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),y=o,m=d["".concat(s,".").concat(y)]||d[y]||c[y]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1683:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:5},s="Deploy your site",u={unversionedId:"signing-in/deploy-your-site",id:"signing-in/deploy-your-site",isDocsHomePage:!1,title:"Deploy your site",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/signing-in/deploy-your-site.md",sourceDirName:"signing-in",slug:"/signing-in/deploy-your-site",permalink:"/docs/signing-in/deploy-your-site",editUrl:"https://github.com/RickyTB/roadtrip-docs/edit/main/docs/signing-in/deploy-your-site.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/docs/signing-in/markdown-features"},next:{title:"Congratulations!",permalink:"/docs/signing-in/congratulations"}},p=[{value:"Build your site",id:"build-your-site",children:[],level:2},{value:"Deploy your site",id:"deploy-your-site-1",children:[],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-your-site"},"Deploy your site"),(0,i.kt)("p",null,"Docusaurus is a ",(0,i.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,i.kt)("p",null,"It builds your site as simple ",(0,i.kt)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,i.kt)("h2",{id:"build-your-site"},"Build your site"),(0,i.kt)("p",null,"Build your site ",(0,i.kt)("strong",{parentName:"p"},"for production"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,i.kt)("p",null,"The static files are generated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,i.kt)("h2",{id:"deploy-your-site-1"},"Deploy your site"),(0,i.kt)("p",null,"Test your production build locally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"."),(0,i.kt)("p",null,"You can now deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,i.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,i.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}d.isMDXComponent=!0}}]);