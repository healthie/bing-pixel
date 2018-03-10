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

    ...
        const conversion = {
            value: 1,
            currency: "EUR"
        };

        <button onClick={ () => Bing.conversion(conversion) }>
            Track conversion!
        </button>
    ...
```