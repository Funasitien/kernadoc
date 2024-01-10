"use strict";(self.webpackChunkdreamdoc=self.webpackChunkdreamdoc||[]).push([[3607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(r),s=n,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||i;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4},l="Les Villes",o={unversionedId:"villes",id:"villes",title:"Les Villes",description:"Vous avez la possibilit\xe9 sur KernaCraft de cr\xe9er une ville. Elle vous permet de pouvoir construire \xe0 plusieurs, de partager vos constructions mais aussi de pouvoir avoir un point de spawn ou encore des claires",source:"@site/docs/villes.md",sourceDirName:".",slug:"/villes",permalink:"/docs/villes",draft:!1,editUrl:"https://github.com/Funasitien/kernadoc/edit/main/docs/villes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\xc9conomie",permalink:"/docs/commandes/economy"},next:{title:"Voicechat",permalink:"/docs/voicechat"}},p={},d=[{value:"G\xe9n\xe9ral",id:"g\xe9n\xe9ral",level:2},{value:"Spawn",id:"spawn",level:2},{value:"Claims",id:"claims",level:2},{value:"Banque",id:"banque",level:2},{value:"Niveaux",id:"level",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"les-villes"},"Les Villes"),(0,n.kt)("h1",{id:"concept-de-villes"},"Concept de villes"),(0,n.kt)("p",null,"Vous avez la possibilit\xe9 sur KernaCraft de cr\xe9er une ville. Elle vous permet de pouvoir construire \xe0 plusieurs, de partager vos constructions mais aussi de pouvoir avoir un point de spawn ou encore des claires"),(0,n.kt)("admonition",{title:"C'est super important ce truc.",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"La cr\xe9ation de villes est tr\xe8s importante car elle vous permet de pouvoir proteger vos constructions des autres joueurs. Jetez un coup d'oeuil \xe0 la partit\nsur les ",(0,n.kt)("a",{parentName:"p",href:"#claims"},"claims")," pour en savoir plus.")),(0,n.kt)("h1",{id:"cr\xe9errejoindre-une-ville"},"Cr\xe9er/Rejoindre une ville"),(0,n.kt)("p",null,"La cr\xe9ation d'une ville est simple : il vous suffit de taper la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"/town create <name>"),". Si vous \xeates le propri\xe9taire de la ville, vous pouvez ensuite inviter des joueurs dans celles-ci avec la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"/town invite <joueur>"),"\nNote : vous ne pouvez inviter des joueurs dans votre ville que si il ne font partit d'aucune autre ville."),(0,n.kt)("h1",{id:"customiser-votre-ville"},"Customiser votre ville"),(0,n.kt)("h2",{id:"g\xe9n\xe9ral"},"G\xe9n\xe9ral"),(0,n.kt)("p",null,"Vous pouvez customizer plusieurs aspects g\xe9n\xe9raux de votre ville, comme :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La couleur de votre ville. Modifiable avec ",(0,n.kt)("inlineCode",{parentName:"li"},"town color <#rgb>")),(0,n.kt)("li",{parentName:"ul"},"La biographie de votre ville, qui appara\xeet quand on effectue ",(0,n.kt)("inlineCode",{parentName:"li"},"/town info <nom>")," et au survol dans la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"/town list"),". Modifiable avec ",(0,n.kt)("inlineCode",{parentName:"li"},"/town bio <message>")),(0,n.kt)("li",{parentName:"ul"},"Le message d'arriv\xe9e, qui s'affiche quand on entre dans un territoire (ou claim) de votre ville et qui se modifie avec ",(0,n.kt)("inlineCode",{parentName:"li"},"/town greeting <message>")),(0,n.kt)("li",{parentName:"ul"},"Le message de d\xe9part qui s'affiche quand on quitte un territoire (ou claim) de votre ville et qui se modifie avec ",(0,n.kt)("inlineCode",{parentName:"li"},"/town farewell <message>"))),(0,n.kt)("p",null,"Et si vous voulez changer le nom de votre ville, vous pouvez utiliser ",(0,n.kt)("inlineCode",{parentName:"p"},"/town rename <nom>")),(0,n.kt)("h1",{id:"utiliser-votre-ville"},"Utiliser votre ville"),(0,n.kt)("h2",{id:"spawn"},"Spawn"),(0,n.kt)("p",null,"Votre ville peux avoir un spawn. Il peux s'av\xe9rer tr\xe8s utilie car cela fait un home en plus mais surtout un home commun \xe0 tout les joueurs de votre ville. Pour vous y t\xe9l\xe9portez, utilisez la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"/town spawn"),". Pour modifier sa position, utilisez ",(0,n.kt)("inlineCode",{parentName:"p"},"/town setspawn")),(0,n.kt)("h2",{id:"claims"},"Claims"),(0,n.kt)("p",null,"Les claims sont un concept primordiale des villes, et sans doute la seul raison de faire une ville. Cr\xe9er un claim signifie de vous aproprier (au nom de votre ville) une parcelle de terrain qui sera prot\xe9ger des autres joueurs. Petites notes sur les claims :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vous ne pouvez pas claim sur le terrain de quelqu'un d'autre"),(0,n.kt)("li",{parentName:"ul"},"Vous avez un nombre de claims limmit\xe9. Vous pouvez l'augementer en ",(0,n.kt)("a",{parentName:"li",href:"#level"},"augementant de niveaux"))),(0,n.kt)("h1",{id:"concept-techniques"},"Concept Techniques"),(0,n.kt)("p",null,"Pour les joueurs qui voudrais faire du roleplay ou juste s'investire dans leurs ville, voici quelques commandes avancer pour affirmer votre pouvoir m\xe9dio-politique-intrakernacraftient."),(0,n.kt)("h2",{id:"banque"},"Banque"),(0,n.kt)("p",null,"Votre ville a une banque. Vous pouve d\xe9poser des pi\xe8ces dedans avec la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"/town deposit"),". Vous pouvez r\xe9cup\xe9rer de l'argent dans celle si avec la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"/town withdraw"),". L'argent de votre banque peux \xeatre utiliser pour ",(0,n.kt)("a",{parentName:"p",href:"#level"},"augementer de niveaux")),(0,n.kt)("h2",{id:"level"},"Niveaux"),(0,n.kt)("p",null,"Votre ville a un niveau par d\xe9faut de 1. En mettant de l'argent dans votre ",(0,n.kt)("a",{parentName:"p",href:"#banque"},"banque"),", vous pouvez acheter des niveaux pour votre ville, et par la m\xeame occasion augementer vos nombres de claims,\nAvantages de votre ville en fonction du niveau : "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Nous sommes en train de r\xe9fl\xe9chir les bonus et les prix. Ce tableau est donc en cr\xe9ation")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udcc8 Niveau"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\ud83e\ude99 Prix"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udc64 Habitants"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\ud83c\udfe1 Terrain (Claims)"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\ud83c\udf3e Bonus de Ferme"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0 Pi\xe8ces"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 2"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 3"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 4"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 5"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 6"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 7"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 8"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 9"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 10"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 11"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 12"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 13"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 14"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 15"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 16"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 17"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 18"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 19"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Niveau 20"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);