import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  google = async () => {
    const response = await axios.get('http://localhost:9000/auth/google')
    console.log('구글 response: ', response);
    // .then(function (response) {
    //   console.log("response: ", response);
    //     if (response.data.result) {
    //         console.log("이건 정말 성공. google success",response);
    //       } else {
    //         console.log("로그인 안되있던거임 popup띄어줘야함 response: ", response);
    //     }
    // })
    // .catch(function (error) {
    //   console.log("get google failed",error);
    // });
  }
  facebook = async () => {
    const response = await axios.get('http://localhost:9000/auth/facebook')
    console.log('페북 response: ', response);
    // .then(function (response) {
    //   console.log("response: ", response);
    //     if (response.data.result) {
    //         console.log("이건 정말 성공. google success",response);
    //       } else {
    //         console.log("로그인 안되있던거임 popup띄어줘야함 response: ", response);
    //     }
    // })
    // .catch(function (error) {
    //   console.log("get google failed",error);
    // });
  }
  google2 = async () => {
    const url = 'http://localhost:9000/auth/google'
    const width = 600;
    const height = 600;
    const positionMiddleWidth = parseInt(window.innerWidth) * 0.5 - width * 0.5;
    const positionMiddleHeight = parseInt(window.innerHeight) * 0.5 - height * 0.5;
    window.open(url, "myWindow", `top=${positionMiddleHeight},left=${positionMiddleWidth},width=${width},height=${height}`)
  }
  whereever = async () => {
    const response = await axios.get('http://localhost:9000/whereever')
    console.log('whereever response: ', response);
  }
  hulWhat = async () => {
    const response = await axios.get('http://localhost:9000/hul/what')
    console.log('hulWhat response: ', response);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reacadsfasdfasdft</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.asdfasdfasdfa
        </p>
        <a href='/auth/google'>포트없이 뒤에 링크만 google</a><br />
        <a href='http://localhost:9000/auth/google'>google</a><br />
        <a href='http://localhost:9000/auth/facebook'>facebook</a><br />
        <a href='http://localhost:9000/whereever'>whereever</a><br />
        <a href='http://localhost:9000/hul/what'>hulWhat</a><br />
        <button onClick={this.google2}>
          google with windowOpen
        </button>
        <button onClick={this.google}>
          google
        </button>
        <button onClick={this.facebook}>
          facebook
        </button>
        <button onClick={this.whereever}>
          whereever
        </button>
        <button onClick={this.hulWhat}>
          hulWhat
        </button>
      </div>
    );
  }
}

export default App;
