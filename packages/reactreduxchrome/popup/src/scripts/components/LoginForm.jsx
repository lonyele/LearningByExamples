import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LoggedIn} from './LoggedIn.jsx';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <p>LoginForm : you should login</p>  
        <form onSubmit={this.props.submit}>
          <input type="text" onChange={this.props.email} placeholder="email" />
          <input type="text" onChange={this.props.password}  placeholder="password" />
          <input type="submit" value="login" />
        </form>
        
      </div>
    );
  }
}


/*
{this.props.login.loginState ? 
            <LoggedIn />
             : 

             }
*/