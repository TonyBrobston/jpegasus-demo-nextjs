_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"23aj":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var i=r("nKUr");var n=function(){return(n=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function c(e){return e.toLowerCase()}var a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function s(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}function d(e,t){var r=e.charAt(0),i=e.substr(1).toLowerCase();return t>0&&r>="0"&&r<="9"?"_"+r+i:""+r.toUpperCase()+i}function j(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,i=void 0===r?a:r,n=t.stripRegexp,d=void 0===n?l:n,j=t.transform,u=void 0===j?c:j,o=t.delimiter,b=void 0===o?" ":o,x=s(s(e,i,"$1\0$2"),d,"\0"),O=0,h=x.length;"\0"===x.charAt(O);)O++;for(;"\0"===x.charAt(h-1);)h--;return x.slice(O,h).split("\0").map(u).join(b)}(e,n({delimiter:"",transform:d},t))}function u(e,t){return 0===t?e.toLowerCase():d(e,t)}function o(e,t){return void 0===t&&(t={}),j(e,n({transform:u},t))}var b=function(e,t,r,i,n,c){var a=Math.floor((n-i)/t),l=Array(a).fill(0).map((function(e,n){return(i+t+n*t)/r})).reverse();return l},x=function(e){var t=e.labelText,r=e.increaseBy,n=e.divideBy,c=e.minimum,a=e.maximum,l=e.defaultValue;return Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:t}),Object(i.jsx)("select",{id:"".concat(o(t),"Selector"),value:l,children:b(0,r,n,c,a).map((function(e){return Object(i.jsx)("option",{value:e,children:e})}))})]})},O=function(e){var t=e.labelText,r=e.defaultValue;return Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:t}),Object(i.jsxs)("select",{id:"".concat(o(t),"Selector"),value:r,children:[Object(i.jsx)("option",{value:"true",children:"true"}),Object(i.jsx)("option",{value:"false",children:"false"})]})]})},h=function(e){var t=e.labelText,r=e.defaultValue;return Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:t}),Object(i.jsx)("input",{type:"text",id:"".concat(o(t),"Input"),value:r})]})};function m(){return Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:Object(i.jsx)("img",{alt:"JPEGasus logo",src:"img/jpegasus-logo-reversed.png"})}),Object(i.jsxs)("form",{children:[Object(i.jsx)(x,{labelText:"maxHeight",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(i.jsx)(x,{labelText:"maxWidth",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(i.jsx)(x,{labelText:"scaleImageBy",increaseBy:1,defaultValue:1,divideBy:100,maximum:200,minimum:0}),Object(i.jsx)(x,{labelText:"quality",increaseBy:1,defaultValue:.65,divideBy:100,maximum:100,minimum:0}),Object(i.jsx)(O,{labelText:"returnOriginalIfCompressedFileIsLarger",defaultValue:"false"}),Object(i.jsx)(O,{labelText:"returnOriginalOnFailure",defaultValue:"true"}),Object(i.jsx)(O,{labelText:"fixImageOrientation",defaultValue:"true"}),Object(i.jsx)(O,{labelText:"preserveFileType",defaultValue:"false"}),Object(i.jsx)(h,{labelText:"transparencyFillColor",defaultValue:"#FFF"}),Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:"Upload Image"}),Object(i.jsx)("input",{type:"file",id:"imageInput"})]}),Object(i.jsx)("input",{type:"button",value:"Submit"}),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"\xa0"}),Object(i.jsx)("th",{children:"Size (kb)"}),Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Orientation"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Original"})}),Object(i.jsx)("td",{id:"originalSize",children:"\u2014"}),Object(i.jsx)("td",{id:"originalType",children:"\u2014"}),Object(i.jsx)("td",{id:"originalOrientation",children:"\u2014"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Compressed"})}),Object(i.jsx)("td",{id:"compressedSize",children:"\u2014"}),Object(i.jsx)("td",{id:"compressedType",children:"\u2014"}),Object(i.jsx)("td",{id:"compressedOrientation",children:"\u2014"})]})]})]})]})]}),Object(i.jsx)("main",{role:"main",children:Object(i.jsx)("span",{id:"compressedImageSpan",children:"Please upload an image to see a preview here"})})]})})}},Qetd:function(e,t,r){"use strict";var i=Object.assign.bind(Object);e.exports=i,e.exports.default=e.exports}},[["/EDR",0,1]]]);