_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(i.default.useContext(c.AmpStateContext))};var o,i=(o=n("q1tI"))&&o.__esModule?o:{default:o},c=n("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,i=void 0!==o&&o,c=e.hasQuery,l=void 0!==c&&c;return n||i&&l}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(o=n("Xuae"))&&o.__esModule?o:{default:o},l=n("lwAK"),j=n("FYa8"),r=n("/0+H");function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(i){var c=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var l=i.key.slice(i.key.indexOf("$")+1);e.has(l)?c=!1:e.add(l)}switch(i.type){case"title":case"base":t.has(i.type)?c=!1:t.add(i.type);break;case"meta":for(var j=0,r=d.length;j<r;j++){var a=d[j];if(i.props.hasOwnProperty(a))if("charSet"===a)n.has(a)?c=!1:n.add(a);else{var s=i.props[a],u=o[a]||new Set;u.has(s)?c=!1:(u.add(s),o[a]=u)}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,i.useContext)(l.AmpStateContext),o=(0,i.useContext)(j.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:p,headManager:o,inAmpMode:(0,r.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=i},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},RIqP:function(e,t,n){var o=n("Ijbi"),i=n("EbDI"),c=n("ZhPi"),l=n("Bnag");e.exports=function(e){return o(e)||i(e)||c(e)||l()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var o=n("nKUr");n("8Kt/");function i(e){return console.log("foo:",e),Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:Object(o.jsx)("img",{alt:"JPEGasus logo",src:"./img/jpegasus-logo-reversed.png"})}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Max Height"}),Object(o.jsxs)("select",{id:"maxHeightSelector",children:[Object(o.jsx)("option",{value:"10000",children:"10000"}),Object(o.jsx)("option",{value:"9900",children:"9900"}),Object(o.jsx)("option",{value:"9800",children:"9800"}),Object(o.jsx)("option",{value:"9700",children:"9700"}),Object(o.jsx)("option",{value:"9600",children:"9600"}),Object(o.jsx)("option",{value:"9500",children:"9500"}),Object(o.jsx)("option",{value:"9400",children:"9400"}),Object(o.jsx)("option",{value:"9300",children:"9300"}),Object(o.jsx)("option",{value:"9200",children:"9200"}),Object(o.jsx)("option",{value:"9100",children:"9100"}),Object(o.jsx)("option",{value:"9000",children:"9000"}),Object(o.jsx)("option",{value:"8900",children:"8900"}),Object(o.jsx)("option",{value:"8800",children:"8800"}),Object(o.jsx)("option",{value:"8700",children:"8700"}),Object(o.jsx)("option",{value:"8600",children:"8600"}),Object(o.jsx)("option",{value:"8500",children:"8500"}),Object(o.jsx)("option",{value:"8400",children:"8400"}),Object(o.jsx)("option",{value:"8300",children:"8300"}),Object(o.jsx)("option",{value:"8200",children:"8200"}),Object(o.jsx)("option",{value:"8100",children:"8100"}),Object(o.jsx)("option",{value:"8000",children:"8000"}),Object(o.jsx)("option",{value:"7900",children:"7900"}),Object(o.jsx)("option",{value:"7800",children:"7800"}),Object(o.jsx)("option",{value:"7700",children:"7700"}),Object(o.jsx)("option",{value:"7600",children:"7600"}),Object(o.jsx)("option",{value:"7500",children:"7500"}),Object(o.jsx)("option",{value:"7400",children:"7400"}),Object(o.jsx)("option",{value:"7300",children:"7300"}),Object(o.jsx)("option",{value:"7200",children:"7200"}),Object(o.jsx)("option",{value:"7100",children:"7100"}),Object(o.jsx)("option",{value:"7000",children:"7000"}),Object(o.jsx)("option",{value:"6900",children:"6900"}),Object(o.jsx)("option",{value:"6800",children:"6800"}),Object(o.jsx)("option",{value:"6700",children:"6700"}),Object(o.jsx)("option",{value:"6600",children:"6600"}),Object(o.jsx)("option",{value:"6500",children:"6500"}),Object(o.jsx)("option",{value:"6400",children:"6400"}),Object(o.jsx)("option",{value:"6300",children:"6300"}),Object(o.jsx)("option",{value:"6200",children:"6200"}),Object(o.jsx)("option",{value:"6100",children:"6100"}),Object(o.jsx)("option",{value:"6000",children:"6000"}),Object(o.jsx)("option",{value:"5900",children:"5900"}),Object(o.jsx)("option",{value:"5800",children:"5800"}),Object(o.jsx)("option",{value:"5700",children:"5700"}),Object(o.jsx)("option",{value:"5600",children:"5600"}),Object(o.jsx)("option",{value:"5500",children:"5500"}),Object(o.jsx)("option",{value:"5400",children:"5400"}),Object(o.jsx)("option",{value:"5300",children:"5300"}),Object(o.jsx)("option",{value:"5200",children:"5200"}),Object(o.jsx)("option",{value:"5100",children:"5100"}),Object(o.jsx)("option",{value:"5000",children:"5000"}),Object(o.jsx)("option",{value:"4900",children:"4900"}),Object(o.jsx)("option",{value:"4800",children:"4800"}),Object(o.jsx)("option",{value:"4700",children:"4700"}),Object(o.jsx)("option",{value:"4600",children:"4600"}),Object(o.jsx)("option",{value:"4500",children:"4500"}),Object(o.jsx)("option",{value:"4400",children:"4400"}),Object(o.jsx)("option",{value:"4300",children:"4300"}),Object(o.jsx)("option",{value:"4200",children:"4200"}),Object(o.jsx)("option",{value:"4100",children:"4100"}),Object(o.jsx)("option",{value:"4000",children:"4000"}),Object(o.jsx)("option",{value:"3900",children:"3900"}),Object(o.jsx)("option",{value:"3800",children:"3800"}),Object(o.jsx)("option",{value:"3700",children:"3700"}),Object(o.jsx)("option",{value:"3600",children:"3600"}),Object(o.jsx)("option",{value:"3500",children:"3500"}),Object(o.jsx)("option",{value:"3400",children:"3400"}),Object(o.jsx)("option",{value:"3300",children:"3300"}),Object(o.jsx)("option",{value:"3200",children:"3200"}),Object(o.jsx)("option",{value:"3100",children:"3100"}),Object(o.jsx)("option",{value:"3000",children:"3000"}),Object(o.jsx)("option",{value:"2900",children:"2900"}),Object(o.jsx)("option",{value:"2800",children:"2800"}),Object(o.jsx)("option",{value:"2700",children:"2700"}),Object(o.jsx)("option",{value:"2600",children:"2600"}),Object(o.jsx)("option",{value:"2500",children:"2500"}),Object(o.jsx)("option",{value:"2400",children:"2400"}),Object(o.jsx)("option",{value:"2300",children:"2300"}),Object(o.jsx)("option",{value:"2200",children:"2200"}),Object(o.jsx)("option",{value:"2100",children:"2100"}),Object(o.jsx)("option",{value:"2000",children:"2000"}),Object(o.jsx)("option",{value:"1900",children:"1900"}),Object(o.jsx)("option",{value:"1800",children:"1800"}),Object(o.jsx)("option",{value:"1700",children:"1700"}),Object(o.jsx)("option",{value:"1600",children:"1600"}),Object(o.jsx)("option",{value:"1500",children:"1500"}),Object(o.jsx)("option",{value:"1400",children:"1400"}),Object(o.jsx)("option",{value:"1300",children:"1300"}),Object(o.jsx)("option",{value:"1200",children:"1200"}),Object(o.jsx)("option",{value:"1100",children:"1100"}),Object(o.jsx)("option",{defaultValue:!0,value:"1000",children:"1000"}),Object(o.jsx)("option",{value:"900",children:"900"}),Object(o.jsx)("option",{value:"800",children:"800"}),Object(o.jsx)("option",{value:"700",children:"700"}),Object(o.jsx)("option",{value:"600",children:"600"}),Object(o.jsx)("option",{value:"500",children:"500"}),Object(o.jsx)("option",{value:"400",children:"400"}),Object(o.jsx)("option",{value:"300",children:"300"}),Object(o.jsx)("option",{value:"200",children:"200"}),Object(o.jsx)("option",{value:"100",children:"100"})]})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Max Width"}),Object(o.jsxs)("select",{id:"maxWidthSelector",value:"1000",children:[Object(o.jsx)("option",{value:"10000",children:"10000"}),Object(o.jsx)("option",{value:"9900",children:"9900"}),Object(o.jsx)("option",{value:"9800",children:"9800"}),Object(o.jsx)("option",{value:"9700",children:"9700"}),Object(o.jsx)("option",{value:"9600",children:"9600"}),Object(o.jsx)("option",{value:"9500",children:"9500"}),Object(o.jsx)("option",{value:"9400",children:"9400"}),Object(o.jsx)("option",{value:"9300",children:"9300"}),Object(o.jsx)("option",{value:"9200",children:"9200"}),Object(o.jsx)("option",{value:"9100",children:"9100"}),Object(o.jsx)("option",{value:"9000",children:"9000"}),Object(o.jsx)("option",{value:"8900",children:"8900"}),Object(o.jsx)("option",{value:"8800",children:"8800"}),Object(o.jsx)("option",{value:"8700",children:"8700"}),Object(o.jsx)("option",{value:"8600",children:"8600"}),Object(o.jsx)("option",{value:"8500",children:"8500"}),Object(o.jsx)("option",{value:"8400",children:"8400"}),Object(o.jsx)("option",{value:"8300",children:"8300"}),Object(o.jsx)("option",{value:"8200",children:"8200"}),Object(o.jsx)("option",{value:"8100",children:"8100"}),Object(o.jsx)("option",{value:"8000",children:"8000"}),Object(o.jsx)("option",{value:"7900",children:"7900"}),Object(o.jsx)("option",{value:"7800",children:"7800"}),Object(o.jsx)("option",{value:"7700",children:"7700"}),Object(o.jsx)("option",{value:"7600",children:"7600"}),Object(o.jsx)("option",{value:"7500",children:"7500"}),Object(o.jsx)("option",{value:"7400",children:"7400"}),Object(o.jsx)("option",{value:"7300",children:"7300"}),Object(o.jsx)("option",{value:"7200",children:"7200"}),Object(o.jsx)("option",{value:"7100",children:"7100"}),Object(o.jsx)("option",{value:"7000",children:"7000"}),Object(o.jsx)("option",{value:"6900",children:"6900"}),Object(o.jsx)("option",{value:"6800",children:"6800"}),Object(o.jsx)("option",{value:"6700",children:"6700"}),Object(o.jsx)("option",{value:"6600",children:"6600"}),Object(o.jsx)("option",{value:"6500",children:"6500"}),Object(o.jsx)("option",{value:"6400",children:"6400"}),Object(o.jsx)("option",{value:"6300",children:"6300"}),Object(o.jsx)("option",{value:"6200",children:"6200"}),Object(o.jsx)("option",{value:"6100",children:"6100"}),Object(o.jsx)("option",{value:"6000",children:"6000"}),Object(o.jsx)("option",{value:"5900",children:"5900"}),Object(o.jsx)("option",{value:"5800",children:"5800"}),Object(o.jsx)("option",{value:"5700",children:"5700"}),Object(o.jsx)("option",{value:"5600",children:"5600"}),Object(o.jsx)("option",{value:"5500",children:"5500"}),Object(o.jsx)("option",{value:"5400",children:"5400"}),Object(o.jsx)("option",{value:"5300",children:"5300"}),Object(o.jsx)("option",{value:"5200",children:"5200"}),Object(o.jsx)("option",{value:"5100",children:"5100"}),Object(o.jsx)("option",{value:"5000",children:"5000"}),Object(o.jsx)("option",{value:"4900",children:"4900"}),Object(o.jsx)("option",{value:"4800",children:"4800"}),Object(o.jsx)("option",{value:"4700",children:"4700"}),Object(o.jsx)("option",{value:"4600",children:"4600"}),Object(o.jsx)("option",{value:"4500",children:"4500"}),Object(o.jsx)("option",{value:"4400",children:"4400"}),Object(o.jsx)("option",{value:"4300",children:"4300"}),Object(o.jsx)("option",{value:"4200",children:"4200"}),Object(o.jsx)("option",{value:"4100",children:"4100"}),Object(o.jsx)("option",{value:"4000",children:"4000"}),Object(o.jsx)("option",{value:"3900",children:"3900"}),Object(o.jsx)("option",{value:"3800",children:"3800"}),Object(o.jsx)("option",{value:"3700",children:"3700"}),Object(o.jsx)("option",{value:"3600",children:"3600"}),Object(o.jsx)("option",{value:"3500",children:"3500"}),Object(o.jsx)("option",{value:"3400",children:"3400"}),Object(o.jsx)("option",{value:"3300",children:"3300"}),Object(o.jsx)("option",{value:"3200",children:"3200"}),Object(o.jsx)("option",{value:"3100",children:"3100"}),Object(o.jsx)("option",{value:"3000",children:"3000"}),Object(o.jsx)("option",{value:"2900",children:"2900"}),Object(o.jsx)("option",{value:"2800",children:"2800"}),Object(o.jsx)("option",{value:"2700",children:"2700"}),Object(o.jsx)("option",{value:"2600",children:"2600"}),Object(o.jsx)("option",{value:"2500",children:"2500"}),Object(o.jsx)("option",{value:"2400",children:"2400"}),Object(o.jsx)("option",{value:"2300",children:"2300"}),Object(o.jsx)("option",{value:"2200",children:"2200"}),Object(o.jsx)("option",{value:"2100",children:"2100"}),Object(o.jsx)("option",{value:"2000",children:"2000"}),Object(o.jsx)("option",{value:"1900",children:"1900"}),Object(o.jsx)("option",{value:"1800",children:"1800"}),Object(o.jsx)("option",{value:"1700",children:"1700"}),Object(o.jsx)("option",{value:"1600",children:"1600"}),Object(o.jsx)("option",{value:"1500",children:"1500"}),Object(o.jsx)("option",{value:"1400",children:"1400"}),Object(o.jsx)("option",{value:"1300",children:"1300"}),Object(o.jsx)("option",{value:"1200",children:"1200"}),Object(o.jsx)("option",{value:"1100",children:"1100"}),Object(o.jsx)("option",{defaultValue:!0,value:"1000",children:"1000"}),Object(o.jsx)("option",{value:"900",children:"900"}),Object(o.jsx)("option",{value:"800",children:"800"}),Object(o.jsx)("option",{value:"700",children:"700"}),Object(o.jsx)("option",{value:"600",children:"600"}),Object(o.jsx)("option",{value:"500",children:"500"}),Object(o.jsx)("option",{value:"400",children:"400"}),Object(o.jsx)("option",{value:"300",children:"300"}),Object(o.jsx)("option",{value:"200",children:"200"}),Object(o.jsx)("option",{value:"100",children:"100"})]})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Scale Image By"}),Object(o.jsxs)("select",{id:"scaleImageBy",value:"1",children:[Object(o.jsx)("option",{value:"2",children:"2"}),Object(o.jsx)("option",{value:"1.99",children:"1.99"}),Object(o.jsx)("option",{value:"1.98",children:"1.98"}),Object(o.jsx)("option",{value:"1.97",children:"1.97"}),Object(o.jsx)("option",{value:"1.96",children:"1.96"}),Object(o.jsx)("option",{value:"1.95",children:"1.95"}),Object(o.jsx)("option",{value:"1.94",children:"1.94"}),Object(o.jsx)("option",{value:"1.93",children:"1.93"}),Object(o.jsx)("option",{value:"1.92",children:"1.92"}),Object(o.jsx)("option",{value:"1.91",children:"1.91"}),Object(o.jsx)("option",{value:"1.9",children:"1.9"}),Object(o.jsx)("option",{value:"1.89",children:"1.89"}),Object(o.jsx)("option",{value:"1.88",children:"1.88"}),Object(o.jsx)("option",{value:"1.87",children:"1.87"}),Object(o.jsx)("option",{value:"1.86",children:"1.86"}),Object(o.jsx)("option",{value:"1.85",children:"1.85"}),Object(o.jsx)("option",{value:"1.84",children:"1.84"}),Object(o.jsx)("option",{value:"1.83",children:"1.83"}),Object(o.jsx)("option",{value:"1.82",children:"1.82"}),Object(o.jsx)("option",{value:"1.81",children:"1.81"}),Object(o.jsx)("option",{value:"1.8",children:"1.8"}),Object(o.jsx)("option",{value:"1.79",children:"1.79"}),Object(o.jsx)("option",{value:"1.78",children:"1.78"}),Object(o.jsx)("option",{value:"1.77",children:"1.77"}),Object(o.jsx)("option",{value:"1.76",children:"1.76"}),Object(o.jsx)("option",{value:"1.75",children:"1.75"}),Object(o.jsx)("option",{value:"1.74",children:"1.74"}),Object(o.jsx)("option",{value:"1.73",children:"1.73"}),Object(o.jsx)("option",{value:"1.72",children:"1.72"}),Object(o.jsx)("option",{value:"1.71",children:"1.71"}),Object(o.jsx)("option",{value:"1.7",children:"1.7"}),Object(o.jsx)("option",{value:"1.69",children:"1.69"}),Object(o.jsx)("option",{value:"1.68",children:"1.68"}),Object(o.jsx)("option",{value:"1.67",children:"1.67"}),Object(o.jsx)("option",{value:"1.66",children:"1.66"}),Object(o.jsx)("option",{value:"1.65",children:"1.65"}),Object(o.jsx)("option",{value:"1.64",children:"1.64"}),Object(o.jsx)("option",{value:"1.63",children:"1.63"}),Object(o.jsx)("option",{value:"1.62",children:"1.62"}),Object(o.jsx)("option",{value:"1.61",children:"1.61"}),Object(o.jsx)("option",{value:"1.6",children:"1.6"}),Object(o.jsx)("option",{value:"1.59",children:"1.59"}),Object(o.jsx)("option",{value:"1.58",children:"1.58"}),Object(o.jsx)("option",{value:"1.57",children:"1.57"}),Object(o.jsx)("option",{value:"1.56",children:"1.56"}),Object(o.jsx)("option",{value:"1.55",children:"1.55"}),Object(o.jsx)("option",{value:"1.54",children:"1.54"}),Object(o.jsx)("option",{value:"1.53",children:"1.53"}),Object(o.jsx)("option",{value:"1.52",children:"1.52"}),Object(o.jsx)("option",{value:"1.51",children:"1.51"}),Object(o.jsx)("option",{value:"1.5",children:"1.5"}),Object(o.jsx)("option",{value:"1.49",children:"1.49"}),Object(o.jsx)("option",{value:"1.48",children:"1.48"}),Object(o.jsx)("option",{value:"1.47",children:"1.47"}),Object(o.jsx)("option",{value:"1.46",children:"1.46"}),Object(o.jsx)("option",{value:"1.45",children:"1.45"}),Object(o.jsx)("option",{value:"1.44",children:"1.44"}),Object(o.jsx)("option",{value:"1.43",children:"1.43"}),Object(o.jsx)("option",{value:"1.42",children:"1.42"}),Object(o.jsx)("option",{value:"1.41",children:"1.41"}),Object(o.jsx)("option",{value:"1.4",children:"1.4"}),Object(o.jsx)("option",{value:"1.39",children:"1.39"}),Object(o.jsx)("option",{value:"1.38",children:"1.38"}),Object(o.jsx)("option",{value:"1.37",children:"1.37"}),Object(o.jsx)("option",{value:"1.36",children:"1.36"}),Object(o.jsx)("option",{value:"1.35",children:"1.35"}),Object(o.jsx)("option",{value:"1.34",children:"1.34"}),Object(o.jsx)("option",{value:"1.33",children:"1.33"}),Object(o.jsx)("option",{value:"1.32",children:"1.32"}),Object(o.jsx)("option",{value:"1.31",children:"1.31"}),Object(o.jsx)("option",{value:"1.3",children:"1.3"}),Object(o.jsx)("option",{value:"1.29",children:"1.29"}),Object(o.jsx)("option",{value:"1.28",children:"1.28"}),Object(o.jsx)("option",{value:"1.27",children:"1.27"}),Object(o.jsx)("option",{value:"1.26",children:"1.26"}),Object(o.jsx)("option",{value:"1.25",children:"1.25"}),Object(o.jsx)("option",{value:"1.24",children:"1.24"}),Object(o.jsx)("option",{value:"1.23",children:"1.23"}),Object(o.jsx)("option",{value:"1.22",children:"1.22"}),Object(o.jsx)("option",{value:"1.21",children:"1.21"}),Object(o.jsx)("option",{value:"1.2",children:"1.2"}),Object(o.jsx)("option",{value:"1.19",children:"1.19"}),Object(o.jsx)("option",{value:"1.18",children:"1.18"}),Object(o.jsx)("option",{value:"1.17",children:"1.17"}),Object(o.jsx)("option",{value:"1.16",children:"1.16"}),Object(o.jsx)("option",{value:"1.15",children:"1.15"}),Object(o.jsx)("option",{value:"1.14",children:"1.14"}),Object(o.jsx)("option",{value:"1.13",children:"1.13"}),Object(o.jsx)("option",{value:"1.12",children:"1.12"}),Object(o.jsx)("option",{value:"1.11",children:"1.11"}),Object(o.jsx)("option",{value:"1.1",children:"1.1"}),Object(o.jsx)("option",{value:"1.09",children:"1.09"}),Object(o.jsx)("option",{value:"1.08",children:"1.08"}),Object(o.jsx)("option",{value:"1.07",children:"1.07"}),Object(o.jsx)("option",{value:"1.06",children:"1.06"}),Object(o.jsx)("option",{value:"1.05",children:"1.05"}),Object(o.jsx)("option",{value:"1.04",children:"1.04"}),Object(o.jsx)("option",{value:"1.03",children:"1.03"}),Object(o.jsx)("option",{value:"1.02",children:"1.02"}),Object(o.jsx)("option",{value:"1.01",children:"1.01"}),Object(o.jsx)("option",{defaultValue:!0,value:"1",children:"1"}),Object(o.jsx)("option",{value:"0.99",children:"0.99"}),Object(o.jsx)("option",{value:"0.98",children:"0.98"}),Object(o.jsx)("option",{value:"0.97",children:"0.97"}),Object(o.jsx)("option",{value:"0.96",children:"0.96"}),Object(o.jsx)("option",{value:"0.95",children:"0.95"}),Object(o.jsx)("option",{value:"0.94",children:"0.94"}),Object(o.jsx)("option",{value:"0.93",children:"0.93"}),Object(o.jsx)("option",{value:"0.92",children:"0.92"}),Object(o.jsx)("option",{value:"0.91",children:"0.91"}),Object(o.jsx)("option",{value:"0.9",children:"0.9"}),Object(o.jsx)("option",{value:"0.89",children:"0.89"}),Object(o.jsx)("option",{value:"0.88",children:"0.88"}),Object(o.jsx)("option",{value:"0.87",children:"0.87"}),Object(o.jsx)("option",{value:"0.86",children:"0.86"}),Object(o.jsx)("option",{value:"0.85",children:"0.85"}),Object(o.jsx)("option",{value:"0.84",children:"0.84"}),Object(o.jsx)("option",{value:"0.83",children:"0.83"}),Object(o.jsx)("option",{value:"0.82",children:"0.82"}),Object(o.jsx)("option",{value:"0.81",children:"0.81"}),Object(o.jsx)("option",{value:"0.8",children:"0.8"}),Object(o.jsx)("option",{value:"0.79",children:"0.79"}),Object(o.jsx)("option",{value:"0.78",children:"0.78"}),Object(o.jsx)("option",{value:"0.77",children:"0.77"}),Object(o.jsx)("option",{value:"0.76",children:"0.76"}),Object(o.jsx)("option",{value:"0.75",children:"0.75"}),Object(o.jsx)("option",{value:"0.74",children:"0.74"}),Object(o.jsx)("option",{value:"0.73",children:"0.73"}),Object(o.jsx)("option",{value:"0.72",children:"0.72"}),Object(o.jsx)("option",{value:"0.71",children:"0.71"}),Object(o.jsx)("option",{value:"0.7",children:"0.7"}),Object(o.jsx)("option",{value:"0.69",children:"0.69"}),Object(o.jsx)("option",{value:"0.68",children:"0.68"}),Object(o.jsx)("option",{value:"0.67",children:"0.67"}),Object(o.jsx)("option",{value:"0.66",children:"0.66"}),Object(o.jsx)("option",{value:"0.65",children:"0.65"}),Object(o.jsx)("option",{value:"0.64",children:"0.64"}),Object(o.jsx)("option",{value:"0.63",children:"0.63"}),Object(o.jsx)("option",{value:"0.62",children:"0.62"}),Object(o.jsx)("option",{value:"0.61",children:"0.61"}),Object(o.jsx)("option",{value:"0.6",children:"0.6"}),Object(o.jsx)("option",{value:"0.59",children:"0.59"}),Object(o.jsx)("option",{value:"0.58",children:"0.58"}),Object(o.jsx)("option",{value:"0.57",children:"0.57"}),Object(o.jsx)("option",{value:"0.56",children:"0.56"}),Object(o.jsx)("option",{value:"0.55",children:"0.55"}),Object(o.jsx)("option",{value:"0.54",children:"0.54"}),Object(o.jsx)("option",{value:"0.53",children:"0.53"}),Object(o.jsx)("option",{value:"0.52",children:"0.52"}),Object(o.jsx)("option",{value:"0.51",children:"0.51"}),Object(o.jsx)("option",{value:"0.5",children:"0.5"}),Object(o.jsx)("option",{value:"0.49",children:"0.49"}),Object(o.jsx)("option",{value:"0.48",children:"0.48"}),Object(o.jsx)("option",{value:"0.47",children:"0.47"}),Object(o.jsx)("option",{value:"0.46",children:"0.46"}),Object(o.jsx)("option",{value:"0.45",children:"0.45"}),Object(o.jsx)("option",{value:"0.44",children:"0.44"}),Object(o.jsx)("option",{value:"0.43",children:"0.43"}),Object(o.jsx)("option",{value:"0.42",children:"0.42"}),Object(o.jsx)("option",{value:"0.41",children:"0.41"}),Object(o.jsx)("option",{value:"0.4",children:"0.4"}),Object(o.jsx)("option",{value:"0.39",children:"0.39"}),Object(o.jsx)("option",{value:"0.38",children:"0.38"}),Object(o.jsx)("option",{value:"0.37",children:"0.37"}),Object(o.jsx)("option",{value:"0.36",children:"0.36"}),Object(o.jsx)("option",{value:"0.35",children:"0.35"}),Object(o.jsx)("option",{value:"0.34",children:"0.34"}),Object(o.jsx)("option",{value:"0.33",children:"0.33"}),Object(o.jsx)("option",{value:"0.32",children:"0.32"}),Object(o.jsx)("option",{value:"0.31",children:"0.31"}),Object(o.jsx)("option",{value:"0.3",children:"0.3"}),Object(o.jsx)("option",{value:"0.29",children:"0.29"}),Object(o.jsx)("option",{value:"0.28",children:"0.28"}),Object(o.jsx)("option",{value:"0.27",children:"0.27"}),Object(o.jsx)("option",{value:"0.26",children:"0.26"}),Object(o.jsx)("option",{value:"0.25",children:"0.25"}),Object(o.jsx)("option",{value:"0.24",children:"0.24"}),Object(o.jsx)("option",{value:"0.23",children:"0.23"}),Object(o.jsx)("option",{value:"0.22",children:"0.22"}),Object(o.jsx)("option",{value:"0.21",children:"0.21"}),Object(o.jsx)("option",{value:"0.2",children:"0.2"}),Object(o.jsx)("option",{value:"0.19",children:"0.19"}),Object(o.jsx)("option",{value:"0.18",children:"0.18"}),Object(o.jsx)("option",{value:"0.17",children:"0.17"}),Object(o.jsx)("option",{value:"0.16",children:"0.16"}),Object(o.jsx)("option",{value:"0.15",children:"0.15"}),Object(o.jsx)("option",{value:"0.14",children:"0.14"}),Object(o.jsx)("option",{value:"0.13",children:"0.13"}),Object(o.jsx)("option",{value:"0.12",children:"0.12"}),Object(o.jsx)("option",{value:"0.11",children:"0.11"}),Object(o.jsx)("option",{value:"0.1",children:"0.1"}),Object(o.jsx)("option",{value:"0.09",children:"0.09"}),Object(o.jsx)("option",{value:"0.08",children:"0.08"}),Object(o.jsx)("option",{value:"0.07",children:"0.07"}),Object(o.jsx)("option",{value:"0.06",children:"0.06"}),Object(o.jsx)("option",{value:"0.05",children:"0.05"}),Object(o.jsx)("option",{value:"0.04",children:"0.04"}),Object(o.jsx)("option",{value:"0.03",children:"0.03"}),Object(o.jsx)("option",{value:"0.02",children:"0.02"}),Object(o.jsx)("option",{value:"0.01",children:"0.01"})]})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Quality"}),Object(o.jsxs)("select",{id:"qualitySelector",value:"1",children:[Object(o.jsx)("option",{value:"1",children:"1"}),Object(o.jsx)("option",{value:"0.99",children:"0.99"}),Object(o.jsx)("option",{value:"0.98",children:"0.98"}),Object(o.jsx)("option",{value:"0.97",children:"0.97"}),Object(o.jsx)("option",{value:"0.96",children:"0.96"}),Object(o.jsx)("option",{value:"0.95",children:"0.95"}),Object(o.jsx)("option",{value:"0.94",children:"0.94"}),Object(o.jsx)("option",{value:"0.93",children:"0.93"}),Object(o.jsx)("option",{value:"0.92",children:"0.92"}),Object(o.jsx)("option",{value:"0.91",children:"0.91"}),Object(o.jsx)("option",{value:"0.9",children:"0.9"}),Object(o.jsx)("option",{value:"0.89",children:"0.89"}),Object(o.jsx)("option",{value:"0.88",children:"0.88"}),Object(o.jsx)("option",{value:"0.87",children:"0.87"}),Object(o.jsx)("option",{value:"0.86",children:"0.86"}),Object(o.jsx)("option",{value:"0.85",children:"0.85"}),Object(o.jsx)("option",{value:"0.84",children:"0.84"}),Object(o.jsx)("option",{value:"0.83",children:"0.83"}),Object(o.jsx)("option",{value:"0.82",children:"0.82"}),Object(o.jsx)("option",{value:"0.81",children:"0.81"}),Object(o.jsx)("option",{value:"0.8",children:"0.8"}),Object(o.jsx)("option",{value:"0.79",children:"0.79"}),Object(o.jsx)("option",{value:"0.78",children:"0.78"}),Object(o.jsx)("option",{value:"0.77",children:"0.77"}),Object(o.jsx)("option",{value:"0.76",children:"0.76"}),Object(o.jsx)("option",{value:"0.75",children:"0.75"}),Object(o.jsx)("option",{value:"0.74",children:"0.74"}),Object(o.jsx)("option",{value:"0.73",children:"0.73"}),Object(o.jsx)("option",{value:"0.72",children:"0.72"}),Object(o.jsx)("option",{value:"0.71",children:"0.71"}),Object(o.jsx)("option",{value:"0.7",children:"0.7"}),Object(o.jsx)("option",{value:"0.69",children:"0.69"}),Object(o.jsx)("option",{value:"0.68",children:"0.68"}),Object(o.jsx)("option",{value:"0.67",children:"0.67"}),Object(o.jsx)("option",{value:"0.66",children:"0.66"}),Object(o.jsx)("option",{defaultValue:!0,value:"0.65",children:"0.65"}),Object(o.jsx)("option",{value:"0.64",children:"0.64"}),Object(o.jsx)("option",{value:"0.63",children:"0.63"}),Object(o.jsx)("option",{value:"0.62",children:"0.62"}),Object(o.jsx)("option",{value:"0.61",children:"0.61"}),Object(o.jsx)("option",{value:"0.6",children:"0.6"}),Object(o.jsx)("option",{value:"0.59",children:"0.59"}),Object(o.jsx)("option",{value:"0.58",children:"0.58"}),Object(o.jsx)("option",{value:"0.57",children:"0.57"}),Object(o.jsx)("option",{value:"0.56",children:"0.56"}),Object(o.jsx)("option",{value:"0.55",children:"0.55"}),Object(o.jsx)("option",{value:"0.54",children:"0.54"}),Object(o.jsx)("option",{value:"0.53",children:"0.53"}),Object(o.jsx)("option",{value:"0.52",children:"0.52"}),Object(o.jsx)("option",{value:"0.51",children:"0.51"}),Object(o.jsx)("option",{value:"0.5",children:"0.5"}),Object(o.jsx)("option",{value:"0.49",children:"0.49"}),Object(o.jsx)("option",{value:"0.48",children:"0.48"}),Object(o.jsx)("option",{value:"0.47",children:"0.47"}),Object(o.jsx)("option",{value:"0.46",children:"0.46"}),Object(o.jsx)("option",{value:"0.45",children:"0.45"}),Object(o.jsx)("option",{value:"0.44",children:"0.44"}),Object(o.jsx)("option",{value:"0.43",children:"0.43"}),Object(o.jsx)("option",{value:"0.42",children:"0.42"}),Object(o.jsx)("option",{value:"0.41",children:"0.41"}),Object(o.jsx)("option",{value:"0.4",children:"0.4"}),Object(o.jsx)("option",{value:"0.39",children:"0.39"}),Object(o.jsx)("option",{value:"0.38",children:"0.38"}),Object(o.jsx)("option",{value:"0.37",children:"0.37"}),Object(o.jsx)("option",{value:"0.36",children:"0.36"}),Object(o.jsx)("option",{value:"0.35",children:"0.35"}),Object(o.jsx)("option",{value:"0.34",children:"0.34"}),Object(o.jsx)("option",{value:"0.33",children:"0.33"}),Object(o.jsx)("option",{value:"0.32",children:"0.32"}),Object(o.jsx)("option",{value:"0.31",children:"0.31"}),Object(o.jsx)("option",{value:"0.3",children:"0.3"}),Object(o.jsx)("option",{value:"0.29",children:"0.29"}),Object(o.jsx)("option",{value:"0.28",children:"0.28"}),Object(o.jsx)("option",{value:"0.27",children:"0.27"}),Object(o.jsx)("option",{value:"0.26",children:"0.26"}),Object(o.jsx)("option",{value:"0.25",children:"0.25"}),Object(o.jsx)("option",{value:"0.24",children:"0.24"}),Object(o.jsx)("option",{value:"0.23",children:"0.23"}),Object(o.jsx)("option",{value:"0.22",children:"0.22"}),Object(o.jsx)("option",{value:"0.21",children:"0.21"}),Object(o.jsx)("option",{value:"0.2",children:"0.2"}),Object(o.jsx)("option",{value:"0.19",children:"0.19"}),Object(o.jsx)("option",{value:"0.18",children:"0.18"}),Object(o.jsx)("option",{value:"0.17",children:"0.17"}),Object(o.jsx)("option",{value:"0.16",children:"0.16"}),Object(o.jsx)("option",{value:"0.15",children:"0.15"}),Object(o.jsx)("option",{value:"0.14",children:"0.14"}),Object(o.jsx)("option",{value:"0.13",children:"0.13"}),Object(o.jsx)("option",{value:"0.12",children:"0.12"}),Object(o.jsx)("option",{value:"0.11",children:"0.11"}),Object(o.jsx)("option",{value:"0.1",children:"0.1"}),Object(o.jsx)("option",{value:"0.09",children:"0.09"}),Object(o.jsx)("option",{value:"0.08",children:"0.08"}),Object(o.jsx)("option",{value:"0.07",children:"0.07"}),Object(o.jsx)("option",{value:"0.06",children:"0.06"}),Object(o.jsx)("option",{value:"0.05",children:"0.05"}),Object(o.jsx)("option",{value:"0.04",children:"0.04"}),Object(o.jsx)("option",{value:"0.03",children:"0.03"}),Object(o.jsx)("option",{value:"0.02",children:"0.02"}),Object(o.jsx)("option",{value:"0.01",children:"0.01"})]})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Return original if compressed file is larger"}),Object(o.jsxs)("select",{id:"returnOriginalIfCompressedFileIsLargerSelector",value:"1",children:[Object(o.jsx)("option",{defaultValue:!0,value:"false",children:"false"}),Object(o.jsx)("option",{value:"true",children:"true"})]})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Return original on failure"}),Object(o.jsxs)("select",{id:"returnOriginalOnFailureSelector",value:"1",children:[Object(o.jsx)("option",{defaultValue:!0,value:"true",children:"true"}),Object(o.jsx)("option",{value:"false",children:"false"})]})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Fix image orientation"}),Object(o.jsxs)("select",{id:"fixImageOrientation",children:[Object(o.jsx)("option",{defaultValue:!0,value:"true",children:"true"}),Object(o.jsx)("option",{value:"false",children:"false"})]})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Preserve file type"}),Object(o.jsxs)("select",{id:"preserveFileType",children:[Object(o.jsx)("option",{value:"true",children:"true"}),Object(o.jsx)("option",{defaultValue:!0,value:"false",children:"false"})]})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Transparency fill color"}),Object(o.jsx)("input",{type:"text",id:"transparencyFillColor",defaultValue:"#FFF"})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("strong",{children:"Upload Image"}),Object(o.jsx)("input",{type:"file",id:"imageInput"})]}),Object(o.jsx)("input",{type:"button",value:"Submit",onClick:"compressAndReportResults"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"\xa0"}),Object(o.jsx)("th",{children:"Size (kb)"}),Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Orientation"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("strong",{children:"Original"})}),Object(o.jsx)("td",{id:"originalSize",children:"\u2014"}),Object(o.jsx)("td",{id:"originalType",children:"\u2014"}),Object(o.jsx)("td",{id:"originalOrientation",children:"\u2014"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("strong",{children:"Compressed"})}),Object(o.jsx)("td",{id:"compressedSize",children:"\u2014"}),Object(o.jsx)("td",{id:"compressedType",children:"\u2014"}),Object(o.jsx)("td",{id:"compressedOrientation",children:"\u2014"})]})]})]})]})]}),Object(o.jsx)("main",{role:"main",children:Object(o.jsx)("span",{id:"compressedImageSpan",children:"Please upload an image to see a preview here"})})]})})}},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),i=n("lwsE"),c=n("W8MJ"),l=(n("PJYZ"),n("7W2i")),j=n("a1gu"),r=n("Nsbk");function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return j(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),u=function(e){l(n,e);var t=a(n);function n(e){var c;return i(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(o(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=u},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},a1gu:function(e,t,n){var o=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?i(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var i=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=i},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);