import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider, createState } from "./state/RxState";
import reducer$ from "./reducers";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
<Provider state$={createState(reducer$)}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
