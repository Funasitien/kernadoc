"use strict";(self.webpackChunkdreamdoc=self.webpackChunkdreamdoc||[]).push([[3607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),v=i,m=c["".concat(u,".").concat(v)]||c[v]||d[v]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=v;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:4},l="Les Villes",o={unversionedId:"villes",id:"villes",title:"Les Villes",description:"Vous avez la possibilit\xe9 sur KernaCraft de cr\xe9er une ville. Elle vous permet de pouvoir construire \xe0 plusieurs, de partager vos constructions mais aussi de pouvoir avoir un point de spawn ou encore des claires",source:"@site/docs/villes.md",sourceDirName:".",slug:"/villes",permalink:"/docs/villes",draft:!1,editUrl:"https://github.com/Funasitien/kernadoc/edit/main/docs/villes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"T\xe9l\xe9portation",permalink:"/docs/commandes/tp"},next:{title:"Voicechat",permalink:"/docs/voicechat"}},u={},s=[{value:"G\xe9n\xe9ral",id:"g\xe9n\xe9ral",level:2},{value:"Spawn",id:"spawn",level:2},{value:"Claims",id:"claims",level:2},{value:"Banque",id:"banque",level:2},{value:"Niveaux",id:"level",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"les-villes"},"Les Villes"),(0,i.kt)("h1",{id:"concept-de-villes"},"Concept de villes"),(0,i.kt)("p",null,"Vous avez la possibilit\xe9 sur KernaCraft de cr\xe9er une ville. Elle vous permet de pouvoir construire \xe0 plusieurs, de partager vos constructions mais aussi de pouvoir avoir un point de spawn ou encore des claires"),(0,i.kt)("admonition",{title:"C'est super important ce truc.",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"La cr\xe9ation de villes est tr\xe8s importante car elle vous permet de pouvoir proteger vos constructions des autres joueurs. Jetez un coup d'oeuil \xe0 la partit\nsur les ",(0,i.kt)("a",{parentName:"p",href:"#claims"},"claims")," pour en savoir plus.")),(0,i.kt)("h1",{id:"cr\xe9errejoindre-une-ville"},"Cr\xe9er/Rejoindre une ville"),(0,i.kt)("p",null,"La cr\xe9ation d'une ville est simple : il vous suffit de taper la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"/town create <name>"),". Si vous \xeates le propri\xe9taire de la ville, vous pouvez ensuite inviter des joueurs dans celles-ci avec la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"/town invite <joueur>"),"\nNote : vous ne pouvez inviter des joueurs dans votre ville que si il ne font partit d'aucune autre ville."),(0,i.kt)("h1",{id:"customiser-votre-ville"},"Customiser votre ville"),(0,i.kt)("h2",{id:"g\xe9n\xe9ral"},"G\xe9n\xe9ral"),(0,i.kt)("p",null,"Vous pouvez customizer plusieurs aspects g\xe9n\xe9raux de votre ville, comme :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"La couleur de votre ville. Modifiable avec ",(0,i.kt)("inlineCode",{parentName:"li"},"town color <#rgb>")),(0,i.kt)("li",{parentName:"ul"},"La biographie de votre ville, qui appara\xeet quand on effectue ",(0,i.kt)("inlineCode",{parentName:"li"},"/town info <nom>")," et au survol dans la commande ",(0,i.kt)("inlineCode",{parentName:"li"},"/town list"),". Modifiable avec ",(0,i.kt)("inlineCode",{parentName:"li"},"/town bio <message>")),(0,i.kt)("li",{parentName:"ul"},"Le message d'arriv\xe9e, qui s'affiche quand on entre dans un territoire (ou claim) de votre ville et qui se modifie avec ",(0,i.kt)("inlineCode",{parentName:"li"},"/town greeting <message>")),(0,i.kt)("li",{parentName:"ul"},"Le message de d\xe9part qui s'affiche quand on quitte un territoire (ou claim) de votre ville et qui se modifie avec ",(0,i.kt)("inlineCode",{parentName:"li"},"/town farewell <message>"))),(0,i.kt)("p",null,"Et si vous voulez changer le nom de votre ville, vous pouvez utiliser ",(0,i.kt)("inlineCode",{parentName:"p"},"/town rename <nom>")),(0,i.kt)("h1",{id:"utiliser-votre-ville"},"Utiliser votre ville"),(0,i.kt)("h2",{id:"spawn"},"Spawn"),(0,i.kt)("p",null,"Votre ville peux avoir un spawn. Il peux s'av\xe9rer tr\xe8s utilie car cela fait un home en plus mais surtout un home commun \xe0 tout les joueurs de votre ville. Pour vous y t\xe9l\xe9portez, utilisez la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"/town spawn"),". Pour modifier sa position, utilisez ",(0,i.kt)("inlineCode",{parentName:"p"},"/town setspawn")),(0,i.kt)("h2",{id:"claims"},"Claims"),(0,i.kt)("p",null,"Les claims sont un concept primordiale des villes, et sans doute la seul raison de faire une ville. Cr\xe9er un claim signifie de vous aproprier (au nom de votre ville) une parcelle de terrain qui sera prot\xe9ger des autres joueurs. Petites notes sur les claims :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vous ne pouvez pas claim sur le terrain de quelqu'un d'autre"),(0,i.kt)("li",{parentName:"ul"},"Vous avez un nombre de claims limmit\xe9. Vous pouvez l'augementer en ",(0,i.kt)("a",{parentName:"li",href:"#level"},"augementant de niveaux"))),(0,i.kt)("h1",{id:"concept-techniques"},"Concept Techniques"),(0,i.kt)("p",null,"Pour les joueurs qui voudrais faire du roleplay ou juste s'investire dans leurs ville, voici quelques commandes avancer pour affirmer votre pouvoir m\xe9dio-politique-intrakernacraftient."),(0,i.kt)("h2",{id:"banque"},"Banque"),(0,i.kt)("p",null,"Votre ville a une banque. Vous pouve d\xe9poser des pi\xe8ces dedans avec la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"/town deposit"),". Vous pouvez r\xe9cup\xe9rer de l'argent dans celle si avec la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"/town withdraw"),". L'argent de votre banque peux \xeatre utiliser pour ",(0,i.kt)("a",{parentName:"p",href:"#level"},"augementer de niveaux")),(0,i.kt)("h2",{id:"level"},"Niveaux"),(0,i.kt)("p",null,"Votre ville a un niveau par d\xe9faut de 1. En mettant de l'argent dans votre ",(0,i.kt)("a",{parentName:"p",href:"#banque"},"banque"),", vous pouvez acheter des niveaux pour votre ville, et par la m\xeame occasion augementer"))}d.isMDXComponent=!0}}]);