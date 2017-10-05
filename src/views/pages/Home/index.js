import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import httpRequest from '../../../utilities/httpRequest';
import Header from '../../../components/Header/';
import Content from '../../../components/Content/';
import Menu from '../../../components/Menu/';
import Main from '../../Templates/Main/';
import container from './container';
import {getSignedInUser} from '../../../services/firebase';




class Home extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
     getSignedInUser()
       .then(user => {
           console.log(user)
          const stringUserId = JSON.stringify({userId: user.uid });

          httpRequest('GET','http://localhost:3030/tweet?UserId=' + stringUserId)
             .then( response =>{
               console.log(response)
                let userPosts = JSON.parse(response);
                for  (var post in userPosts){
                  const userPost= userPosts[post];
                  console.log(userPost)
                  this.props.loadSavedPosts(userPost);
                }
             })
             .catch(error =>{
               console.log(error)
             })
       })
       .catch( error =>{
         console.log(error)
       })

  }

  render() {
    const{posts, user} = this.props;
    const postArray =[];
    for (var post in posts){
      if(posts.hasOwnProperty(post) && posts[post].text !==''){
         postArray.push(
           <Post key= {`post_${postArray.length + 1}`}
                 text= {posts[post].text}
                 displayName= {user.displayName} />
         )
      }
    }
    return (
       <Main>
          <div className='home-wrap'>
             <div className='post-container'>
                 {
                   postArray
                 }
             </div>
          </div>
       </Main>
    );
  }
}

function Post(props){
  return(
    <div className='post-wrap'>
       <div className='post-avatar'>?</div>
       <div className='post-text-wrap'>
          <div className='post-username'>{props.displayName} <span> @CHICHI </span></div>
          <div className='post-text'> {props.text} </div>
          <div className='post-retweet'>retweet?</div>
       </div>
    </div>
  );
}

export default container(Home);
