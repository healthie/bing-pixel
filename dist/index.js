!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={debug:!1};n.default=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,o=!1,r=n.debug,i=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"info";r&&("error"===n?console.error:console.info)("[bing-pixel] "+e)},a=function(){return o||i("Pixel not initialized before calling methods. 😩","error"),o};return{init:function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t;return e?window?(function(n,o,t,r,i){var a,u,d;n[i]=n[i]||[],a=function(){var o={ti:e};o.q=n[i],n[i]=new UET(o),n[i].push("pageLoad")},(u=o.createElement(t)).src="//bat.bing.com/bat.js",u.async=1,u.onload=u.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(a(),u.onload=u.onreadystatechange=null)},(d=o.getElementsByTagName(t)[0]).parentNode.insertBefore(u,d)}(window,document,"script",0,"uetq"),window.uetq=window.uetq||[],o=!0,r=n.debug,void i("Pixel initialized with id: "+e)):i("[pixel-bing] window is needed in order to work 😩.","error"):i("[pixel-bing] pixelId is mandatory 😩.","error")},pageLoad:function(){a()&&(window.uetq=new UET(n),window.uetq.push("pageLoad"),i("pageLoad tracked."))},conversion:function(e){var n=e.value,o=e.currency;if(a()){var t={};n&&(t.gv=n),o&&(t.gc=o),window.uetq.push(t),i("Conversion recorded with value: "+JSON.stringify(t))}}}}}]);
//# sourceMappingURL=index.js.map