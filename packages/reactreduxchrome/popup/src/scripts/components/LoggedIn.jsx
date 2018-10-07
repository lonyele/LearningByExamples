import React, {Component} from 'react';
import {connect} from 'react-redux';

export class LoggedIn extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
          <p>Welcome {this.props.login.email}</p>
          <form onSubmit={this.props.logout}>
              <input type="submit" value="logout" />
          </form>
          
      </div>
    );
  }
}
