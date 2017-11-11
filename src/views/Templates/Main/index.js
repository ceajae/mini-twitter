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
import httpRequest from '../../../utilities/httpRequest';
import {getSignedInUser} from '../../../services/firebase';



 class Main extends Component{

   render() {
      const { user, tweetValue, modalVisible, count, displayName} = this.props;

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

                   <Menu  user={user} signOut= {signOutUser} />

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

        const stringPost = JSON.stringify({
          text:this.props.tweetValue,
          userId: this.props.user.userId,
          likedBy:[]

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
