_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("23aj")}])},"23aj":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return h}));var r=i("nKUr");var n=function(){return(n=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function c(e){return e.toLowerCase()}var l=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function s(e,t,i){return t instanceof RegExp?e.replace(t,i):t.reduce((function(e,t){return e.replace(t,i)}),e)}function d(e,t){var i=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&i>="0"&&i<="9"?"_"+i+r:""+i.toUpperCase()+r}function j(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var i=t.splitRegexp,r=void 0===i?l:i,n=t.stripRegexp,d=void 0===n?a:n,j=t.transform,o=void 0===j?c:j,u=t.delimiter,b=void 0===u?" ":u,x=s(s(e,r,"$1\0$2"),d,"\0"),O=0,h=x.length;"\0"===x.charAt(O);)O++;for(;"\0"===x.charAt(h-1);)h--;return x.slice(O,h).split("\0").map(o).join(b)}(e,n({delimiter:"",transform:d},t))}function o(e,t){return 0===t?e.toLowerCase():d(e,t)}function u(e,t){return void 0===t&&(t={}),j(e,n({transform:o},t))}var b=function(e){var t=e.labelText,i=e.increaseBy,n=e.divideBy,c=e.minimum,l=e.maximum,a=e.defaultValue,s="".concat(u(t),"Selector"),d=Math.floor((l-c)/i),j=Array(d).fill(0).map((function(e,t){return(c+i+t*i)/n})).reverse();return Object(r.jsxs)("label",{children:[Object(r.jsx)("strong",{children:t}),Object(r.jsx)("select",{id:s,value:a,children:j.map((function(e){return Object(r.jsx)("option",{value:e,children:e})}))})]})},x=function(e){var t=e.labelText,i=e.defaultValue,n="".concat(u(t),"Selector");return Object(r.jsxs)("label",{children:[Object(r.jsx)("strong",{children:t}),Object(r.jsxs)("select",{id:n,value:i,children:[Object(r.jsx)("option",{value:"true",children:"true"}),Object(r.jsx)("option",{value:"false",children:"false"})]})]})},O=function(e){var t=e.labelText,i=e.defaultValue,n="".concat(u(t),"Input");return Object(r.jsxs)("label",{children:[Object(r.jsx)("strong",{children:t}),Object(r.jsx)("input",{type:"text",id:n,value:i})]})};function h(){return Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:Object(r.jsx)("img",{alt:"JPEGasus logo",src:"img/jpegasus-logo-reversed.png"})}),Object(r.jsxs)("form",{children:[Object(r.jsx)(b,{labelText:"maxHeight",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(r.jsx)(b,{labelText:"maxWidth",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(r.jsx)(b,{labelText:"scaleImageBy",increaseBy:1,defaultValue:1,divideBy:100,maximum:200,minimum:0}),Object(r.jsx)(b,{labelText:"quality",increaseBy:1,defaultValue:.65,divideBy:100,maximum:100,minimum:0}),Object(r.jsx)(x,{labelText:"Return original if compressed file is larger",defaultValue:"false"}),Object(r.jsx)(x,{labelText:"Return original on failure",defaultValue:"true"}),Object(r.jsx)(x,{labelText:"Fix image orientation",defaultValue:"true"}),Object(r.jsx)(x,{labelText:"Preserve file type",defaultValue:"false"}),Object(r.jsx)(O,{labelText:"Transparency fill color",defaultValue:"#FFF"}),Object(r.jsxs)("label",{children:[Object(r.jsx)("strong",{children:"Upload Image"}),Object(r.jsx)("input",{type:"file",id:"imageInput"})]}),Object(r.jsx)("input",{type:"button",value:"Submit"}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"\xa0"}),Object(r.jsx)("th",{children:"Size (kb)"}),Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Orientation"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("strong",{children:"Original"})}),Object(r.jsx)("td",{id:"originalSize",children:"\u2014"}),Object(r.jsx)("td",{id:"originalType",children:"\u2014"}),Object(r.jsx)("td",{id:"originalOrientation",children:"\u2014"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("strong",{children:"Compressed"})}),Object(r.jsx)("td",{id:"compressedSize",children:"\u2014"}),Object(r.jsx)("td",{id:"compressedType",children:"\u2014"}),Object(r.jsx)("td",{id:"compressedOrientation",children:"\u2014"})]})]})]})]})]}),Object(r.jsx)("main",{role:"main",children:Object(r.jsx)("span",{id:"compressedImageSpan",children:"Please upload an image to see a preview here"})})]})})}},Qetd:function(e,t,i){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports}},[["/EDR",0,1]]]);