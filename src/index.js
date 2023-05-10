import React from "react";
import ReactDOM from "react-dom";
import {SpeechProvider} from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="154e4eec-645d-4313-a398-6c95b52e5362" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);