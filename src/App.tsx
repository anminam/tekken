import React from 'react';
// import logo from './logo.svg';
// import 'App.css';
import Tekken from 'tekken/Tekken';
import Tktest from "tktest/Tktest";
import {createStore, applyMiddleware}from 'redux';
import reducers from "reducers";
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';


/* eslint-disable no-underscore-dangle */
const store = createStore(reducers,composeWithDevTools());
/* eslint-enable */

function App() {
  

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">

        </header>
        <Tekken></Tekken>
        {/* <Tktest /> */}
      </div>
    </Provider>
  );
}

export default App;
