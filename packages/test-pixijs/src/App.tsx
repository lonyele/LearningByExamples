import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
import { MyReactPixi } from "./my-react-pixi/MyReactPixi";
import Pixi from "./pure-pixijs/Pixi";
import { ReactPixiFiber } from "./react-pixi-fiber/ReactPixiFiber";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div style={{ display: "flex" }} id="canvasContainer">
          <Pixi />
          <ReactPixiFiber />
          <MyReactPixi />
        </div>
      </div>
    );
  }
}

export default App;
