_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),i=n.n(r);function a(e,t,n,r,i,a,o){try{var c=e[a](o),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function c(e){a(o,r,i,c,l,"next",e)}function l(e){a(o,r,i,c,l,"throw",e)}c(void 0)}))}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=n("nKUr"),h=n("q1tI"),p=n("ZVx6");var b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function v(e){return e.toLowerCase()}var y=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],j=/[^A-Z0-9]+/gi;function m(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function x(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function g(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?y:n,i=t.stripRegexp,a=void 0===i?j:i,o=t.transform,c=void 0===o?v:o,l=t.delimiter,u=void 0===l?" ":l,s=m(m(e,r,"$1\0$2"),a,"\0"),f=0,d=s.length;"\0"===s.charAt(f);)f++;for(;"\0"===s.charAt(d-1);)d--;return s.slice(f,d).split("\0").map(c).join(u)}(e,b({delimiter:"",transform:x},t))}function w(e,t){return 0===t?e.toLowerCase():x(e,t)}function O(e,t){return void 0===t&&(t={}),g(e,b({transform:w},t))}var _=function(e,t,n,r,i,a){var o=Math.floor((i-r)/t),c=Array(o).fill(0).map((function(e,i){return(r+t+i*t)/n})).reverse();return c},F=function(e){var t=e.labelText,n=e.increaseBy,r=e.divideBy,i=e.minimum,a=e.maximum,o=e.defaultValue;return Object(d.jsxs)("label",{children:[Object(d.jsx)("strong",{children:t}),Object(d.jsx)("select",{id:"".concat(O(t),"Selector"),value:o,children:_(0,n,r,i,a).map((function(e){return Object(d.jsx)("option",{value:e,children:e})}))})]})},k=function(e){var t=e.labelText,n=e.defaultValue;return Object(d.jsxs)("label",{children:[Object(d.jsx)("strong",{children:t}),Object(d.jsxs)("select",{id:"".concat(O(t),"Selector"),value:n,children:[Object(d.jsx)("option",{value:"true",children:"true"}),Object(d.jsx)("option",{value:"false",children:"false"})]})]})},S=function(e){var t=e.labelText,n=e.defaultValue;return Object(d.jsxs)("label",{children:[Object(d.jsx)("strong",{children:t}),Object(d.jsx)("input",{type:"text",id:"".concat(O(t),"Input"),value:n})]})};function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}var T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,r,a=P(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=a.call(this,e)).state={compressedFile:null,originalFile:null},t}return t=u,(n=[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:Object(d.jsx)("img",{alt:"JPEGasus logo",src:"img/jpegasus-logo-reversed.png"})}),Object(d.jsxs)("form",{children:[Object(d.jsx)(F,{labelText:"maxHeight",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(d.jsx)(F,{labelText:"maxWidth",increaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(d.jsx)(F,{labelText:"scaleImageBy",increaseBy:1,defaultValue:1,divideBy:100,maximum:200,minimum:0}),Object(d.jsx)(F,{labelText:"quality",increaseBy:1,defaultValue:.65,divideBy:100,maximum:100,minimum:0}),Object(d.jsx)(k,{labelText:"returnOriginalIfCompressedFileIsLarger",defaultValue:"false"}),Object(d.jsx)(k,{labelText:"returnOriginalOnFailure",defaultValue:"true"}),Object(d.jsx)(k,{labelText:"fixImageOrientation",defaultValue:"true"}),Object(d.jsx)(k,{labelText:"preserveFileType",defaultValue:"false"}),Object(d.jsx)(S,{labelText:"transparencyFillColor",defaultValue:"#FFF"}),Object(d.jsxs)("label",{children:[Object(d.jsx)("strong",{children:"Upload Image"}),Object(d.jsx)("input",{type:"file",id:"imageInput",onChange:function(t){var n=t.target.files[0];e.setState({originalFile:n})}})]}),Object(d.jsx)("input",{type:"button",value:"Submit",onClick:o(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.originalFile,t.next=3,Object(p.compress)(n);case 3:r=t.sent,e.setState({compressedFile:r});case 5:case"end":return t.stop()}}),t)})))}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"\xa0"}),Object(d.jsx)("th",{children:"Size (kb)"}),Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Orientation"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("strong",{children:"Original"})}),Object(d.jsx)("td",{id:"originalSize",children:this.state.originalFile?(this.state.originalFile.size/1024).toFixed(2):"\u2014"}),Object(d.jsx)("td",{id:"originalType",children:this.state.originalFile?this.state.originalFile.type:"\u2014"}),Object(d.jsx)("td",{id:"originalOrientation",children:"\u2014"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("strong",{children:"Compressed"})}),Object(d.jsx)("td",{id:"compressedSize",children:this.state.compressedFile?(this.state.compressedFile.size/1024).toFixed(2):"\u2014"}),Object(d.jsx)("td",{id:"compressedSize",children:"\u2014"}),Object(d.jsx)("td",{id:"compressedType",children:"\u2014"}),Object(d.jsx)("td",{id:"compressedOrientation",children:"\u2014"})]})]})]})]})]}),Object(d.jsx)("main",{role:"main",children:Object(d.jsx)("span",{id:"compressedImageSpan",children:"Please upload an image to see a preview here"})})]})})}}])&&c(t.prototype,n),r&&c(t,r),u}(h.Component);t.default=T},"4ueZ":function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n("bBvm"),o=n("YaLB");t.default={toCanvas:function(e,t){return r(void 0,void 0,void 0,(function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,o.default.create(e,t)];case 1:return n=i.sent(),r=function(e,t){var n=e.height,r=e.width,i=t.maxHeight,a=t.maxWidth,o=t.scaleImageBy;return n>r&&i&&o*n>i?i/n:a&&o*r>a?a/r:o}(n,t),[2,a.default.create(e,n,r,t)]}}))}))}}},YaLB:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0});t.default={create:function(e,t){return r(void 0,void 0,void 0,(function(){return i(this,(function(n){return[2,new Promise((function(n,r){var i=new Image;t.allowCrossOriginResourceSharing&&(i.crossOrigin="Anonymous"),i.addEventListener("load",(function(){n(i)})),i.addEventListener("error",(function(e){r(e)})),i.src=URL.createObjectURL(e)}))]}))}))}}},ZVx6:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.determineOrientation=t.compress=void 0;var a=n("rMba"),o=n("ZkRr"),c=n("jSxy"),l=n("aEcC"),u=n("4ueZ");t.compress=function(e,t){return void 0===t&&(t={}),r(void 0,void 0,void 0,(function(){var n,r,a,s;return i(this,(function(i){switch(i.label){case 0:n=c.default.override(t),i.label=1;case 1:return i.trys.push([1,5,,6]),o.default.validate(e)?[4,u.default.toCanvas(e,n)]:[3,3];case 2:return r=i.sent(),a=l.default.toFile(e,r,n),n.returnOriginalIfCompressedFileIsLarger&&e.size<a.size?[3,4]:[2,a];case 3:if(!n.returnOriginalOnFailure)throw new Error("The File you have entered is not valid.");i.label=4;case 4:return[3,6];case 5:if(s=i.sent(),!n.returnOriginalOnFailure)throw s;return[3,6];case 6:return[2,e]}}))}))},t.determineOrientation=a.default.determineOrientation},ZkRr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={create:function(e,t,n){try{return new File(e,n,{type:t})}catch(a){var r=new Blob(e,{type:t});r.name=n;var i=Date.now();return r.lastModified=i,r.lastModifiedDate=new Date(i),r}},validate:function(e){var t=null!==e,n="object"===typeof e,r=e&&e.size>0,i=e&&["image/jpeg","image/gif","image/png"].includes(e.type);return t&&n&&r&&i}}},aEcC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("ZkRr"),i=n("vIm6");t.default={toFile:function(e,t,n){var a=n.preserveFileType,o=n.quality,c=a?e.type:"image/jpeg",l=t.toDataURL(c,o).split(",")[1],u=i.default.toByteArray(l);return r.default.create(u,c,e.name)}}},bBvm:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n("rMba");t.default={create:function(e,t,n,o){var c=o.fixImageOrientation,l=o.transparencyFillColor;return r(void 0,void 0,void 0,(function(){var r,o,u,s,f;return i(this,(function(i){switch(i.label){case 0:return r=document.createElement("canvas"),(o=r.getContext("2d"))?(u=t.height*n,s=t.width*n,[4,a.default.determineOrientation(e)]):[3,2];case 1:return f=i.sent(),function(e,t,n,r,i){t>4&&t<9&&n?(e.width=r,e.height=i):(e.width=i,e.height=r)}(r,f,c,u,s),c&&function(e,t,n,r){switch(t){case 2:e.transform(-1,0,0,1,r,0);break;case 3:e.transform(-1,0,0,-1,r,n);break;case 4:e.transform(1,0,0,-1,0,n);break;case 5:e.transform(0,1,1,0,0,0);break;case 6:e.transform(0,1,-1,0,n,0);break;case 7:e.transform(0,-1,-1,0,n,r);break;case 8:e.transform(0,-1,1,0,0,r)}}(o,f,u,s),o.fillStyle=l,o.fillRect(0,0,s,u),o.drawImage(t,0,0,s,u),[2,r];case 2:throw new Error("Could not get CanvasRenderingContext2D from HTMLCanvasElement.")}}))}))}}},jSxy:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});t.default={override:function(e){return r({allowCrossOriginResourceSharing:!1,fixImageOrientation:!0,preserveFileType:!1,quality:.5,returnOriginalIfCompressedFileIsLarger:!1,returnOriginalOnFailure:!0,scaleImageBy:1,transparencyFillColor:"#FFF"},e)}}},o0o1:function(e,t,n){e.exports=n("ls82")},rMba:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0});t.default={determineOrientation:function(e){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){return[2,new Promise((function(t){try{var n=new FileReader;n.onload=function(){var e=new DataView(n.result);65496!==e.getUint16(0,!1)&&t(-1),function(e,t){for(var n=2;n<e.byteLength;){var r=e.getUint16(n,!1);if(n+=2,65505===r&&1165519206!==e.getUint32(n+2,!1))t(-1);else if(65505===r){n+=8;var i=18761===e.getUint16(n,!1);n+=e.getUint32(n+4,i);var a=e.getUint16(n,i);n+=2;for(var o=0;o<a;o++)274===e.getUint16(n+12*o,i)&&t(e.getUint16(n+12*o+8,i))}else 65280!==(65280&r)?t(-1):n+=e.getUint16(n,!1)}t(-1)}(e,t)},n.readAsArrayBuffer(new Blob([e]).slice(0,65536))}catch(r){t(1)}}))]}))}))}}},vIm6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={toByteArray:function(e){for(var t=window.atob(e),n=[],r=0;r<t.length;r+=1024){for(var i=t.slice(r,r+1024),a=new Array(i.length),o=0;o<i.length;o++)a[o]=i.charCodeAt(o);var c=new Uint8Array(a);n.push(c)}return n}}}},[["/EDR",0,2,1]]]);