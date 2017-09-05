import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/';
import Content from './components/Content/';
import Home from './views/pages/Home/';
import Profile from './views/pages/Profile/'

class App extends Component {
  render() {
    return (
       <div className='appBody'>
          <Route path ='/' component={Home} exact/>
          <Route path ='/profile' component={Profile} exact/>
       </div>

    );
  }
}

export default App;
