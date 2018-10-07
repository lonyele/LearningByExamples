import {wrapStore} from 'react-chrome-redux';
console.log("background~~~~~");
const store; // a normal Redux store
wrapStore(store, {portName: 'bacgkground'});


