(()=>{"use strict";var e={629:(e,t,n)=>{const r=require("express"),a=require("react");var l=n.n(a);const o=require("react-dom/server"),c=require("react-router"),i=require("react-redux"),u=require("@reduxjs/toolkit"),d=require("styled-components");var s=n.n(d),f=(0,u.createSlice)({name:"cards",initialState:[],reducers:{cardAdded:function(e,t){e.push(t.payload)}}}),p=f.actions.cardAdded,v=f.reducer;const m=require("react-router-dom"),w=require("woly");var y,h,b;function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g,E,S,O=s().div(y||(y=x(['\n  --palette-snow-1000: #000000;\n  --palette-snow-500: #c0c0c0;\n  --palette-snow-100: #f5f5f5;\n  --palette-snow-0: #ffffff;\n  --palette-lavender-500: #9381f1;\n\n  /* should be rewritten to formulas */\n  --woly-line-height: 24px;\n  --woly-border-width: 1.5px;\n  --woly-rounding: 4px;\n  --woly-font-size: 15px;\n\n  --woly-const-m: 6px;\n  --woly-main-level: 3;\n\n  --woly-neutral: var(--palette-snow-500);\n  --woly-focus: #9381f1;\n  --woly-background: #ffffff;\n\n  [data-variant="default"] {\n    --woly-shape-default: #b0a3f4;\n    --woly-shape-disabled: #e5e5e5;\n    --woly-shape-hover: #c9c0f8;\n    --woly-shape-active: #b0a3f4;\n\n    --woly-shape-text-default: var(--palette-snow-0);\n    --woly-shape-text-disabled: var(--palette-snow-0);\n    --woly-shape-text-hover: var(--palette-snow-0);\n    --woly-shape-text-active: var(--palette-snow-0);\n\n    --woly-canvas-default: transparent;\n    --woly-canvas-disabled: var(--palette-snow-100);\n    --woly-canvas-hover: var(--palette-snow-500);\n    --woly-canvas-active: var(--palette-snow-500);\n\n    --woly-canvas-text-default: var(--palette-snow-1000);\n    --woly-canvas-text-disabled: var(--palette-snow-500);\n    --woly-canvas-text-hover: var(--palette-snow-500);\n    --woly-canvas-text-active: var(--palette-snow-500);\n  }\n']))),j=s().div(h||(h=x(["\n  --woly-font-size: 15px;\n"]))),A={M:s()(j)(b||(b=x(["\n  --woly-component-level: 3;\n"])))};function C(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw l}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k,q,z,_=function(){var e=T(a.useState(""),2),t=e[0],n=e[1],r=T(a.useState(""),2),l=r[0],o=r[1],c=(0,i.useDispatch)(),d=a.useCallback((function(e){n(e.target.value)}),[]),s=a.useCallback((function(e){o(e.target.value)}),[]),f=a.useCallback((function(e){e.preventDefault(),""!==t&&""!==l&&(c(p({id:(0,u.nanoid)(),title:t,content:l})),n(""),o(""))}),[t,l,c]);return a.createElement(I,null,a.createElement(R,{onSubmit:f},a.createElement("h2",null,"Add card"),a.createElement(D,null,a.createElement(w.Field,{label:"Title"},a.createElement(w.Input,{value:t,onChange:d,name:"title",type:"text"})),a.createElement(w.Field,{label:"Content"},a.createElement(w.Input,{value:l,onChange:s,name:"content",type:"text"})),a.createElement(w.Button,{type:"submit",text:"Add New Card"}))))},D=s().div(g||(g=C(["\n  display: flex;\n  flex-direction: column;\n"]))),I=s()(A.M)(E||(E=C(["\n  padding: 30px;\n"]))),R=s().form(S||(S=C(["\n  max-width: 300px;\n"])));function L(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var M,N,F,Y=function(){var e=(0,i.useSelector)((function(e){return e.cards}));return e&&0!==e.lenght?a.createElement(B,null,a.createElement("h2",null,"Your cards"),a.createElement(J,null,e.map((function(e){var t=e.title,n=e.id,r=e.content;return a.createElement(H,{key:n},a.createElement("h4",null,t),a.createElement("span",null,r))})))):null},B=s().div(k||(k=L(["\n  padding: 30px;\n"]))),H=s().div(q||(q=L(["\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n  max-width: 300px;\n"]))),J=s().div(z||(z=L(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n"]))),U=[{path:"/",render:a.createElement(Y,null),exact:!0},{path:"/add-card",render:a.createElement(_,null),exact:!0}],$=function(){return a.createElement(m.Switch,null,U.map((function(e){var t=e.path,n=e.exact,r=e.render;return a.createElement(m.Route,{key:t,exact:n,path:t,render:function(){return r}})})),a.createElement(m.Redirect,{to:"/"}))},G=function(){return a.createElement(K,null,a.createElement(m.Link,{to:"/"},"Home"),a.createElement(m.Link,{to:"/add-card"},"Add New Card"))},K=s().div(M||(N=["\n  display: flex;\n  background-color: #f5f5f5;\n  padding: 30px;\n  a {\n    padding: 0 30px;\n  }\n"],F||(F=N.slice(0)),M=Object.freeze(Object.defineProperties(N,{raw:{value:Object.freeze(F)}})))),Q=function(){return a.createElement(O,null,a.createElement(G,null),a.createElement($,null))},V=new Promise((function(e,t){setTimeout((function(){return e([{id:1,title:"Card title",content:"This is the content of the card"},{id:2,title:"Card title",content:"This is the content of the card"},{id:3,title:"Card title",content:"This is the content of the card"}])}),500)})),W=function(e){return(0,u.configureStore)({reducer:{cards:v},preloadedState:{cards:e}})},X=function(e,t){var n=new d.ServerStyleSheet,r=(0,o.renderToString)(n.collectStyles(l().createElement(i.Provider,{store:t},l().createElement(c.StaticRouter,{location:e.path},l().createElement(Q,null))))),a=n.getStyleTags(),u=t.getState();return'<!DOCTYPE html>\n              <head>\n                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n                  '.concat(a,'\n                  </head>\n              <body>\n                  <div id="root">').concat(r,"</div>\n                  <script> window.__PRELOADED_STATE__ = ").concat(JSON.stringify(u).replace(/</g,"\\u003c"),'<\/script>\n                  <script src="/bundle.js"><\/script>\n              </body>\n      </html>')},Z=function(e,t){return V.then((function(e){return W(e)})).then((function(t){return X(e,t)})).then((function(e){return t.send(e)}))},ee={"/":Z,"/add-card":function(e,t){var n=W([]),r=X(e,n);t.send(r)}},te=r(),ne=process.env.PORT||3e3;te.use(r.static("public")),te.get("*",(function(e,t){return function(e,t){var n=ee[e.url];n?n(e,t):Z(e,t)}(e,t)})),te.listen(ne,(function(){console.log("Listening on port: ".concat(ne))}))},949:e=>{e.exports=require("@babel/polyfill")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(949),n(629)})();