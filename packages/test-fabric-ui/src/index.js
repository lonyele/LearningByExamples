import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyCSS from './MyCSS'
import MaterialUILayout from './MaterialUILayout/MaterialUILayout'
import registerServiceWorker from './registerServiceWorker';
import Gestalt from "./Gestalt";
import ReactGridLayout, { MyFirstGrid } from "./ReactGridLayout";
import Masonry from "./ReactVirtualized/Masonry";
import TestSelect from "./MaterialUILayout/TestSelect";
ReactDOM.render(<TestSelect style={{ height: '100%' }} />, document.getElementById('root'));
registerServiceWorker();

//