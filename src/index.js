import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';


const TwitterApp =(
   <Provider store ={store}>
      <Router>
          <App />
      </Router>
   </Provider>
)


ReactDOM.render(
  TwitterApp , document.getElementById('root'));
