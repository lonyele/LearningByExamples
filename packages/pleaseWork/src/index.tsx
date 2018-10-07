
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';

import { Hello } from "./components/Hello";

const store = new Store({
  portName: 'background' // communication port name
});

// wait for the store to connect to the background page
store.ready().then(() => {
  // The store implements the same interface as Redux's store
  // so you can use tools like `react-redux` no problem!
  ReactDOM.render(
    <Provider store={store}>
      <Hello compiler="TypeScript" framework="React" />
    </Provider>
    , document.getElementById("example"));
});

/* 
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";


ReactDOM.render(
   <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
*/
