(this["webpackJsonpweb-software-engineer-test"]=this["webpackJsonpweb-software-engineer-test"]||[]).push([[0],[,,,,,,,,,,,,function(e){e.exports=JSON.parse("[1,[2],[3,null,[5]]]")},function(e){e.exports=JSON.parse('["a",["b",["b1"],["b2",["b21"],["b22"]]],["c",["c1",["c11",["c111"]],["c12",null,["c121"]]],["c2",null,["c21"]]]]')},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(5),i=n.n(c),a=(n(23),n(3)),l=(n(24),n(25),n(0)),u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"navbar-wrapper",children:Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)("h1",{children:"Web Software Engineer Test"})})}),Object(l.jsx)("div",{className:"header-wrapper",children:Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"About this test"}),Object(l.jsxs)("p",{children:["In the following test, a series of problems that web developers face every day will be exposed.",Object(l.jsx)("br",{})," With it, problem solving skills will be put to the test using the most advanced web technology, to give users the best possible experience."]}),Object(l.jsx)("button",{onClick:function(){return window.open("https://github.com/JeanVegaD/web-software-engineer-test/blob/master/README.md","_blank")},children:"Read more"})]})})]})},o=(n(27),n(10)),j=n(11),h=function(){function e(t,n,r){Object(o.a)(this,e),this.id=t,null!=n&&null!=r?(this.left=n,this.right=r):null!=n&&null==r?this.left=n:null===n&&null!=r&&(this.left=null,this.right=r)}return Object(j.a)(e,[{key:"getID",get:function(){return this.id}},{key:"getLeft",get:function(){return this.left}},{key:"getRight",get:function(){return this.right}},{key:"hasChildren",value:function(e){return!!e&&!(!e.left&&!e.right)}},{key:"getDeeperNodeAux",value:function(e,t,n){if(e.depth=t,e.parent=n,this.hasChildren(e)){var r=e.left?this.getDeeperNodeAux(e.left,t+1,e):null,s=e.right?this.getDeeperNodeAux(e.right,t+1,e):null;return null===r?s:null===s?r:r.depth===s.depth?(e.depth=e.depth+1,e):r.depth>s.depth?r:s}return e}},{key:"getDeeperNode",value:function(){this.getDeeperNodeAux(this,0,this).isDeepest=!0}}]),e}(),b=function(e){return"string"===typeof e||"number"===typeof e},d=function e(t){var n=!0;if(function(e){return!!Array.isArray(e)&&(1===e.length?b(e[0]):2===e.length?b(e[0])&&Array.isArray(e[1]):3===e.length&&b(e[0])&&(Array.isArray(e[1])||null===e[1])&&Array.isArray(e[2]))}(t)){if(2===t.length)return e(t[1]);if(3===t.length)return Array.isArray(t[1])?e(t[1])&&e(t[2]):e(t[2])}else n=!1;return n},p=function e(t){var n,r,s;switch(t.length){case 1:n=t[0],r=null,s=null;break;case 2:n=t[0],r=e(t[1]),s=null;break;case 3:n=t[0],r=Array.isArray(t[1])?e(t[1]):null,s=e(t[2])}return new h(n,r,s)},f=function(e){return!!d(e)&&JSON.stringify(p(e),null,2)},O=n(12),g=n(13),x=function(e){var t=e.inputArr,n=e.inputArrError,s=e.setInputArr,c=e.setInputArrError,i=e.setInputJson,a=function(e){c(e)};return Object(r.useEffect)((function(){a(!1)}),[t]),Object(l.jsx)("div",{className:"content-wrapper",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h1",{children:"Process the input into a tree"}),Object(l.jsx)("label",{htmlFor:"input_array",children:"Tree source"}),Object(l.jsx)("input",{type:"text",id:"input_array",name:"input_array",className:n?"inputError":"",value:t||"",onChange:function(e){s(e.target.value)}}),Object(l.jsx)("div",{className:"spanBox",children:n&&Object(l.jsx)("span",{children:"Parse error, please check the input and try again"})}),Object(l.jsx)("button",{onClick:function(){try{var e=f(JSON.parse(t));e?i(e):a(!0)}catch(n){a(!0)}},disabled:!t,children:"Fetch"}),Object(l.jsx)("button",{className:"secondaryButton",onClick:function(){s(JSON.stringify(O))},children:"Sample data 1"}),Object(l.jsx)("button",{className:"secondaryButton",onClick:function(){s(JSON.stringify(g))},children:"Sample data 2"})]})})},v=(n(28),function(e){return"string"===typeof e||"number"===typeof e}),m=function e(t){var n=!0;if(function(e){if("object"===typeof e){var t=Object.keys(e),n=Object.values(e);return 1===t.length?"id"===t[0]&&v(n[0]):2===t.length?"id"===t[0]&&"left"===t[1]&&v(n[0])&&"object"===typeof n[1]:3===t.length&&"id"===t[0]&&"left"===t[1]&&"right"===t[2]&&v(n[0])&&("object"===typeof n[1]||null===n[1])&&"object"===typeof n[2]}return!1}(t)){var r=Object.keys(t),s=Object.values(t);if(2===r.length)return e(s[1]);if(3===r.length)return null!==s[1]?e(s[1])&&e(s[2]):e(s[2])}else n=!1;return n},y=function e(t){var n,r,s,c=Object.keys(t),i=Object.values(t);switch(c.length){case 1:n=i[0],r=null,s=null;break;case 2:n=i[0],r=e(i[1]),s=null;break;case 3:n=i[0],r=null!=i[1]?e(i[1]):null,s=e(i[2])}return new h(n,r,s)},N=function(e){try{var t=JSON.parse(e);return!!m(t)&&y(t)}catch(n){return!1}},w=function(e){var t=e.inputJson,n=e.inputJsonError,s=e.setInputJson,c=e.setInputJsonError,i=e.setBinTree,a=function(e){c(e)};return Object(r.useEffect)((function(){a(!1)}),[t]),Object(l.jsx)("div",{className:"content-wrapper",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("label",{htmlFor:"output_json",children:"Tree text"}),Object(l.jsx)("textarea",{id:"output_json",rows:"10",name:"output_json",value:t,onChange:function(e){s(e.target.value)},className:n?"inputError":""}),Object(l.jsx)("div",{className:"spanBox",children:n&&Object(l.jsx)("span",{children:"Parse error, please check the input and try again"})}),Object(l.jsx)("button",{disabled:!t,onClick:function(){var e=N(t);e?i(e):a(!0)},children:"Process"})]})})},k=(n(29),function(e){var t=e.binTree;return Object(l.jsx)("div",{className:"content-wrapper",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h1",{children:"Output"}),Object(l.jsxs)("div",{className:"outputArea",children:[t&&t.getDeeperNode(),t&&function e(t){var n=null===t||void 0===t?void 0:t.id,r=null===t||void 0===t?void 0:t.left,s=null===t||void 0===t?void 0:t.right,c=null===t||void 0===t?void 0:t.isDeepest;return Object(l.jsx)("div",{className:c?"parentDeepst":"parent",children:t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"id",children:n}),(r||s)&&Object(l.jsxs)("div",{className:"children",children:[Object(l.jsx)("div",{children:e(r)}),Object(l.jsx)("div",{children:e(s)})]})]})})}(t)]})]})})}),A=n(14),J=n.n(A),S=n(16),E=n.n(S),D=n(17),I=n.n(D),C=(n(30),function(){return Object(l.jsx)("div",{className:"footer-wrapper",children:Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("h3",{children:"Ing. Jean Vega D\xedaz"}),Object(l.jsxs)("div",{className:"iconsBox",children:[Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"https://github.com/JeanVegaD",target:"_blank",children:Object(l.jsx)(J.a,{})})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/jeanvegad/",target:"_blank",children:Object(l.jsx)(E.a,{})})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"mailto: jean0798@gmail.com",target:"_blank",children:Object(l.jsx)(I.a,{})})})]})]})})}),_=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(!1),i=Object(a.a)(c,2),o=i[0],j=i[1],h=Object(r.useState)(""),b=Object(a.a)(h,2),d=b[0],p=b[1],f=Object(r.useState)(!1),O=Object(a.a)(f,2),g=O[0],v=O[1],m=Object(r.useState)(),y=Object(a.a)(m,2),N=y[0],A=y[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(x,{inputArr:n,inputArrError:o,setInputArr:s,setInputArrError:j,setInputJson:p}),Object(l.jsx)(w,{inputJson:d,inputJsonError:g,setInputJson:p,setInputJsonError:v,setBinTree:A}),Object(l.jsx)(k,{binTree:N}),Object(l.jsx)(C,{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),B()}],[[37,1,2]]]);
//# sourceMappingURL=main.1f42a192.chunk.js.map