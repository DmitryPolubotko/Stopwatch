(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{10:function(t,e,s){},11:function(t,e,s){"use strict";s.r(e);var c=s(1),n=s.n(c),a=s(4),i=s.n(a),r=s(3),o=s(0);var j=function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:t.time.h>=10?t.time.h:"0"+t.time.h}),"\xa0:\xa0",Object(o.jsx)("span",{children:t.time.m>=10?t.time.m:"0"+t.time.m}),"\xa0:\xa0",Object(o.jsx)("span",{children:t.time.s>=10?t.time.s:"0"+t.time.s})]})};var h=function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"stopwatch-btm stopwatch-start",onClick:t.start,children:"Start"}),Object(o.jsx)("button",{className:"stopwatch-btm stopwatch-stop",onClick:t.stop,children:"Stop"}),Object(o.jsx)("button",{className:"stopwatch-btm stopwatch-reset",onClick:t.reset,children:"Reset"})]})};s(10);var m=function(){var t=Object(c.useState)({s:0,m:0,h:0}),e=Object(r.a)(t,2),s=e[0],n=e[1],a=Object(c.useState)(),i=Object(r.a)(a,2),m=i[0],l=i[1],b=s.s,d=s.m,p=s.h,u=function(){return 60===d&&(p++,d=0),60===b&&(d++,b=0),b++,n({s:b,m:d,h:p})};return Object(o.jsx)("div",{className:"main-section",children:Object(o.jsx)("div",{className:"clock",children:Object(o.jsxs)("div",{className:"stopwath",children:[Object(o.jsx)(j,{time:s}),Object(o.jsx)(h,{reset:function(){clearInterval(m),n({s:0,m:0,h:0})},stop:function(){clearInterval(m)},start:function(){u(),l(setInterval(u,1e3))}})]})})})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.a326fcf1.chunk.js.map