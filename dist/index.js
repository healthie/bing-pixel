"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var initialized=!1,debug=!1,defaultOpts={debug:!1},log=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"info";if(debug){var c="error"===b?console.error:console.info;c("[bing-pixel] "+a)}},isInitialized=function(){return initialized||console.error("Pixel not initialized before calling methods. \uD83D\uDE29","error"),initialized};exports.default={init:function init(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:defaultOpts;return window?void(function(b,c,d,e,g){var h,f,j;b[g]=b[g]||[],h=function(){var c={ti:a};c.q=b[g],b[g]=new UET(c)},f=c.createElement(d),f.src=e,f.async=1,f.onload=f.onreadystatechange=function(){var a=this.readyState;a&&"loaded"!==a&&"complete"!==a||(h(),f.onload=f.onreadystatechange=null)},j=c.getElementsByTagName(d)[0],j.parentNode.insertBefore(f,j)}(window,document,"script","//bat.bing.com/bat.js","uetq"),window.uetq=window.uetq||[],initialized=!0,debug=b.debug,log("Pixel initialized with id: "+a)):console.error("window is needed in order to work \uD83D\uDE29.")},pageLoad:function pageLoad(){isInitialized()&&(window.uetq.push("pageLoad"),log("pageLoad tracked."))},conversion:function conversion(a){isInitialized()&&(window.uetq.push({gv:a}),log("Conversion recorded with value: "+a))}};
