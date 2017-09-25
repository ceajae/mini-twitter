import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from '../../../components/Header/';
import Content from '../../../components/Content/';
import Menu from '../../../components/Menu/';
import TweetBox from '../../../components/TweetBox/';
import Button from '../../../components/Button';
import MainContainer from './container';
import Modal from '../../../components/Modal';
//import request from '../../../constants/httpRequest'



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
              <Modal  visible={props.modalVisible}
                       onClose={_handleCloseModal}>
                   <TweetBox count={props.count}
                                onUpdateTweet ={_handleUpdateTweet}
                                onSubmitTweet={_handleSubmitTweet}
                                tweetValue={props.tweetValue}/>
                </Modal>
           }

            {props.children}
          </Content>
       </div>
    );


    function _handleUpdateTweet(event){
       props.updateTweet(event.target.value)
    }

    function _handleSubmitTweet(){
        function generateId(){
            const time =  Date.now().toString().split('');
            let randomizer, letter, id='';

            const alphaCodex=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
          //  const numCodex=['0','1','2','3','4','5','6','7','8','9'];

            for(var i=0; i<time.length; i++){
              randomizer = Math.floor(Math.random()*10);
              letter = alphaCodex[ Math.floor((alphaCodex.length * randomizer)/10)];
            //  console.log(letter);
              id+=letter;
            }

             return id;

        }

        const stringPost = JSON.stringify({
          text:props.tweetValue,
          userId:generateId()
        });

        const request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3030/tweet', true);
        request.addEventListener('load', ()=>{
          const response = request.responseText;
          //console.log(response);
          props.postTweet(response);
        })
        request.send(stringPost);



        props.toggleModalVisibility(false);

    }

    function _handleOpenTweetBox(){
       props.toggleModalVisibility(true);

    }

    function _handleCloseTweetBox(){

    }

    function _handleCloseModal(){
      props.toggleModalVisibility(false);
    }

}

export default MainContainer(Main);
