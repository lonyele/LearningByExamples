import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { FeaturesPage } from "components/pages/FeaturesPage";
import { LandingPage } from "components/pages/LandingPage";
import { WebPage } from "./components/pages/WebPage";

initializeIcons();
class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/web" exact={true} component={WebPage} />
          <Route path="/features" component={FeaturesPage} />
        </div>
      </Router>
    );
  }
}

export default App;
