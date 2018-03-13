const defaultOpts = { debug: false };

// export default class Bing {
//     constructor (pixelId, opts = defaultOpts) {
//         this.pixelId = pixelId;
//         this.debug = opts.debug;
//         this.initialized = false;
//     }

//     log = (msg, type = "info") => {
//         if (this.debug) {
//             const func = type === "error" ? console.error : console.info;
//             func(`[bing-pixel] ${msg}`);
//         }
//     }

//     isInitialized = () => {
//         if (!this.initialized)
//             log(`Pixel not initialized before calling methods. 😩`, "error");
//         return initialized;
//     }

//     init = (opts = defaultOpts) => {

//         if(!pixelId) return log("pixelId is mandatory 😩.", "error");

//         if (!window) return log("window is needed in order to work 😩.", "error");

//         (function (w, d, t, r, u) {
//             var f, n, i;
//             w[u] = w[u] || [], f = function () {
//                 var o = { ti: pixelId };
//                 o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad")
//             }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () {
//                 var s = this.readyState;
//                 s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
//             }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
//         })(window, document, "script", "//bat.bing.com/bat.js", "uetq");

//         window.uetq = window.uetq || [];
//         this.initialized = true;
//         debug = opts.debug;

//         log(`Pixel initialized with id: ${pixelId}`);

//     }

//     pageLoad = () => {
//         if (!isInitialized()) return;

//         window.uetq = new UET({ ti: pixelId });
//         window.uetq.push('pageLoad');

//         log(`pageLoad tracked.`);
//     }

//     conversion: ({ value, currency }) => {
//         if (!isInitialized()) return;

//         const data = {};

//         if (value)
//             data['gv'] = value;

//         if (currency)
//             data['gc'] = currency;

//         window.uetq.push(data);

//         log(`Conversion recorded with value: ${JSON.stringify(data)}`);
//     }    
// }


export default (pixelId, opts = defaultOpts) => {
    let initialized = false;
    let debug = opts.debug;

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

    return {
        init: () => {

            if (!pixelId) return log("pixelId is mandatory 😩.", "error");

            if (!window) return log("window is needed in order to work 😩.", "error");

            (function (w, d, t, r, u) {
                var f, n, i;
                w[u] = w[u] || [], f = function () {
                    var o = { ti: pixelId };
                    o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad")
                }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () {
                    var s = this.readyState;
                    s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null)
                }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i)
            })(window, document, "script", "//bat.bing.com/bat.js", "uetq");

            window.uetq = window.uetq || [];
            initialized = true;

            log(`Pixel initialized with id: ${pixelId}`);
        },

        pageLoad: () => {
            if (!isInitialized()) return;

            if (UET) {
                window.uetq = new UET({ ti: pixelId });
                window.uetq.push('pageLoad');

                log(`pageLoad tracked.`);
            }
        },

        conversion: ({ value, currency }) => {
            if (!isInitialized()) return;

            const data = {};

            if (value)
                data['gv'] = value;

            if (currency)
                data['gc'] = currency;

            window.uetq.push(data);

            log(`Conversion recorded with value: ${JSON.stringify(data)}`);
        }
    }
};