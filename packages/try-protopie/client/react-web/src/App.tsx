import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { FeaturesPage } from "components/pages/FeaturesPage";
import { LandingPage } from "components/pages/LandingPage";
import { WebPage } from "./components/pages/WebPage";
import { IRootStore } from "./mobx-state-tree/root/root";

initializeIcons();
class App extends React.Component<{ store: IRootStore }> {
  public render() {
    console.log("this.prosp app", this.props);
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact={true}
            render={props => <LandingPage {...props} />}
          />
          <Route
            path="/web"
            exact={true}
            render={props => <WebPage {...props} store={this.props.store} />}
          />
          <Route
            path="/features"
            render={props => <FeaturesPage {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
