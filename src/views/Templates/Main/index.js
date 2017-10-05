import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.css';
import Header from '../../../components/Header/';
import Content from '../../../components/Content/';
import Menu from '../../../components/Menu/';
import TweetBox from '../../../components/TweetBox/';
import Button from '../../../components/Button';
import MainContainer from './container';
import Modal from '../../../components/Modal';

import firebase from '../../../configuration/firebase';
import {signOutUser} from '../../../services/firebase';
import httpRequest from '../../../utilities/httpRequest'



 class Main extends Component{

  componentDidMount(){
     firebase.auth().onAuthStateChanged((user) => {
       if(user) {
         console.log(user)
         this.props.addUser(user)
       }else{
          this.props.history.push('/login');
       }
     })
   }

   render() {

      const { user, tweetValue, modalVisible, count} = this.props;
         return (
            <div className='mainTemplate'>
               <Header>
                   <div className='logo-wrap'>
                         <Link to='/'>
                           Paroter
                         </Link>
                   </div>

                   <Button text='Talk Am'
                           onClick={this._handleOpenTweetBox.bind(this)}/>
                   <Menu label= {user.displayName} signOut= {signOutUser} />

               </Header>

               <Content>
                {
                   <Modal  visible={modalVisible}
                            onClose={this._handleCloseModal.bind(this)}>

                        <TweetBox count={count}
                                  onUpdateTweet ={this._handleUpdateTweet.bind(this)}
                                  onSubmitTweet={this._handleSubmitTweet.bind(this)}
                                  tweetValue={tweetValue}/>
                   </Modal>
                }

                 {this.props.children}
               </Content>
            </div>
         );
   }



    _handleUpdateTweet(event){
       this.props.updateTweet(event.target.value)
    }

    _handleSubmitTweet(){
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
          text:this.props.tweetValue,
          userId: this.props.user.uid
        });

        httpRequest('POST','http://localhost:3030/tweet', stringPost)
         .then( response => {
            console.log(response)
            this.props.postTweet(response);
         })
         .catch(error =>{
            alert(error.code)
         })


        this.props.toggleModalVisibility(false);

    }

    _handleOpenTweetBox(){
       this.props.toggleModalVisibility(true);

    }

    _handleCloseTweetBox(){

    }

    _handleCloseModal(){
      this.props.toggleModalVisibility(false);
    }

}

export default withRouter(MainContainer(Main));
