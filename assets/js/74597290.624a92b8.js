"use strict";(self.webpackChunkroadtrip_docs=self.webpackChunkroadtrip_docs||[]).push([[973],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9668:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="Create a Document",s={unversionedId:"signing-in/create-a-document",id:"signing-in/create-a-document",isDocsHomePage:!1,title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/signing-in/create-a-document.md",sourceDirName:"signing-in",slug:"/signing-in/create-a-document",permalink:"/docs/signing-in/create-a-document",editUrl:"https://github.com/RickyTB/roadtrip-docs/edit/main/docs/signing-in/create-a-document.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Page",permalink:"/docs/signing-in/create-a-page"},next:{title:"Create a Blog Post",permalink:"/docs/signing-in/create-a-blog-post"}},u=[{value:"Create your first Doc",id:"create-your-first-doc",children:[],level:2},{value:"Configure the Sidebar",id:"configure-the-sidebar",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-document"},"Create a Document"),(0,o.kt)("p",null,"Documents are ",(0,o.kt)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"sidebar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"previous/next navigation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"versioning"))),(0,o.kt)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,o.kt)("p",null,"Create a markdown file at ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,o.kt)("p",null,"A new document is now available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),(0,o.kt)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,o.kt)("p",null,"Docusaurus automatically ",(0,o.kt)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,o.kt)("p",null,"Add metadatas to customize the sidebar label and position:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md" {1-4}',title:'"docs/hello.md"',"{1-4}":!0},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,o.kt)("p",null,"It is also possible to create your sidebar explicitly in ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    {\n      type: 'category',\n      label: 'Tutorial',\n-     items: [...],\n+     items: ['hello'],\n    },\n  ],\n};\n")))}d.isMDXComponent=!0}}]);