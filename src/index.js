import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { searchRobots, requestRobots, addChange } from './redux/reducer';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'tachyons';

//const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots, addChange });
const store = createStore(
  rootReducer
  //applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
reportWebVitals();
