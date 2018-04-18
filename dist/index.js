"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (pixelId) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { debug: false };

    var initialized = false;
    var debug = opts.debug;

    var log = function log(msg) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";

        if (debug) {
            var func = type === "error" ? console.error : console.info;
            func.call(console, "[bing-pixel] " + msg);
        }
    };

    var isInitialized = function isInitialized() {
        if (!initialized) log("Pixel not initialized before calling methods. \uD83D\uDE29", "error");
        return initialized;
    };

    return {
        init: function init() {
            if (!pixelId) return console.error("pixelId is mandatory \uD83D\uDE29.");
            if (!window) return console.error("window is needed in order to work \uD83D\uDE29.");

            (function (w, d, t, r, u) {
                var f, n, i;
                w[u] = w[u] || [], f = function f() {
                    var o = { ti: pixelId };
                    o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad");
                }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () {
                    var s = this.readyState;
                    s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null);
                }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i);
            })(window, document, "script", "//bat.bing.com/bat.js", "uetq");

            window.uetq = window.uetq || [];
            initialized = true;

            log("Pixel initialized with id: " + pixelId);
        },

        pageLoad: function pageLoad() {
            if (!isInitialized()) return;

            if (typeof UET !== "undefined") {
                window.uetq = new UET({ ti: pixelId });
                window.uetq.push('pageLoad');

                log("pageLoad tracked.");
            }
        },

        conversion: function conversion(_ref) {
            var value = _ref.value,
                currency = _ref.currency;

            if (!isInitialized()) return;

            var data = {};

            if (value) data['gv'] = value;

            if (currency) data['gc'] = currency;

            window.uetq.push(data);

            log("Conversion recorded with value: " + JSON.stringify(data));
        }
    };
};
