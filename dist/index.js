var createBingPixel=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={debug:!1};n.default=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,r=!1,o=n.debug,i=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"info";o&&("error"===n?console.error:console.info)("[bing-pixel] "+e)},a=function(){return r||i("Pixel not initialized before calling methods. 😩","error"),r};return{init:function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t;return e?window?(function(n,r,t,o,i){var a,u,d;n[i]=n[i]||[],a=function(){var r={ti:e};r.q=n[i],n[i]=new UET(r),n[i].push("pageLoad")},(u=r.createElement(t)).src="//bat.bing.com/bat.js",u.async=1,u.onload=u.onreadystatechange=function(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(a(),u.onload=u.onreadystatechange=null)},(d=r.getElementsByTagName(t)[0]).parentNode.insertBefore(u,d)}(window,document,"script",0,"uetq"),window.uetq=window.uetq||[],r=!0,o=n.debug,void i("Pixel initialized with id: "+e)):i("window is needed in order to work 😩.","error"):i("pixelId is mandatory 😩.","error")},pageLoad:function(){a()&&(window.uetq=new UET(n),window.uetq.push("pageLoad"),i("pageLoad tracked."))},conversion:function(e){var n=e.value,r=e.currency;if(a()){var t={};n&&(t.gv=n),r&&(t.gc=r),window.uetq.push(t),i("Conversion recorded with value: "+JSON.stringify(t))}}}}}]);
//# sourceMappingURL=index.js.map