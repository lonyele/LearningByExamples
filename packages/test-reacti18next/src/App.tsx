// import * as React from 'react';
// import './App.css';

// import logo from './logo.svg';

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import * as React from "react";
import { Trans, translate } from "react-i18next";

class App extends React.Component<any, any> {
  public changeLanguage = (e: any) => (lng: any) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };
  public render() {
    const { t } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>{t("Welcome to React")}</h2>
          <button onClick={this.changeLanguage("de")}>de</button>
          <button onClick={this.changeLanguage("en")}>en</button>
        </div>
        <div className="App-intro">
          <Trans>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div style={{ marginTop: 40 }}>
          <a href="https://react.i18next.js">
            Learn more: https://react.i18next.js
          </a>
        </div>
      </div>
    );
  }
}

// extended main view with translate hoc
export default translate("translations")(App);
