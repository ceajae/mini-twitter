import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/';
import Content from './components/Content/';
import Home from './views/pages/Home/';
import Profile from './views/pages/Profile/';
import Welcome from './views/pages/Welcome';
import Login from './views/pages/Login';
import PasswordReset from './views/pages/PasswordReset';

class App extends Component {
  render() {
    return (
       <div className='appBody'>
          <Route path='/welcome' component={Welcome}/>
          <Route path='/login'  component={Login}/>
          <Route path ='/' component={Home} exact/>
          <Route path ='/profile' component={Profile} exact/>
          <Route path ='/passwordReset' component={PasswordReset} exact/>
       </div>

    );
  }
}

export default App;
