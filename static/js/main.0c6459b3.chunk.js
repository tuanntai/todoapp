(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{50:function(e,n,c){},51:function(e,n,c){},64:function(e,n,c){"use strict";c.r(n);var t,a,i=c(1),o=c.n(i),s=c(37),l=c.n(s),r=(c(50),c(8)),d=c(14),j=c(26),b=(c(51),c(73)),u=c(71),O=c(72),h=c(28),C=c(29),m=c(70),p=c(25),k=c.n(p),f=c(3),v=Object(C.b)(u.a)(t||(t=Object(h.a)(["\n  margin-top: 5px;\n  text-align:left;\n\n  &,\n  &:hover{\n  ","\n  }\n  &:hover{\n    .remove-icon{\n      display: inline-block;\n    }\n  }\n  .remove-icon{\n    display:none;\n    border-radius:3px;\n  }\n\n\n\n"])),(function(e){return e.isCompleted&&Object(C.a)(a||(a=Object(h.a)(["\n    text-decoration: line-through;\n    color:#555555;    \n  "])))}));var x=function(e){e.key;var n=e.todoItem,c=e.HandleCheckChild,t=e.HandleRemoveClick,a=e.HandleRemoveChecked;return Object(f.jsxs)("div",{className:"todoItem",children:[Object(f.jsx)(m.a,{size:"large",onChange:function(){return c(n.id)},isChecked:n.isChecked}),Object(f.jsx)(v,{onChange:function(){return a()},isCompleted:n.isComplete,shouldFitContainer:!0,iconAfter:Object(f.jsx)("span",{className:"remove-icon",onClick:function(){return t(n)},children:Object(f.jsx)(k.a,{cursor:"pointer",size:"large"})}),children:n.name})]})};var g=function(e){var n=e.TodoList,c=e.HandleCheckChild,t=e.HandleRemoveClick,a=e.HandleRemoveChecked;return Object(f.jsx)("div",{children:n.map((function(e){return Object(f.jsx)(x,{HandleCheckChild:c,HandleRemoveClick:t,HandleRemoveChecked:a,todoItem:e})}))})};var H=function(){return Object(f.jsx)("div",{className:"Header",children:Object(f.jsx)("div",{className:"header-title",children:Object(f.jsx)("p",{children:" Overdose List "})})})};var y=function(){var e=Object(i.useState)([]),n=Object(j.a)(e,2),c=n[0],t=n[1],a=Object(i.useState)(""),o=Object(j.a)(a,2),s=o[0],l=o[1],h=Object(i.useState)(!1),C=Object(j.a)(h,2),p=C[0],v=C[1],x=Object(i.useCallback)((function(e){l(e.target.value)}),[]),y=Object(i.useCallback)((function(e){t([{id:Object(O.a)(),name:s,isComplete:!1,isChecked:!1}].concat(Object(d.a)(c))),l("")}),[s,c]),N=Object(i.useCallback)((function(e){13===e.keyCode&&(t([{id:Object(O.a)(),name:s,isComplete:!1,isChecked:!1}].concat(Object(d.a)(c))),l(""))}),[s,c]),R=Object(i.useCallback)((function(e){console.log("log");var n=e.target.checked;t((function(e){return e.map((function(e){return!0===n?(v(!0),Object(r.a)(Object(r.a)({},e),{},{isChecked:n,isComplete:!0})):!1===n?(v(!1),Object(r.a)(Object(r.a)({},e),{},{isChecked:n,isComplete:!1})):void 0}))}))}),[]),I=Object(i.useCallback)((function(e){console.log("log"),t((function(n){return n.map((function(n){return!1===n.isChecked?n.id===e?Object(r.a)(Object(r.a)({},n),{},{isChecked:!0,isComplete:!0}):n:n.id===e?Object(r.a)(Object(r.a)({},n),{},{isChecked:!1,isComplete:!1}):n}))}))}),[]),z=Object(i.useCallback)((function(e){console.log("log"),e.isChecked&&c.splice(c.indexOf(e),1),t(Object(d.a)(c))}),[c]),S=Object(i.useCallback)((function(){console.log("check"),c.map((function(e){!0===e.isComplete&&(c.splice(c.indexOf(e),1),S())})),t(Object(d.a)(c)),v(!1)}),[c]);return Object(f.jsxs)("div",{className:"App scrollbar",children:[Object(f.jsx)(H,{}),Object(f.jsxs)("div",{className:"input-container",children:[Object(f.jsx)(m.a,{isChecked:p,onChange:R,size:"large",name:"parent"}),Object(f.jsx)("span",{className:"remove-icon",onClick:function(){return S()},children:Object(f.jsx)(k.a,{primary:"#4fff4f",cursor:"pointer",size:"large"})}),Object(f.jsx)(b.a,{placeholder:"Nh\u1eadp Todo",value:s,onChange:x,onKeyUp:N,elemAfterInput:Object(f.jsx)(u.a,{onClick:y,isDisabled:!s,appearance:"primary",type:"submit",children:"Th\xeam v\xe0o"})})]}),Object(f.jsx)(g,{TodoList:c,HandleCheckChild:I,HandleRemoveClick:z,HandleRemoveChecked:S})]})};l.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.0c6459b3.chunk.js.map