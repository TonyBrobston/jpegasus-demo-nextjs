_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"23aj":function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(t);var l=r("nKUr"),s=r("q1tI");var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function d(e){return e.toLowerCase()}var j=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],f=/[^A-Z0-9]+/gi;function b(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}function p(e,t){var r=e.charAt(0),n=e.substr(1).toLowerCase();return t>0&&r>="0"&&r<="9"?"_"+r+n:""+r.toUpperCase()+n}function x(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,n=void 0===r?j:r,i=t.stripRegexp,c=void 0===i?f:i,o=t.transform,a=void 0===o?d:o,l=t.delimiter,s=void 0===l?" ":l,u=b(b(e,n,"$1\0$2"),c,"\0"),p=0,x=u.length;"\0"===u.charAt(p);)p++;for(;"\0"===u.charAt(x-1);)x--;return u.slice(p,x).split("\0").map(a).join(s)}(e,u({delimiter:"",transform:p},t))}function h(e,t){return 0===t?e.toLowerCase():p(e,t)}function O(e,t){return void 0===t&&(t={}),x(e,u({transform:h},t))}var m=function(e,t,r,n,i,c){var o=Math.floor((i-n)/t),a=Array(o).fill(0).map((function(e,i){return(n+t+i*t)/r})).reverse();return a},y=function(e){var t=e.labelText,r=e.increaseBy,n=e.divideBy,i=e.minimum,c=e.maximum,o=e.defaultValue;return Object(l.jsxs)("label",{children:[Object(l.jsx)("strong",{children:t}),Object(l.jsx)("select",{id:"".concat(O(t),"Selector"),value:o,children:m(0,r,n,i,c).map((function(e){return Object(l.jsx)("option",{value:e,children:e})}))})]})},v=function(e){var t=e.labelText,r=e.defaultValue;return Object(l.jsxs)("label",{children:[Object(l.jsx)("strong",{children:t}),Object(l.jsxs)("select",{id:"".concat(O(t),"Selector"),value:r,children:[Object(l.jsx)("option",{value:"true",children:"true"}),Object(l.jsx)("option",{value:"false",children:"false"})]})]})},g=function(e){var t=e.labelText,r=e.defaultValue;return Object(l.jsxs)("label",{children:[Object(l.jsx)("strong",{children:t}),Object(l.jsx)("input",{type:"text",id:"".concat(O(t),"Input"),value:r})]})};function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var i=a(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return o(this,r)}}var _=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,e);var t,r,c,o=w(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).state={date:new Date},t}return t=a,(r=[{key:"render",value:function(){return Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:Object(l.jsx)("img",{alt:"JPEGasus logo",src:"img/jpegasus-logo-reversed.png"})}),Object(l.jsxs)("form",{children:[Object(l.jsx)(y,{labelText:"maxHeight",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(l.jsx)(y,{labelText:"maxWidth",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(l.jsx)(y,{labelText:"scaleImageBy",increaseBy:1,defaultValue:1,divideBy:100,maximum:200,minimum:0}),Object(l.jsx)(y,{labelText:"quality",increaseBy:1,defaultValue:.65,divideBy:100,maximum:100,minimum:0}),Object(l.jsx)(v,{labelText:"returnOriginalIfCompressedFileIsLarger",defaultValue:"false"}),Object(l.jsx)(v,{labelText:"returnOriginalOnFailure",defaultValue:"true"}),Object(l.jsx)(v,{labelText:"fixImageOrientation",defaultValue:"true"}),Object(l.jsx)(v,{labelText:"preserveFileType",defaultValue:"false"}),Object(l.jsx)(g,{labelText:"transparencyFillColor",defaultValue:"#FFF"}),Object(l.jsxs)("label",{children:[Object(l.jsx)("strong",{children:"Upload Image"}),Object(l.jsx)("input",{type:"file",id:"imageInput",onChange:function(e){console.log(e.target.files[0])}})]}),Object(l.jsx)("input",{type:"button",value:"Submit"}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"\xa0"}),Object(l.jsx)("th",{children:"Size (kb)"}),Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Orientation"})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"Original"})}),Object(l.jsx)("td",{id:"originalSize",children:"\u2014"}),Object(l.jsx)("td",{id:"originalType",children:"\u2014"}),Object(l.jsx)("td",{id:"originalOrientation",children:"\u2014"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:"Compressed"})}),Object(l.jsx)("td",{id:"compressedSize",children:"\u2014"}),Object(l.jsx)("td",{id:"compressedType",children:"\u2014"}),Object(l.jsx)("td",{id:"compressedOrientation",children:"\u2014"})]})]})]})]})]}),Object(l.jsx)("main",{role:"main",children:Object(l.jsx)("span",{id:"compressedImageSpan",children:"Please upload an image to see a preview here"})})]})})}}])&&n(t.prototype,r),c&&n(t,c),a}(s.Component);t.default=_},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports}},[["/EDR",0,1]]]);