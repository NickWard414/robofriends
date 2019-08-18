import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'
import App from './Containers/App';
import './Containers/App.css';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

// const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
export const store = createStore(rootReducer, 
  applyMiddleware(thunkMiddleWare) //,
  //logger
  );


ReactDOM.render(
                <Provider store = {store}>
                  <App />
                </Provider>, document.getElementById('root'));
serviceWorker.unregister();
