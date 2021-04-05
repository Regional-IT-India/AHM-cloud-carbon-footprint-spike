(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(116)),i={id:"introduction",title:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"There are a few options when it comes to running the app locally.",source:"@site/docs/RunningLocallyIntro.md",slug:"/introduction",permalink:"/docs/introduction",version:"current",sidebar:"tryNowSidebar",previous:{title:"Methodology",permalink:"/docs/methodology"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},u=[{value:"Connecting your Data",id:"connecting-your-data",children:[]},{value:"Your Setup - Defaults and Customizations",id:"your-setup---defaults-and-customizations",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are a few options when it comes to running the app locally."),Object(a.b)("p",null,"If you are hoping to get up and running quickly, check out the ",Object(a.b)("a",{parentName:"p",href:"getting-started"},"Getting Started")," for how to begin, including a command to run for a quick install. This will guide you through running the app with your data (for additional details, read on below)."),Object(a.b)("p",null,"If you\u2019re not ready to connect your data, no problem - you can ",Object(a.b)("a",{parentName:"p",href:"run-with-mocked-data"},"run with mocked data"),"."),Object(a.b)("h3",{id:"connecting-your-data"},"Connecting your Data"),Object(a.b)("p",null,"A few steps are required to run the app with real data, that are different for each cloud provider. "),Object(a.b)("p",null,"To make it easier to configure your app with real data, we have ",Object(a.b)("a",{parentName:"p",href:"getting-started#guided-install"},"Guided Install instructions")," that you can follow.   "),Object(a.b)("p",null,"To manually configure your cloud provider(s), check out the steps for each cloud provider in the Connect to Real Data section:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"aws"},"AWS")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"gcp"},"GCP")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"azure"},"Azure"))),Object(a.b)("p",null,"If you have a lot of data and begin to experience performance issues, check out our ",Object(a.b)("a",{parentName:"p",href:"performance-configurations"},"Performance Configurations")," page for some options you can set up to improve it."),Object(a.b)("h3",{id:"your-setup---defaults-and-customizations"},"Your Setup - Defaults and Customizations"),Object(a.b)("p",null,"By default, Cloud Carbon Footprint will be configured to pull data from billing data. This option allows for a holistic view of your emissions, energy and cost data over a given period of time. It will pull usage information for all services for the accounts you give it access to and then use the average cpu utilization for each cloud provider\u2019s processors."),Object(a.b)("p",null,"If you are looking to get more granular, we do have an option to configure Cloud Carbon Footprint to pull data from a select few services for AWS and GCP. For more information on this approach and how to configure it please visit the ",Object(a.b)("a",{parentName:"p",href:"alternative-data-approaches"},"Alternative Approaches")," page."))}p.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);