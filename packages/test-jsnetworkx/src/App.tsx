import * as React from "react";
import "./App.css";
import "./myjsnetworkx.js";
declare var jsnx: any;
class App extends React.Component {
  public render() {
    // tslint:disable-next-line:no-console
    console.log("jsnetworkx", jsnx);
    return (
      <div className="App">
        <div>whatup</div>
      </div>
    );
  }
}

export default App;
