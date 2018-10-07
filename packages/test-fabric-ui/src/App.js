import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';

import AntUI from "./AntUI";
import PrimeReact from "./PrimeReact";
import MaterialUINext from "./MaterialUINext";
import MiniDrawer from "./MaterialUI_Drawer"
export default class PanelLightDismissCustomExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = { showPanel: false, hideDialog: true };
  }

  render() {
    return (
      <div>
        <DefaultButton
          text='FabricUI Open panel'
          onClick={this._showPanel}
        />
        <AntUI />
        <PrimeReact />
        <MaterialUINext />
        <Panel
          isOpen={this.state.showPanel}
          isLightDismiss={true}
          headerText='Light Dismiss Panel'
          onDismiss={this._hidePanel}

        >
          <span>Light Dismiss usage is meant for the Contextual Menu on mobile sized breakpoints.</span>
        </Panel>
        <div style={{ display: 'flex' }}>
          <p>what???</p>
          <MiniDrawer />
        </div>
      </div>
    );
  }

  _showPanel = () => {
    this.setState({ showPanel: true });
  }

  _hidePanel = () => {
    this.setState({ showPanel: false });
  }

  _showDialog = () => {
    this.setState({ hideDialog: false });
  }

  _closeDialog = () => {
    this.setState({ hideDialog: true });
  }

  _closeDialogAndHidePanel = () => {
    this._hidePanel();
    this._closeDialog();
  }
}