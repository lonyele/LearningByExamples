import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import App from '../content/src/scripts/components/app/App';

const proxyStore = new Store({portName: 'example'});

console.log("frome iframe!!!!!!!");

render(
  <Provider store={proxyStore}>
    <App />
  </Provider>
  , document.getElementById('reactApp'));

document.getElementById("cancelButton").addEventListener("click", cancelButton);
function cancelButton(e) {
	e.preventDefault();
	console.log("iframe button cancled");

	//하고 sendMessage 해야하마
	chromeps.publish('fromIframe', 'hide_iframe');

}  



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 	
	if(request.fromContentScript == "search"){
		///////console.log("ok send it from where?? directly from content? or through background")
		////////console.log(request);
		document.getElementById("searched").innerHTML = request.word;
		//call server method call here and from that call back send message like below
		
	}
});


//1

chromeps.subscribe('fromContentScript', function(message) {
  if (message.purpose == 'loading') {
    console.log("DIRECT loading!!")
    console.log(message);
    document.getElementById("searched").innerHTML = "LOADING~~"
  }
});


/*
총세개 onMessage.addListener
1. pub/sub direct 
  1) 찾고 있는중이다
  2) 이거 이미 외운거다 등등

2. 통신 성공 단어뜻/정보 다 받음
  1) 예쁘게 각각 뿌려주면 됨 

3. 통신 실패/ 단어뜻 없음
  1)add 하라느니 메시지 보여줌
  2)다시 통신 해보겠따느닌  메시지 보여줌
*/