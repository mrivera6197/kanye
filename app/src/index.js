//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

//helpers
import { kanyeReducer } from './reducers/kanyeReducer'

//components
import App from './App';

//styles
import './index.css';

const store = createStore(kanyeReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

