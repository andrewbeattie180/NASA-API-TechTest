import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import * as serviceWorker from './serviceWorker';

//VIEWS
import App from './App';
// import ErrorDisplay from '/ErrorDisplay';






ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
