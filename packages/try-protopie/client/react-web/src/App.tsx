import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Footer } from "components/organisms/Footer";
import { FeaturesPage } from "components/pages/FeaturesPage";
import { LandingPage } from "components/pages/LandingPage";
import { Header } from "./components/organisms/Header";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/features" component={FeaturesPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
