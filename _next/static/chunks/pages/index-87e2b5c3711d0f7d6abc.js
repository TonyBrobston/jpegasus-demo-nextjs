_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/EDR":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("23aj")}])},"23aj":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return x}));var n=i("nKUr");var c=function(){return(c=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var c in t=arguments[i])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};function l(e){return e.toLowerCase()}var j=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function r(e,t,i){return t instanceof RegExp?e.replace(t,i):t.reduce((function(e,t){return e.replace(t,i)}),e)}function s(e,t){var i=e.charAt(0),n=e.substr(1).toLowerCase();return t>0&&i>="0"&&i<="9"?"_"+i+n:""+i.toUpperCase()+n}function a(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var i=t.splitRegexp,n=void 0===i?j:i,c=t.stripRegexp,s=void 0===c?o:c,a=t.transform,d=void 0===a?l:a,u=t.delimiter,b=void 0===u?" ":u,x=r(r(e,n,"$1\0$2"),s,"\0"),h=0,O=x.length;"\0"===x.charAt(h);)h++;for(;"\0"===x.charAt(O-1);)O--;return x.slice(h,O).split("\0").map(d).join(b)}(e,c({delimiter:"",transform:s},t))}function d(e,t){return 0===t?e.toLowerCase():s(e,t)}var u=function(e,t,i,c,l){var j=Math.floor((c-i)/e);return Array(j).fill(void 0).map((function(t,n){return i+n*e+e})).map((function(e){return Object(n.jsx)("option",{value:e,children:e})}))},b=function(e){var t,i=e.labelText,l=e.decreaseBy,j=(e.divideBy,e.minimum),o=e.maximum,r=e.defaultValue,s="".concat((void 0===t&&(t={}),a(i,c({transform:d},t))),"Selector");return Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:i}),Object(n.jsx)("select",{id:s,value:r,children:u(l,0,j,o)})]})};function x(){return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:Object(n.jsx)("img",{alt:"JPEGasus logo",src:"img/jpegasus-logo-reversed.png"})}),Object(n.jsxs)("form",{children:[Object(n.jsx)(b,{labelText:"Max Height",decreaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(n.jsx)(b,{labelText:"Max Width",decreaseBy:100,defaultValue:1e3,divideBy:1,maximum:1e4,minimum:0}),Object(n.jsx)(b,{labelText:"Scale Image By",decreaseBy:1,defaultValue:1,divideBy:100,maximum:200,minimum:0}),Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Scale Image By"}),Object(n.jsxs)("select",{id:"scaleImageBy",value:"1",children:[Object(n.jsx)("option",{value:"2",children:"2"}),Object(n.jsx)("option",{value:"1.99",children:"1.99"}),Object(n.jsx)("option",{value:"1.98",children:"1.98"}),Object(n.jsx)("option",{value:"1.97",children:"1.97"}),Object(n.jsx)("option",{value:"1.96",children:"1.96"}),Object(n.jsx)("option",{value:"1.95",children:"1.95"}),Object(n.jsx)("option",{value:"1.94",children:"1.94"}),Object(n.jsx)("option",{value:"1.93",children:"1.93"}),Object(n.jsx)("option",{value:"1.92",children:"1.92"}),Object(n.jsx)("option",{value:"1.91",children:"1.91"}),Object(n.jsx)("option",{value:"1.9",children:"1.9"}),Object(n.jsx)("option",{value:"1.89",children:"1.89"}),Object(n.jsx)("option",{value:"1.88",children:"1.88"}),Object(n.jsx)("option",{value:"1.87",children:"1.87"}),Object(n.jsx)("option",{value:"1.86",children:"1.86"}),Object(n.jsx)("option",{value:"1.85",children:"1.85"}),Object(n.jsx)("option",{value:"1.84",children:"1.84"}),Object(n.jsx)("option",{value:"1.83",children:"1.83"}),Object(n.jsx)("option",{value:"1.82",children:"1.82"}),Object(n.jsx)("option",{value:"1.81",children:"1.81"}),Object(n.jsx)("option",{value:"1.8",children:"1.8"}),Object(n.jsx)("option",{value:"1.79",children:"1.79"}),Object(n.jsx)("option",{value:"1.78",children:"1.78"}),Object(n.jsx)("option",{value:"1.77",children:"1.77"}),Object(n.jsx)("option",{value:"1.76",children:"1.76"}),Object(n.jsx)("option",{value:"1.75",children:"1.75"}),Object(n.jsx)("option",{value:"1.74",children:"1.74"}),Object(n.jsx)("option",{value:"1.73",children:"1.73"}),Object(n.jsx)("option",{value:"1.72",children:"1.72"}),Object(n.jsx)("option",{value:"1.71",children:"1.71"}),Object(n.jsx)("option",{value:"1.7",children:"1.7"}),Object(n.jsx)("option",{value:"1.69",children:"1.69"}),Object(n.jsx)("option",{value:"1.68",children:"1.68"}),Object(n.jsx)("option",{value:"1.67",children:"1.67"}),Object(n.jsx)("option",{value:"1.66",children:"1.66"}),Object(n.jsx)("option",{value:"1.65",children:"1.65"}),Object(n.jsx)("option",{value:"1.64",children:"1.64"}),Object(n.jsx)("option",{value:"1.63",children:"1.63"}),Object(n.jsx)("option",{value:"1.62",children:"1.62"}),Object(n.jsx)("option",{value:"1.61",children:"1.61"}),Object(n.jsx)("option",{value:"1.6",children:"1.6"}),Object(n.jsx)("option",{value:"1.59",children:"1.59"}),Object(n.jsx)("option",{value:"1.58",children:"1.58"}),Object(n.jsx)("option",{value:"1.57",children:"1.57"}),Object(n.jsx)("option",{value:"1.56",children:"1.56"}),Object(n.jsx)("option",{value:"1.55",children:"1.55"}),Object(n.jsx)("option",{value:"1.54",children:"1.54"}),Object(n.jsx)("option",{value:"1.53",children:"1.53"}),Object(n.jsx)("option",{value:"1.52",children:"1.52"}),Object(n.jsx)("option",{value:"1.51",children:"1.51"}),Object(n.jsx)("option",{value:"1.5",children:"1.5"}),Object(n.jsx)("option",{value:"1.49",children:"1.49"}),Object(n.jsx)("option",{value:"1.48",children:"1.48"}),Object(n.jsx)("option",{value:"1.47",children:"1.47"}),Object(n.jsx)("option",{value:"1.46",children:"1.46"}),Object(n.jsx)("option",{value:"1.45",children:"1.45"}),Object(n.jsx)("option",{value:"1.44",children:"1.44"}),Object(n.jsx)("option",{value:"1.43",children:"1.43"}),Object(n.jsx)("option",{value:"1.42",children:"1.42"}),Object(n.jsx)("option",{value:"1.41",children:"1.41"}),Object(n.jsx)("option",{value:"1.4",children:"1.4"}),Object(n.jsx)("option",{value:"1.39",children:"1.39"}),Object(n.jsx)("option",{value:"1.38",children:"1.38"}),Object(n.jsx)("option",{value:"1.37",children:"1.37"}),Object(n.jsx)("option",{value:"1.36",children:"1.36"}),Object(n.jsx)("option",{value:"1.35",children:"1.35"}),Object(n.jsx)("option",{value:"1.34",children:"1.34"}),Object(n.jsx)("option",{value:"1.33",children:"1.33"}),Object(n.jsx)("option",{value:"1.32",children:"1.32"}),Object(n.jsx)("option",{value:"1.31",children:"1.31"}),Object(n.jsx)("option",{value:"1.3",children:"1.3"}),Object(n.jsx)("option",{value:"1.29",children:"1.29"}),Object(n.jsx)("option",{value:"1.28",children:"1.28"}),Object(n.jsx)("option",{value:"1.27",children:"1.27"}),Object(n.jsx)("option",{value:"1.26",children:"1.26"}),Object(n.jsx)("option",{value:"1.25",children:"1.25"}),Object(n.jsx)("option",{value:"1.24",children:"1.24"}),Object(n.jsx)("option",{value:"1.23",children:"1.23"}),Object(n.jsx)("option",{value:"1.22",children:"1.22"}),Object(n.jsx)("option",{value:"1.21",children:"1.21"}),Object(n.jsx)("option",{value:"1.2",children:"1.2"}),Object(n.jsx)("option",{value:"1.19",children:"1.19"}),Object(n.jsx)("option",{value:"1.18",children:"1.18"}),Object(n.jsx)("option",{value:"1.17",children:"1.17"}),Object(n.jsx)("option",{value:"1.16",children:"1.16"}),Object(n.jsx)("option",{value:"1.15",children:"1.15"}),Object(n.jsx)("option",{value:"1.14",children:"1.14"}),Object(n.jsx)("option",{value:"1.13",children:"1.13"}),Object(n.jsx)("option",{value:"1.12",children:"1.12"}),Object(n.jsx)("option",{value:"1.11",children:"1.11"}),Object(n.jsx)("option",{value:"1.1",children:"1.1"}),Object(n.jsx)("option",{value:"1.09",children:"1.09"}),Object(n.jsx)("option",{value:"1.08",children:"1.08"}),Object(n.jsx)("option",{value:"1.07",children:"1.07"}),Object(n.jsx)("option",{value:"1.06",children:"1.06"}),Object(n.jsx)("option",{value:"1.05",children:"1.05"}),Object(n.jsx)("option",{value:"1.04",children:"1.04"}),Object(n.jsx)("option",{value:"1.03",children:"1.03"}),Object(n.jsx)("option",{value:"1.02",children:"1.02"}),Object(n.jsx)("option",{value:"1.01",children:"1.01"}),Object(n.jsx)("option",{defaultValue:"1",children:"1"}),Object(n.jsx)("option",{value:"0.99",children:"0.99"}),Object(n.jsx)("option",{value:"0.98",children:"0.98"}),Object(n.jsx)("option",{value:"0.97",children:"0.97"}),Object(n.jsx)("option",{value:"0.96",children:"0.96"}),Object(n.jsx)("option",{value:"0.95",children:"0.95"}),Object(n.jsx)("option",{value:"0.94",children:"0.94"}),Object(n.jsx)("option",{value:"0.93",children:"0.93"}),Object(n.jsx)("option",{value:"0.92",children:"0.92"}),Object(n.jsx)("option",{value:"0.91",children:"0.91"}),Object(n.jsx)("option",{value:"0.9",children:"0.9"}),Object(n.jsx)("option",{value:"0.89",children:"0.89"}),Object(n.jsx)("option",{value:"0.88",children:"0.88"}),Object(n.jsx)("option",{value:"0.87",children:"0.87"}),Object(n.jsx)("option",{value:"0.86",children:"0.86"}),Object(n.jsx)("option",{value:"0.85",children:"0.85"}),Object(n.jsx)("option",{value:"0.84",children:"0.84"}),Object(n.jsx)("option",{value:"0.83",children:"0.83"}),Object(n.jsx)("option",{value:"0.82",children:"0.82"}),Object(n.jsx)("option",{value:"0.81",children:"0.81"}),Object(n.jsx)("option",{value:"0.8",children:"0.8"}),Object(n.jsx)("option",{value:"0.79",children:"0.79"}),Object(n.jsx)("option",{value:"0.78",children:"0.78"}),Object(n.jsx)("option",{value:"0.77",children:"0.77"}),Object(n.jsx)("option",{value:"0.76",children:"0.76"}),Object(n.jsx)("option",{value:"0.75",children:"0.75"}),Object(n.jsx)("option",{value:"0.74",children:"0.74"}),Object(n.jsx)("option",{value:"0.73",children:"0.73"}),Object(n.jsx)("option",{value:"0.72",children:"0.72"}),Object(n.jsx)("option",{value:"0.71",children:"0.71"}),Object(n.jsx)("option",{value:"0.7",children:"0.7"}),Object(n.jsx)("option",{value:"0.69",children:"0.69"}),Object(n.jsx)("option",{value:"0.68",children:"0.68"}),Object(n.jsx)("option",{value:"0.67",children:"0.67"}),Object(n.jsx)("option",{value:"0.66",children:"0.66"}),Object(n.jsx)("option",{value:"0.65",children:"0.65"}),Object(n.jsx)("option",{value:"0.64",children:"0.64"}),Object(n.jsx)("option",{value:"0.63",children:"0.63"}),Object(n.jsx)("option",{value:"0.62",children:"0.62"}),Object(n.jsx)("option",{value:"0.61",children:"0.61"}),Object(n.jsx)("option",{value:"0.6",children:"0.6"}),Object(n.jsx)("option",{value:"0.59",children:"0.59"}),Object(n.jsx)("option",{value:"0.58",children:"0.58"}),Object(n.jsx)("option",{value:"0.57",children:"0.57"}),Object(n.jsx)("option",{value:"0.56",children:"0.56"}),Object(n.jsx)("option",{value:"0.55",children:"0.55"}),Object(n.jsx)("option",{value:"0.54",children:"0.54"}),Object(n.jsx)("option",{value:"0.53",children:"0.53"}),Object(n.jsx)("option",{value:"0.52",children:"0.52"}),Object(n.jsx)("option",{value:"0.51",children:"0.51"}),Object(n.jsx)("option",{value:"0.5",children:"0.5"}),Object(n.jsx)("option",{value:"0.49",children:"0.49"}),Object(n.jsx)("option",{value:"0.48",children:"0.48"}),Object(n.jsx)("option",{value:"0.47",children:"0.47"}),Object(n.jsx)("option",{value:"0.46",children:"0.46"}),Object(n.jsx)("option",{value:"0.45",children:"0.45"}),Object(n.jsx)("option",{value:"0.44",children:"0.44"}),Object(n.jsx)("option",{value:"0.43",children:"0.43"}),Object(n.jsx)("option",{value:"0.42",children:"0.42"}),Object(n.jsx)("option",{value:"0.41",children:"0.41"}),Object(n.jsx)("option",{value:"0.4",children:"0.4"}),Object(n.jsx)("option",{value:"0.39",children:"0.39"}),Object(n.jsx)("option",{value:"0.38",children:"0.38"}),Object(n.jsx)("option",{value:"0.37",children:"0.37"}),Object(n.jsx)("option",{value:"0.36",children:"0.36"}),Object(n.jsx)("option",{value:"0.35",children:"0.35"}),Object(n.jsx)("option",{value:"0.34",children:"0.34"}),Object(n.jsx)("option",{value:"0.33",children:"0.33"}),Object(n.jsx)("option",{value:"0.32",children:"0.32"}),Object(n.jsx)("option",{value:"0.31",children:"0.31"}),Object(n.jsx)("option",{value:"0.3",children:"0.3"}),Object(n.jsx)("option",{value:"0.29",children:"0.29"}),Object(n.jsx)("option",{value:"0.28",children:"0.28"}),Object(n.jsx)("option",{value:"0.27",children:"0.27"}),Object(n.jsx)("option",{value:"0.26",children:"0.26"}),Object(n.jsx)("option",{value:"0.25",children:"0.25"}),Object(n.jsx)("option",{value:"0.24",children:"0.24"}),Object(n.jsx)("option",{value:"0.23",children:"0.23"}),Object(n.jsx)("option",{value:"0.22",children:"0.22"}),Object(n.jsx)("option",{value:"0.21",children:"0.21"}),Object(n.jsx)("option",{value:"0.2",children:"0.2"}),Object(n.jsx)("option",{value:"0.19",children:"0.19"}),Object(n.jsx)("option",{value:"0.18",children:"0.18"}),Object(n.jsx)("option",{value:"0.17",children:"0.17"}),Object(n.jsx)("option",{value:"0.16",children:"0.16"}),Object(n.jsx)("option",{value:"0.15",children:"0.15"}),Object(n.jsx)("option",{value:"0.14",children:"0.14"}),Object(n.jsx)("option",{value:"0.13",children:"0.13"}),Object(n.jsx)("option",{value:"0.12",children:"0.12"}),Object(n.jsx)("option",{value:"0.11",children:"0.11"}),Object(n.jsx)("option",{value:"0.1",children:"0.1"}),Object(n.jsx)("option",{value:"0.09",children:"0.09"}),Object(n.jsx)("option",{value:"0.08",children:"0.08"}),Object(n.jsx)("option",{value:"0.07",children:"0.07"}),Object(n.jsx)("option",{value:"0.06",children:"0.06"}),Object(n.jsx)("option",{value:"0.05",children:"0.05"}),Object(n.jsx)("option",{value:"0.04",children:"0.04"}),Object(n.jsx)("option",{value:"0.03",children:"0.03"}),Object(n.jsx)("option",{value:"0.02",children:"0.02"}),Object(n.jsx)("option",{value:"0.01",children:"0.01"})]})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Quality"}),Object(n.jsxs)("select",{id:"qualitySelector",value:"0.65",children:[Object(n.jsx)("option",{value:"1",children:"1"}),Object(n.jsx)("option",{value:"0.99",children:"0.99"}),Object(n.jsx)("option",{value:"0.98",children:"0.98"}),Object(n.jsx)("option",{value:"0.97",children:"0.97"}),Object(n.jsx)("option",{value:"0.96",children:"0.96"}),Object(n.jsx)("option",{value:"0.95",children:"0.95"}),Object(n.jsx)("option",{value:"0.94",children:"0.94"}),Object(n.jsx)("option",{value:"0.93",children:"0.93"}),Object(n.jsx)("option",{value:"0.92",children:"0.92"}),Object(n.jsx)("option",{value:"0.91",children:"0.91"}),Object(n.jsx)("option",{value:"0.9",children:"0.9"}),Object(n.jsx)("option",{value:"0.89",children:"0.89"}),Object(n.jsx)("option",{value:"0.88",children:"0.88"}),Object(n.jsx)("option",{value:"0.87",children:"0.87"}),Object(n.jsx)("option",{value:"0.86",children:"0.86"}),Object(n.jsx)("option",{value:"0.85",children:"0.85"}),Object(n.jsx)("option",{value:"0.84",children:"0.84"}),Object(n.jsx)("option",{value:"0.83",children:"0.83"}),Object(n.jsx)("option",{value:"0.82",children:"0.82"}),Object(n.jsx)("option",{value:"0.81",children:"0.81"}),Object(n.jsx)("option",{value:"0.8",children:"0.8"}),Object(n.jsx)("option",{value:"0.79",children:"0.79"}),Object(n.jsx)("option",{value:"0.78",children:"0.78"}),Object(n.jsx)("option",{value:"0.77",children:"0.77"}),Object(n.jsx)("option",{value:"0.76",children:"0.76"}),Object(n.jsx)("option",{value:"0.75",children:"0.75"}),Object(n.jsx)("option",{value:"0.74",children:"0.74"}),Object(n.jsx)("option",{value:"0.73",children:"0.73"}),Object(n.jsx)("option",{value:"0.72",children:"0.72"}),Object(n.jsx)("option",{value:"0.71",children:"0.71"}),Object(n.jsx)("option",{value:"0.7",children:"0.7"}),Object(n.jsx)("option",{value:"0.69",children:"0.69"}),Object(n.jsx)("option",{value:"0.68",children:"0.68"}),Object(n.jsx)("option",{value:"0.67",children:"0.67"}),Object(n.jsx)("option",{value:"0.66",children:"0.66"}),Object(n.jsx)("option",{value:"0.65",children:"0.65"}),Object(n.jsx)("option",{value:"0.64",children:"0.64"}),Object(n.jsx)("option",{value:"0.63",children:"0.63"}),Object(n.jsx)("option",{value:"0.62",children:"0.62"}),Object(n.jsx)("option",{value:"0.61",children:"0.61"}),Object(n.jsx)("option",{value:"0.6",children:"0.6"}),Object(n.jsx)("option",{value:"0.59",children:"0.59"}),Object(n.jsx)("option",{value:"0.58",children:"0.58"}),Object(n.jsx)("option",{value:"0.57",children:"0.57"}),Object(n.jsx)("option",{value:"0.56",children:"0.56"}),Object(n.jsx)("option",{value:"0.55",children:"0.55"}),Object(n.jsx)("option",{value:"0.54",children:"0.54"}),Object(n.jsx)("option",{value:"0.53",children:"0.53"}),Object(n.jsx)("option",{value:"0.52",children:"0.52"}),Object(n.jsx)("option",{value:"0.51",children:"0.51"}),Object(n.jsx)("option",{value:"0.5",children:"0.5"}),Object(n.jsx)("option",{value:"0.49",children:"0.49"}),Object(n.jsx)("option",{value:"0.48",children:"0.48"}),Object(n.jsx)("option",{value:"0.47",children:"0.47"}),Object(n.jsx)("option",{value:"0.46",children:"0.46"}),Object(n.jsx)("option",{value:"0.45",children:"0.45"}),Object(n.jsx)("option",{value:"0.44",children:"0.44"}),Object(n.jsx)("option",{value:"0.43",children:"0.43"}),Object(n.jsx)("option",{value:"0.42",children:"0.42"}),Object(n.jsx)("option",{value:"0.41",children:"0.41"}),Object(n.jsx)("option",{value:"0.4",children:"0.4"}),Object(n.jsx)("option",{value:"0.39",children:"0.39"}),Object(n.jsx)("option",{value:"0.38",children:"0.38"}),Object(n.jsx)("option",{value:"0.37",children:"0.37"}),Object(n.jsx)("option",{value:"0.36",children:"0.36"}),Object(n.jsx)("option",{value:"0.35",children:"0.35"}),Object(n.jsx)("option",{value:"0.34",children:"0.34"}),Object(n.jsx)("option",{value:"0.33",children:"0.33"}),Object(n.jsx)("option",{value:"0.32",children:"0.32"}),Object(n.jsx)("option",{value:"0.31",children:"0.31"}),Object(n.jsx)("option",{value:"0.3",children:"0.3"}),Object(n.jsx)("option",{value:"0.29",children:"0.29"}),Object(n.jsx)("option",{value:"0.28",children:"0.28"}),Object(n.jsx)("option",{value:"0.27",children:"0.27"}),Object(n.jsx)("option",{value:"0.26",children:"0.26"}),Object(n.jsx)("option",{value:"0.25",children:"0.25"}),Object(n.jsx)("option",{value:"0.24",children:"0.24"}),Object(n.jsx)("option",{value:"0.23",children:"0.23"}),Object(n.jsx)("option",{value:"0.22",children:"0.22"}),Object(n.jsx)("option",{value:"0.21",children:"0.21"}),Object(n.jsx)("option",{value:"0.2",children:"0.2"}),Object(n.jsx)("option",{value:"0.19",children:"0.19"}),Object(n.jsx)("option",{value:"0.18",children:"0.18"}),Object(n.jsx)("option",{value:"0.17",children:"0.17"}),Object(n.jsx)("option",{value:"0.16",children:"0.16"}),Object(n.jsx)("option",{value:"0.15",children:"0.15"}),Object(n.jsx)("option",{value:"0.14",children:"0.14"}),Object(n.jsx)("option",{value:"0.13",children:"0.13"}),Object(n.jsx)("option",{value:"0.12",children:"0.12"}),Object(n.jsx)("option",{value:"0.11",children:"0.11"}),Object(n.jsx)("option",{value:"0.1",children:"0.1"}),Object(n.jsx)("option",{value:"0.09",children:"0.09"}),Object(n.jsx)("option",{value:"0.08",children:"0.08"}),Object(n.jsx)("option",{value:"0.07",children:"0.07"}),Object(n.jsx)("option",{value:"0.06",children:"0.06"}),Object(n.jsx)("option",{value:"0.05",children:"0.05"}),Object(n.jsx)("option",{value:"0.04",children:"0.04"}),Object(n.jsx)("option",{value:"0.03",children:"0.03"}),Object(n.jsx)("option",{value:"0.02",children:"0.02"}),Object(n.jsx)("option",{value:"0.01",children:"0.01"})]})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Return original if compressed file is larger"}),Object(n.jsxs)("select",{id:"returnOriginalIfCompressedFileIsLargerSelector",value:"false",children:[Object(n.jsx)("option",{value:"false",children:"false"}),Object(n.jsx)("option",{value:"true",children:"true"})]})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Return original on failure"}),Object(n.jsxs)("select",{id:"returnOriginalOnFailureSelector",value:"true",children:[Object(n.jsx)("option",{value:"true",children:"true"}),Object(n.jsx)("option",{value:"false",children:"false"})]})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Fix image orientation"}),Object(n.jsxs)("select",{id:"fixImageOrientation",value:"true",children:[Object(n.jsx)("option",{value:"true",children:"true"}),Object(n.jsx)("option",{value:"false",children:"false"})]})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Preserve file type"}),Object(n.jsxs)("select",{id:"preserveFileType",value:"false",children:[Object(n.jsx)("option",{value:"true",children:"true"}),Object(n.jsx)("option",{value:"false",children:"false"})]})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Transparency fill color"}),Object(n.jsx)("input",{type:"text",id:"transparencyFillColor",value:"#FFF"})]}),Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Upload Image"}),Object(n.jsx)("input",{type:"file",id:"imageInput"})]}),Object(n.jsx)("input",{type:"button",value:"Submit"}),Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\xa0"}),Object(n.jsx)("th",{children:"Size (kb)"}),Object(n.jsx)("th",{children:"Type"}),Object(n.jsx)("th",{children:"Orientation"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:"Original"})}),Object(n.jsx)("td",{id:"originalSize",children:"\u2014"}),Object(n.jsx)("td",{id:"originalType",children:"\u2014"}),Object(n.jsx)("td",{id:"originalOrientation",children:"\u2014"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:"Compressed"})}),Object(n.jsx)("td",{id:"compressedSize",children:"\u2014"}),Object(n.jsx)("td",{id:"compressedType",children:"\u2014"}),Object(n.jsx)("td",{id:"compressedOrientation",children:"\u2014"})]})]})]})]})]}),Object(n.jsx)("main",{role:"main",children:Object(n.jsx)("span",{id:"compressedImageSpan",children:"Please upload an image to see a preview here"})})]})})}},Qetd:function(e,t,i){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports}},[["/EDR",0,1]]]);