import React, { Component } from 'react';
import { Sidebar } from 'primereact/components/sidebar/Sidebar';

import { Button } from 'primereact/components/button/Button';
// import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css'; // 요걸 꼭 해줘야하네
import 'font-awesome/css/font-awesome.css'
import 'primereact/components/common/Common.css'
import 'primereact/components/sidebar/Sidebar.css'
import 'primereact/components/button/Button.css';
export default class PrimeReact extends Component {
  state = {
    visible: false
  }
  render() {
    return (
      <div>
        <Button icon="fa-arrow-right" onClick={() => this.setState({ visible: true })} >PrimeReact</Button>
        <Sidebar style={{ width: '70em' }} visible={this.state.visible} onHide={() => this.setState({ visible: false })}>
          PrimeReact
        </Sidebar>
      </div>
    )
  }
}