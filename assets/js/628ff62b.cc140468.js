"use strict";(self.webpackChunkdreamdoc=self.webpackChunkdreamdoc||[]).push([[6875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Authentification",tags:["Authentification","Commandes"],sidebar_position:2},i=void 0,s={unversionedId:"commandes/auth",id:"commandes/auth",title:"Authentification",description:"Depuis la v2, seul les joueurs cracks on besoin d'un mot de passe. Cool non ?",source:"@site/docs/commandes/auth.md",sourceDirName:"commandes",slug:"/commandes/auth",permalink:"/docs/commandes/auth",draft:!1,editUrl:"https://github.com/Funasitien/kernadoc/edit/main/docs/commandes/auth.md",tags:[{label:"Authentification",permalink:"/docs/tags/authentification"},{label:"Commandes",permalink:"/docs/tags/commandes"}],version:"current",sidebarPosition:2,frontMatter:{title:"Authentification",tags:["Authentification","Commandes"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Commandes Utiles",permalink:"/docs/commandes/"},next:{title:"Les Cit\xe9s sont tr\xe8s importantes.",permalink:"/docs/commandes/cite"}},l={},u=[],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Nouveau !",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Depuis la v2, ",(0,o.kt)("strong",{parentName:"p"},"seul les joueurs cracks")," on besoin d'un mot de passe. Cool non ?")),(0,o.kt)("h1",{id:"lauthentification-sur-kernacraft"},"L'authentification sur KERNACRAFT"),(0,o.kt)("p",null,"Pour \xe9viter que les compte cracks puissent \xeatre vol\xe9s, nous avons ajouter une authentication, n\xe9cessaire pour tout joueur crack, qui s\xe9curis\xe9 votre compte"),(0,o.kt)("h1",{id:"comment-\xe7a-marche-"},"Comment \xe7a marche ?"),(0,o.kt)("p",null,"Lors de votre premi\xe8re connexion, vous deverais entrer la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"/register")," avec votre mot de passe (",(0,o.kt)("inlineCode",{parentName:"p"},"/register MonMotDePasse MonMotDePasse"),") Il vous faudra ensuite \xe0 chaque connexion entrer la commande ",(0,o.kt)("inlineCode",{parentName:"p"},"/login MonMotDePasse")," pour pouvoir jouer"),(0,o.kt)("h1",{id:"mais-pourquoi-"},"Mais pourquoi ?"),(0,o.kt)("p",null,"Vous ne l'avez peux \xeatre pas remarqu\xe9, mais vous pouvez choisir n'importe quel pseudo en tant que crack. N'importe qui pourrait donc prendre votre pseudo et voler votre stuff... Ce mot de passe est donc la meilleur fa\xe7on de prot\xe9ger votre compte."),(0,o.kt)("h1",{id:"autres-commandes-utiles"},"Autres commandes utiles"),(0,o.kt)("p",null,"Voici la liste des commandes utiles qui concernent l'authentification."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/login <password>"),": Se connecter avec son mot de passe"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/logout"),": Se d\xe9connecter (il utiliser /login \xe0 nouveau pour pouvoir jouer sur votre compte. Utiliser cette commande quand vous jouer dans des lieux publics)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/register [password] [verifyPassword]"),": Enregistrer un mot de passe"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/unregister <password>"),": Supprimer son compte"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/changepassword <oldPassword> <newPassword>"),": Changer votre mot de passe"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/email add <email> <verifyEmail>"),": Ajouter un email, utilisable en cas d'oubli du mot de passe"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/email show"),": Afficher l'adresse e-mail li\xe9 au compte"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/email change <oldEmail> <newEmail>"),": Changer l'adresse email li\xe9 au compte"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/email recover <email>"),": Envoyer une requ\xeate pour r\xe9cup\xe9rer son mot de passe par email"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/email code <code>"),": Utiliser le code re\xe7u par e-mail pour d\xe9bloquer votre compte"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/email setpassword <password>"),": Utiliser l'email pour changer de mot de passe")))}p.isMDXComponent=!0}}]);