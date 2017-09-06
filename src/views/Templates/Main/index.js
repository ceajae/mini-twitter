import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from '../../../components/Header/';
import Content from '../../../components/Content/';
import Menu from '../../../components/Menu/';
import TweetBox from '../../../components/TweetBox/';
import Button from '../../../components/Button';
import MainContainer from './container';


 function Main(props) {
    return (
       <div className='mainTemplate'>
          <Header>
              <div className='logo-wrap'>
                <Link to='/'>
                  Paroter
                </Link>
              </div>

            <Button text='Talk Am'
                    onClick={_handleOpenTweetBox}/>
             <Menu />


          </Header>

          <Content>
           {
             props.tweetBoxVisible
             && <TweetBox count={props.count}
                          onUpdateTweet ={_handleUpdateTweet}
                          onSubmitTweet={_handleSubmitTweet}/>
           }

            {props.children}
          </Content>
       </div>
    );

    function _handleUpdateTweet(event){
       props.updateTweet(event.target.value)
    }
    function _handleSubmitTweet(event){
        console.log('i am tweeting')
    }
    function _handleOpenTweetBox(){
       props.toggleTweetBoxVisibility(true);

    }
    function _handleCloseTweetBox(){

    }

}

export default MainContainer(Main);
