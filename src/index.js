let initialized = false;
let debug = false;

const defaultOpts = { debug: false };

const log = (msg, type = "info") => {
    if (debug) {
        const func = type === "error" ? console.error : console.info;
        func(`[bing-pixel] ${msg}`);
    }
}

const isInitialized = () => {
    if (!initialized)
        log(`Pixel not initialized before calling methods. 😩`, "error");
    return initialized;
}

export default {
    init: (pixelId, opts = defaultOpts) => {

        if (!window)
            return console.error("window is needed in order to work 😩.");

        (function (w, d, t, r, u) {
            var f, n, i;
            w[u] = w[u] || [], f = function () {
                var o = { ti: pixelId };
                o.q = w[u], w[u] = new UET(o)/*, w[u].push("pageLoad")*/
            }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () {
                var s = this.readyState;
                s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
            }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
        })(window, document, "script", "//bat.bing.com/bat.js", "uetq");

        window.uetq = window.uetq || [];
        initialized = true;
        debug = opts.debug;

        log(`Pixel initialized with id: ${pixelId}`);
        // console.log(window.uetq);
    },

    pageLoad: () => {
        if (!isInitialized())   return;

        window.uetq.push('pageLoad');
        log(`pageLoad tracked.`);
    },

    conversion: value => {
        if (!isInitialized())   return;

        window.uetq.push({ 'gv': value });
        log(`Conversion recorded with value: ${value}`);
    }
};