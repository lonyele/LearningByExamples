import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { FeaturesPage } from "components/pages/FeaturesPage";
import { LandingPage } from "components/pages/LandingPage";
import { AccountPage } from "./components/pages/AccountPage";
import { ElectronPage } from "./components/pages/ElectronPage";
import { FreeTrialPage } from "./components/pages/FreeTrialPage";
import { GalleryPage } from "./components/pages/GalleryPage";
import { LearnPage } from "./components/pages/LearnPage";
import { PricingPage } from "./components/pages/PricingPage";
import { ResourcesPage } from "./components/pages/ResourcesPage";
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
            path="/electron"
            exact={true}
            render={props => (
              <ElectronPage {...props} store={this.props.store} />
            )}
          />
          <Route
            path="/features"
            render={props => <FeaturesPage {...props} />}
          />
          <Route
            path="/learn"
            render={props => <LearnPage {...props} store={this.props.store} />}
          />
          <Route
            path="/gallery"
            exact={true}
            render={props => (
              <GalleryPage {...props} store={this.props.store} />
            )}
          />

          <Route
            path="/resources"
            exact={true}
            render={props => (
              <ResourcesPage {...props} store={this.props.store} />
            )}
          />
          <Route
            path="/pricing"
            render={props => (
              <PricingPage {...props} store={this.props.store} />
            )}
          />
          <Route
            path="/account"
            exact={true}
            render={props => (
              <AccountPage {...props} store={this.props.store} />
            )}
          />
          <Route
            path="/freeTrial"
            render={props => (
              <FreeTrialPage {...props} store={this.props.store} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
