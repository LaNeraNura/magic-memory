(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),i=n.n(r),l=(n(10),n(2)),u=n(1);n(13),n(15);function o(e){var t=e.card,n=e.handleChoice,c=e.flipped,r=e.disabled;return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:c?"flipped":""},a.a.createElement("img",{className:"front",src:t.src,alt:"card front"}),a.a.createElement("img",{className:"back",src:"/img/cover.png",onClick:function(){r||n(t)},alt:"card back"})))}var s=[{src:"/img/helmet-1.png",matched:!1},{src:"/img/potion-1.png",matched:!1},{src:"/img/ring-1.png",matched:!1},{src:"/img/scroll-1.png",matched:!1},{src:"/img/shield-1.png",matched:!1},{src:"/img/sword-1.png",matched:!1}];var m=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(0),m=Object(u.a)(i,2),d=m[0],f=m[1],p=Object(c.useState)(null),b=Object(u.a)(p,2),g=b[0],h=b[1],E=Object(c.useState)(null),j=Object(u.a)(E,2),O=j[0],v=j[1],w=Object(c.useState)(!1),k=Object(u.a)(w,2),N=k[0],S=k[1],M=function(){var e=[].concat(s,s).sort(function(){return Math.random()-.5}).map(function(e){return Object(l.a)({},e,{id:Math.random()})});h(null),v(null),r(e),f(0)},C=function(e){g?v(e):h(e)};Object(c.useEffect)(function(){g&&O&&(S(!0),g.src===O.src?(r(function(e){return e.map(function(e){return e.src===g.src?Object(l.a)({},e,{matched:!0}):e})}),setTimeout(function(){return T()},1e3)):setTimeout(function(){return T()},1e3))},[g,O]),console.log(n);var T=function(){h(null),v(null),f(function(e){return e+1}),S(!1)};return Object(c.useEffect)(function(){M()},[]),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Magic Match"),a.a.createElement("button",{onClick:M},"New Game"),a.a.createElement("div",{className:"card-grid"},n.map(function(e){return a.a.createElement(o,{key:e.id,card:e,handleChoice:C,flipped:e===g||e===O||e.matched,disabled:N})})),a.a.createElement("p",null,"Turns: ",d))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root"))}],[[5,2,1]]]);
//# sourceMappingURL=main.509cc8f9.chunk.js.map