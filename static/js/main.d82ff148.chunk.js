(this["webpackJsonpsimple-text-hiding"]=this["webpackJsonpsimple-text-hiding"]||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c,i=n(0),a=n(1),s=n.n(a),r=n(7),o=n.n(r),d=(n(14),n(3)),l=n(6),b=n.n(l),j=(n(18),n(8)),u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=Object(a.useRef)(Date.now());Object(a.useEffect)((function(){var n=setTimeout((function(){Date.now()-c.current>=t&&(e(),c.current=Date.now())}),t-(Date.now()-c.current));return function(){clearTimeout(n)}}),[t].concat(Object(j.a)(n)))};!function(e){e[e.Hide=0]="Hide",e[e.UnHide=1]="UnHide"}(c||(c={}));var h=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(c.Hide),o=Object(d.a)(r,2),l=o[0],j=o[1],h=Object(a.useState)(""),x=Object(d.a)(h,2),O=x[0],m=x[1],v=Object(a.useState)(""),f=Object(d.a)(v,2),p=f[0],N=f[1];return u((function(){m(function(e){var t="",n=!1;try{t=window.btoa(unescape(encodeURIComponent(e))),n=!0}finally{return[n,t]}}(n)[1]),N(function(e){var t="",n=!1;try{t=decodeURIComponent(escape(window.atob(e))),n=!0}finally{return[n,t]}}(n)[1])}),500,[n]),Object(i.jsxs)("div",{className:"app",children:[Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{className:"header_main",children:"Simple Text Hiding"}),Object(i.jsx)("div",{className:"header_sub",children:"Sometimes, you want to hide some sensitive text. Here is a simple way to do it"})]}),Object(i.jsxs)("div",{className:"input_box container",children:[Object(i.jsx)("label",{children:"Enter text here"}),Object(i.jsx)("textarea",{value:n,onChange:function(e){return s(e.target.value)}})]}),Object(i.jsxs)("div",{className:"tab_selector",children:[Object(i.jsx)("button",{className:l===c.Hide?"active btn":"btn",onClick:function(){return j(c.Hide)},children:"Hiden Text"}),Object(i.jsx)("button",{className:l===c.UnHide?"active btn":"btn",onClick:function(){return j(c.UnHide)},children:"Unhide Text"})]}),l===c.Hide&&Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"text_result",children:O}),Object(i.jsx)(b.a,{text:O,children:Object(i.jsx)("button",{className:"btn btn_2",children:"Copy"})})]}),l===c.UnHide&&Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"text_result",children:p}),Object(i.jsx)(b.a,{text:p,children:Object(i.jsx)("button",{className:"btn btn_2",children:"Copy"})})]}),Object(i.jsx)("div",{className:"footer",children:"Made by Quang Son with \u2764"})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.d82ff148.chunk.js.map