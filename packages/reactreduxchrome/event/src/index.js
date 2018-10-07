import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';

import {wrapStore} from 'react-chrome-redux';

/* async 목록   aync 최대한 줄이고 다 redux로 보내기 그리고 redux에서 관리하기 당연 저장 필요는 chrome/server 에 둘다 저장 
1. asteroid 자동 loginResume  -> chrome.storage.local.get
2. 일반 chrome.storage.local.get    
3. 서버 직접 ajax. (물론 최대한 ddp 쓰겠지만)   
4. sendRequest도 당연 async
*/
//여기서 글로벌일거   asteroid, store
import * as Actions from './actions/hydrateLogin';
import {createClass} from 'asteroid';
const Asteroid = createClass();

const asteroid = new Asteroid({
    endpoint: "ws://fresh3-roniel.c9users.io/websocket"
});

console.log(asteroid);
console.log("upper, initial asteroid");

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const chromeStorage = store => next => action =>{   //여기서 dispatch 종류마다 관리가 좋나 아니면걍 reducer에서 하는게 낮나
  console.log("chrome Storage middleWare");
  let result = next(action)
  const current = store.getState();
  chrome.storage.local.set({ count: current.count });
  return result 
}

const enhancer = compose(
  applyMiddleware(chromeStorage,logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )

const store = createStore(rootReducer, {count : 100, initHydrate:{loginState: false}}, enhancer);
console.log("below is state");
console.log(store.getState());
wrapStore(store, {
    portName: 'example'
});

initSetting();
function initSetting(){    //나중에 option등도 다 하면 좋을듯 
  console.log("inside initSetting");
  chromeGet();
  let timerId = setInterval(asteroidResume, 500);
  function asteroidResume(){
    if(asteroid.userId){
      clearInterval(timerId);
      console.log("initial ",asteroid.userId,"  resume logged in through server");
      
      //여기서 login도 dispatch 해야함   store.dispatch({login : true},{userId : userId} etc etc)
    }else{
      console.log("initial not logged in ");
      //여기서 login도 dispatch 해야함  
    }

  }// steroidResume End
  function chromeGet(){
    chrome.storage.local.get(null, obj => {
      console.log("inside chromeGet");
      console.log(obj);
      //obj["ws://fresh3-roniel.c9users.io/websocket__login_token__"]
      if(obj["ws://fresh3-roniel.c9users.io/websocket__login_token__"] !== undefined ){
        if(Object.keys(obj.login).length !==0){
          console.log("login complete")
          store.dispatch(Actions.hydrateLogin({email : obj.login.email, loginState : true , userId : obj.login.userId } ))         
        }else {
          console.log("what?? yes asteroid token but no login info from chrome?? check the web client&content script syncing")
          
          }
      }else {
        console.log("nope no token, 고로 로그인 안된상태, login.loginState에도 없으면 완전 로그인한적이 엇음")   //없으면 없는거임 
        store.dispatch(Actions.hydrateLogin({loginState : false } ))         
        console.log(obj)
      }

    });
  }//chromeGet End


}//initSetting End

// resume 도 결국 local.get 이여서 async구나..  polling 이여도 인터벌 걸리고
/*setTimeout(function(){
  if(asteroid.userId){
  console.log("initial ",asteroid.userId," resume logged in");
  chrome.storage.local.set({ loggedIn: true });
  
}
else if(asteroid.userId == null){
  console.log("initial not logged in ");
}

 }, 6000);

*/








chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.login == "login"){
      var options ={
         email : request.email,
         password : request.password  
      }

      asteroid.loginWithPassword(options).then(function(response){
        console.log("login success");
        console.log(request.email);
        chrome.storage.local.set({ login : {email : request.email, loginState : true, userId : response } });
        store.dispatch(Actions.hydrateLogin({email : request.email, loginState : true, userId : response } ))       
        
        // asteroid login right away    console.log(asteroid.userId);    
        sendResponse({handle: "login success"});    
        
      });
      
      return true 
    }
    else if (request.login == "logout"){
      
      asteroid.logout().then(function(result){
        console.log("logout success");
        chrome.storage.local.set({ login : {loginState : false} });
        store.dispatch(Actions.hydrateLogin({loginState : false } ))  
        sendResponse({resultss: "logout success"});       
      });

      return true
    }
    else if(request.fromContentScript == "search"){
      console.log("here is background "+request.word);
      /*
      일단 contentscript에서 franc, white/black 끝나고 서버 통신할것만 옴
      서버 통신 asteroid.call(.....).then(
      if(search success){
        1.단어 뜻/정보 다가져옴 
        2.각 iframe으로 정보 sendMessage 함
          chrome.tabs.sendMessage(sender.tab.id, request);
        sendResponse({result:"success"}) --> 이건 필요없는듯
      }else if(search not found){
        1.단어 못차음 
          1)각 iframe오르 못찾았으니 add하라느니 sendMessage
        2.어떤 이유든 통신 실패 
          1)각 iframe으로 통신 실패니 다시 시도해보겠다고 sendMessage
        
        sendResponse({result:"not found"}) 
      }

      )
      */
      asteroid.call("chromeSearch",request.word)
      .then(result => {
        console.log("method call success");
        if(result.length == 0){
          console.log("no search result")
          const nope = {fromContentScript: "search",word :"nono In a basic app, defining a Meteor Method is as simple as defining a function. In a complex app, you want a few extra features to make Methods more powerful and easily testable."};
          chrome.tabs.sendMessage(sender.tab.id, nope);
          sendResponse({result:"success but no result"})
        }else {
          console.log(result);  
          console.log(request)
          chrome.tabs.sendMessage(sender.tab.id, request);
           sendResponse({result:"success and yes result"})
        }
        
      })
      .catch(error => {
          console.log("Error");
          console.error(error);
           sendResponse({result:"error"})
      });
      
     
      
     
      return true
    }
      
  });