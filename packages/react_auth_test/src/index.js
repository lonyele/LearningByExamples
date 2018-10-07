import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import axios from 'axios'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


console.log("document", document.domain);
//document.domain = "naver"

// const iframe = document.createElement("iframe");
//     iframe.src = 'https://www.naver.com'
//     iframe.id = "naverrr";
    
//     iframe.scrolling = "no";
//     iframe.style.width = "200px";
//     iframe.style.height = "200px";
// console.log("iframe", iframe.contentDocument);
//console.log("iframe", iframe);

    //document.body.insertBefore(iframe, document.body.childNodes[1]);
    

// const url = "https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=560783833607-rukk381st750ikhrbmgfeo906ijtisu7.apps.googleusercontent.com&as=-49db19298e6a6fe8&destination=http%3A%2F%2Flocalhost%3A4000&approval_state=!ChRGaDlCeTVfSUd1TGRMN0ExX2NHNBIfczVVTGJUOTRtb29TWUg3R0Q2SDQtRUZVZ2Q0VEJ4WQ%E2%88%99ACThZt4AAAAAWjr68u33GyYHhXCB_xVzKpTHa3Nlp_dt&xsrfsig=AHgIfE_96bsG_f1ZSBgkoN0IXLa2uu-xWw&flowName=GeneralOAuthFlow"
// const width = 600;
// const height = 600;
// const positionMiddleWidth = parseInt(window.innerWidth) * 0.5 - width * 0.5;
// const positionMiddleHeight = parseInt(window.innerHeight) * 0.5 - height * 0.5;
// window.open(url, "myWindow", `top=${positionMiddleHeight},left=${positionMiddleWidth},width=${width},height=${height}`)
//
//asdfadsf
const facebook = async () => {
  console.log("ㅇ거 실행됬ㅉ?");
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
facebook();