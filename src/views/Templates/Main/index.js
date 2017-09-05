import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from '../../../components/Header/';
import Content from '../../../components/Content/';
import Menu from '../../../components/Menu/';
import TweetBox from '../../../components/TweetBox/';
import MainContainer from './container';


 function Main(props) {
    return (
       <div className='mainTemplate'>
          <Header>
             <Link to='/' className='logo-wrap'>
               Paroter
             </Link>

             <Menu />

          </Header>

          <Content>
            <TweetBox count={props.count}/>
            {props.children}
          </Content>
       </div>
    );

}

export default MainContainer(Main);
