import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Store from './redux/store/Store';
import { persistor, Store } from './redux/store/Store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';


ReactDOM.render(<Provider store={Store}>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
