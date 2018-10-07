// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

// @flow
import React, { PureComponent } from "react";
import Navigation from "@atlaskit/navigation";
import Page, { Grid, GridColumn } from "@atlaskit/page";

type State = {
  isBannerOpen: boolean,
  navigationWidth?: number,
  isNavigationOpen?: boolean
};

export default class NavigationExample extends React.Component<void, State> {
  state = {
    navigationWidth: 300,
    isNavigationOpen: true
  };

  render() {
    return (
      <Page
        navigation={
          <Navigation
            width={this.state.navigationWidth}
            isOpen={this.state.isNavigationOpen}
            onResize={({ width, isOpen }) => {
              this.setState({
                navigationWidth: width,
                isNavigationOpen: isOpen
              });
            }}
          >
            Example Navigation???
          </Navigation>
        }
      >
        <Grid>
          <GridColumn>
            <h2>Use fullscreen display to view this example</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis voluptatum perspiciatis doloribus dignissimos accusamus
              commodi, nobis ut, error iusto, quas vitae nesciunt consequatur
              possimus labore! Mollitia est quis minima asperiores.
            </p>
          </GridColumn>
        </Grid>
      </Page>
    );
  }
}