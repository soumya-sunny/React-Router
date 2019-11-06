import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {sagas} from './sagas/index.js';
import reducers from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const sagaMiddleware= createSagaMiddleware();
const store= createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));


ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
  sagaMiddleware.run(sagas);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
