import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { store } from "./mobx-state-tree/root";

ReactDOM.render(<App store={store} />, document.getElementById(
  "root"
) as HTMLElement);
// registerServiceWorker();
