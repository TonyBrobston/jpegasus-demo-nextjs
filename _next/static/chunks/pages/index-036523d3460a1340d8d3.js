_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"23aj":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var i=r("nKUr");var n=function(){return(n=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function c(e){return e.toLowerCase()}var s=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function a(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}function j(e,t){var r=e.charAt(0),i=e.substr(1).toLowerCase();return t>0&&r>="0"&&r<="9"?"_"+r+i:""+r.toUpperCase()+i}function d(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,i=void 0===r?s:r,n=t.stripRegexp,j=void 0===n?l:n,d=t.transform,o=void 0===d?c:d,u=t.delimiter,b=void 0===u?" ":u,x=a(a(e,i,"$1\0$2"),j,"\0"),O=0,h=x.length;"\0"===x.charAt(O);)O++;for(;"\0"===x.charAt(h-1);)h--;return x.slice(O,h).split("\0").map(o).join(b)}(e,n({delimiter:"",transform:j},t))}function o(e,t){return 0===t?e.toLowerCase():j(e,t)}var u=function(e){var t,r=e.labelText,c=e.increaseBy,s=e.divideBy,l=e.minimum,a=e.maximum,j=e.defaultValue,u="".concat((void 0===t&&(t={}),d(r,n({transform:o},t))),"Selector"),b=Math.floor((a-l)/c),x=Array(b).fill(0).map((function(e,t){return(l+c+t*c)/s})).reverse();return Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:r}),Object(i.jsx)("select",{id:u,value:j,children:x.map((function(e){return Object(i.jsx)("option",{value:e,children:e})}))})]})};function b(){return Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:Object(i.jsx)("img",{alt:"JPEGasus logo",src:"img/jpegasus-logo-reversed.png"})}),Object(i.jsxs)("form",{children:[Object(i.jsx)(u,{labelText:"Max Height",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(i.jsx)(u,{labelText:"Max Width",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(i.jsx)(u,{labelText:"Scale Image By",increaseBy:1,defaultValue:1,divideBy:100,maximum:200,minimum:0}),Object(i.jsx)(u,{labelText:"Quality",increaseBy:1,defaultValue:.65,divideBy:100,maximum:100,minimum:0}),Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:"Return original if compressed file is larger"}),Object(i.jsxs)("select",{id:"returnOriginalIfCompressedFileIsLargerSelector",value:"false",children:[Object(i.jsx)("option",{value:"false",children:"false"}),Object(i.jsx)("option",{value:"true",children:"true"})]})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:"Return original on failure"}),Object(i.jsxs)("select",{id:"returnOriginalOnFailureSelector",value:"true",children:[Object(i.jsx)("option",{value:"true",children:"true"}),Object(i.jsx)("option",{value:"false",children:"false"})]})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:"Fix image orientation"}),Object(i.jsxs)("select",{id:"fixImageOrientation",value:"true",children:[Object(i.jsx)("option",{value:"true",children:"true"}),Object(i.jsx)("option",{value:"false",children:"false"})]})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:"Preserve file type"}),Object(i.jsxs)("select",{id:"preserveFileType",value:"false",children:[Object(i.jsx)("option",{value:"true",children:"true"}),Object(i.jsx)("option",{value:"false",children:"false"})]})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:"Transparency fill color"}),Object(i.jsx)("input",{type:"text",id:"transparencyFillColor",value:"#FFF"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("strong",{children:"Upload Image"}),Object(i.jsx)("input",{type:"file",id:"imageInput"})]}),Object(i.jsx)("input",{type:"button",value:"Submit"}),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"\xa0"}),Object(i.jsx)("th",{children:"Size (kb)"}),Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Orientation"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Original"})}),Object(i.jsx)("td",{id:"originalSize",children:"\u2014"}),Object(i.jsx)("td",{id:"originalType",children:"\u2014"}),Object(i.jsx)("td",{id:"originalOrientation",children:"\u2014"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"Compressed"})}),Object(i.jsx)("td",{id:"compressedSize",children:"\u2014"}),Object(i.jsx)("td",{id:"compressedType",children:"\u2014"}),Object(i.jsx)("td",{id:"compressedOrientation",children:"\u2014"})]})]})]})]})]}),Object(i.jsx)("main",{role:"main",children:Object(i.jsx)("span",{id:"compressedImageSpan",children:"Please upload an image to see a preview here"})})]})})}},Qetd:function(e,t,r){"use strict";var i=Object.assign.bind(Object);e.exports=i,e.exports.default=e.exports}},[["/EDR",0,1]]]);