import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import {Provider} from 'react-redux';
import {itemReducer,departmentReducer,categoryReducer} from './reducers';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';
// import { BrowserRouter as Router } from 'react-router-dom';
let rootReducer = combineReducers({itemReducer,departmentReducer,categoryReducer});
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <App/>
      
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
