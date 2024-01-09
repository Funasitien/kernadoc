"use strict";(self.webpackChunkdreamdoc=self.webpackChunkdreamdoc||[]).push([[3607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||v[d]||l;return r?i.createElement(m,o(o({ref:t},c),{},{components:r})):i.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,o[1]=a;for(var u=2;u<l;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const l={sidebar_position:4},o="Les Villes",a={unversionedId:"villes",id:"villes",title:"Les Villes",description:"Concept de villes",source:"@site/docs/villes.md",sourceDirName:".",slug:"/villes",permalink:"/docs/villes",draft:!1,editUrl:"https://github.com/Funasitien/kernadoc/edit/main/docs/villes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Les Cit\xe9s sont tr\xe8s importantes.",permalink:"/docs/commandes/cite"},next:{title:"Voicechat",permalink:"/docs/voicechat"}},s={},u=[{value:"Concept de villes",id:"concept-de-villes",level:2},{value:"Cr\xe9er/Rejoindre une ville",id:"cr\xe9errejoindre-une-ville",level:2},{value:"Customiser votre ville",id:"customiser-votre-ville",level:2},{value:"G\xe9n\xe9ral",id:"g\xe9n\xe9ral",level:3},{value:"Utiliser votre ville",id:"utiliser-votre-ville",level:2},{value:"Spawn",id:"spawn",level:3},{value:"Claims",id:"claims",level:3}],c={toc:u},p="wrapper";function v(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"les-villes"},"Les Villes"),(0,n.kt)("h2",{id:"concept-de-villes"},"Concept de villes"),(0,n.kt)("p",null,"Vous avez la possibilit\xe9 sur KernaCraft de cr\xe9er une ville. Elle vous permet de pouvoir construire \xe0 plusieurs, de partager vos constructions mais aussi de pouvoir avoir un point de spawn ou encore des claires"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"La cr\xe9ation de villes est tr\xe8s importante car elle vous permet de pouvoir proteger vos constructions des autres joueurs. Jetez un coup d'oeuil \xe0 la partit\nsur les ",(0,n.kt)("a",{parentName:"p",href:"#claims"},"claims")," pour en savoir plus.")),(0,n.kt)("h2",{id:"cr\xe9errejoindre-une-ville"},"Cr\xe9er/Rejoindre une ville"),(0,n.kt)("p",null,"La cr\xe9ation d'une ville est simple : il vous suffit de taper la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"/town create <name>"),". Si vous \xeates le propri\xe9taire de la ville, vous pouvez ensuite inviter des joueurs dans celles-ci avec la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"/town invite <joueur>"),"\nNote : vous ne pouvez inviter des joueurs dans votre ville que si il ne font partit d'aucune autre ville."),(0,n.kt)("h2",{id:"customiser-votre-ville"},"Customiser votre ville"),(0,n.kt)("h3",{id:"g\xe9n\xe9ral"},"G\xe9n\xe9ral"),(0,n.kt)("p",null,"Vous pouvez customizer plusieurs aspects g\xe9n\xe9raux de votre ville, comme :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La couleur de votre ville. Modifiable avec ",(0,n.kt)("inlineCode",{parentName:"li"},"town color <#rgb>")),(0,n.kt)("li",{parentName:"ul"},"La biographie de votre ville, qui appara\xeet quand on effectue ",(0,n.kt)("inlineCode",{parentName:"li"},"/town info <nom>")," et au survol dans la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"/town list"),". Modifiable avec ",(0,n.kt)("inlineCode",{parentName:"li"},"/town bio <message>")),(0,n.kt)("li",{parentName:"ul"},"Le message d'arriv\xe9e, qui s'affiche quand on entre dans un territoire (ou claim) de votre ville et qui se modifie avec ",(0,n.kt)("inlineCode",{parentName:"li"},"/town greeting <message>")),(0,n.kt)("li",{parentName:"ul"},"Le message de d\xe9part qui s'affiche quand on quitte un territoire (ou claim) de votre ville et qui se modifie avec ",(0,n.kt)("inlineCode",{parentName:"li"},"/town farewell <message>"))),(0,n.kt)("p",null,"Et si vous voulez changer le nom de votre ville, vous pouvez utiliser ",(0,n.kt)("inlineCode",{parentName:"p"},"/town rename <nom>")),(0,n.kt)("h2",{id:"utiliser-votre-ville"},"Utiliser votre ville"),(0,n.kt)("h3",{id:"spawn"},"Spawn"),(0,n.kt)("p",null,"WIP"),(0,n.kt)("h3",{id:"claims"},"Claims"),(0,n.kt)("p",null,"WIP"))}v.isMDXComponent=!0}}]);