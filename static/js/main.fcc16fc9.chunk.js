(this.webpackJsonpreactpiz=this.webpackJsonpreactpiz||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(20),r=n.n(a),i=(n(27),n(7)),o=n.n(i),j=n(22),d=n(12),l=n(13),b=n(9),p=n(2),u=(n(29),n(1)),h=function(e){var t=Object(c.useState)(void 0),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(p.f)().id;return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,a(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"container",children:s&&Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:s.sprites.other.dream_world.front_default,alt:""})}),Object(u.jsxs)("div",{children:["id: ",s.id]}),Object(u.jsxs)("div",{children:["Name: ",s.name]}),Object(u.jsxs)("div",{children:["Type: ",s.types[0].type.name]}),Object(u.jsxs)("div",{children:["Attacs: ",s.stats[1].base_stat]}),Object(u.jsxs)("div",{children:["Defence: ",s.stats[2].base_stat]}),Object(u.jsxs)("div",{children:["HP: ",s.stats[0].base_stat]}),Object(u.jsxs)("div",{children:["SP Attack: ",s.stats[3].base_stat]}),Object(u.jsxs)("div",{children:["SP Defense: ",s.stats[4].base_stat]}),Object(u.jsxs)("div",{children:["Speed: ",s.stats[5].base_stat]}),Object(u.jsxs)("div",{children:["Weight: ",s.weight]})]})})},O=function(e){var t=e.id,n=e.name,c=e.image,s=e.type,a="thumb-container ".concat(s);return Object(u.jsxs)("div",{className:a,children:[Object(u.jsx)("div",{className:"number",children:Object(u.jsx)("small",{children:t})}),Object(u.jsx)("img",{src:c,alt:n}),Object(u.jsxs)("div",{className:"detail-wrapper",children:[Object(u.jsx)("h3",{children:n}),Object(u.jsxs)("small",{children:["Type: ",s]})]}),Object(u.jsx)(b.b,{to:"/pokepage/"+t,className:"bt-wrapper",children:"More information"})]})};var x=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("https://pokeapi.co/api/v2/pokemon?limit=20"),r=Object(l.a)(a,2),i=r[0],b=r[1],p=function(){var e=Object(d.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){e.forEach(function(){var e=Object(d.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t.name));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,s((function(e){return[].concat(Object(j.a)(e),[c])}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},e.next=3,fetch(i);case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,b(c.next),a(c.results),e.next=11,console.log(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(n),Object(c.useEffect)((function(){p()}),[]),Object(u.jsx)("div",{className:"app-container",children:Object(u.jsxs)("div",{className:"pokemon-container",children:[Object(u.jsx)("div",{className:"all-container",children:n.map((function(e,t){return Object(u.jsx)(O,{id:e.id,image:e.sprites.other.dream_world.front_default,name:e.name,type:e.types[0].type.name},t)}))}),Object(u.jsx)("button",{className:"load-more",onClick:function(){return p()},children:"Load more"})]})})},m=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"header__title",children:"Pokemon Evolution"}),Object(u.jsx)("div",{className:"navigation",children:Object(u.jsx)(b.b,{to:"/",children:"Go Home"})})]})};var f=function(){var e=Object(p.g)();return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"app-container",children:Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{path:"/",component:x}),Object(u.jsx)(p.a,{path:"/",component:h}),Object(u.jsx)(p.a,{path:"".concat(e.path,"/:id"),children:Object(u.jsx)(h,{})})]})})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.fcc16fc9.chunk.js.map