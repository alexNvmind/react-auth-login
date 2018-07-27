import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import userStore from './stores/userStore'

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider userStore={userStore}>
        <BrowserRouter  >
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

