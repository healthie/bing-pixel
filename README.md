# bing-pixel

Super minimal implementation for bing pixel.

```
    ...
    const Bing = createBingPixel(BING_ID, { debug: true });
    ...

    componentDidMount() {
        Bing.init();
    }

    componentDidUpdate(prevProps, prevState) {
        Bing.pageLoad();
    }
```