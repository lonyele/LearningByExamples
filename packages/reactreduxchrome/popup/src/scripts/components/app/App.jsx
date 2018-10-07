import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LoginForm} from '../LoginForm.jsx';
import {LoggedIn} from '../LoggedIn.jsx';

class App extends Component {
  constructor(props) {
    super(props);
     this.state = { email : "", password : "" }
  }

  handleEmail = e => {
    this.setState({ email : e.target.value })
  }

  handlePassword = e => {
    this.setState({ password : e.target.value })
  }
  

  loginSubmit = e => {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();    
    chrome.runtime.sendMessage({login: "login", email : email, password : password}, function(response) {
     //아마 scope 때문인데 asteroid 안의 sendResponse는 여기서 잡질 못해 -> 이거 해결함 return true 로 
      console.log("login success"); 
      console.log(response);
    });
  }

  logoutSubmit = e => {
    e.preventDefault();
    chrome.runtime.sendMessage({login: "logout"}, function(response) {
      console.log("logout success");
      console.log(response);
    });
  }

  render() {
    return (
        <div>
          Click Count: {this.props.count}
          {this.props.login.loginState 
            ? <LoggedIn login={this.props.login} logout={this.logoutSubmit} />
            : <LoginForm submit={this.loginSubmit} email={this.handleEmail} password={this.handlePassword} />
          }
          
        </div>
    )
    
  }
}

const mapStateToProps = (state) => {
  
  return {
    count: state.count,
    login : state.initHydrate
  };
};

export default connect(mapStateToProps)(App);

//{loggedIn ? <LoggedIn /> : <LoginForm />}
/*
console.log(this.props.count);
    console.log(this.props.login.loginState);
    const loggedIn = true 
    return (
      <div>
        Click Count: {this.props.count}
        state : {this.props.login.loginState}
        
      </div>
    );






*/