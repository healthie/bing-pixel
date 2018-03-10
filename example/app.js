import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createBingPixel from '../dist/index';

const Bing = createBingPixel(BING_ID, { debug: true });

const codeExample = `
    ...
    const Bing = createBingPixel(BING_ID, { debug: true });
    ...

    componentDidMount() {
        Bing.init();
    }

    componentDidUpdate(prevProps, prevState) {
        Bing.pageLoad();
    }
`;

class App extends Component {
    componentDidMount() {
        Bing.init();
    }

    componentDidUpdate(prevProps, prevState) {        
        Bing.pageLoad();
    }

    render () {
        const conversion = {
            value: 1,
            currency: "EUR"
        };

        return (
            <div>
                <h1>pixel-bing example</h1>
                <h2>Conversion</h2>
                <button onClick={ () => Bing.conversion(conversion) }>
                    Track conversion!
                </button>
                <h2>Code example</h2>
                <pre>{codeExample}</pre>
            </div>
        );
    }
    
}

ReactDOM.render(<App />, document.getElementById("app"));