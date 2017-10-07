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
       .then((authdUser) => {
         console.log(authdUser)
          const stringUserId = JSON.stringify({userId: authdUser.uid });

          httpRequest('GET','http://localhost:3030/users?UserId=' + stringUserId)
             .then( savedUser =>{

                 this.props.addUser(authdUser, savedUser)

                 httpRequest('GET','http://localhost:3030/tweet?UserId=' + stringUserId)
                   .then((userPostsString) =>{

                       let userPosts = JSON.parse(userPostsString);
                       for  (var post in userPosts){
                          const userPost= userPosts[post];
                          this.props.loadSavedPosts(userPost);
                       }

                   })
                   .catch(error=>{
                      console.log(error)
                   })
             })
             .catch(error =>{
               console.log(error)
             })
       })
       .catch( error =>{
         this.props.history.push('/login');
       })

  }

  render() {
    const{posts, user} = this.props;
    console.log(user)
    const postArray =[];
    for (var post in posts){
      if(posts.hasOwnProperty(post) && posts[post].text !==''){
         postArray.push(
           <Post key= {`post_${postArray.length + 1}`}
                 text= {posts[post].text}
                 displayName= {user.displayName}
                 username= {user.username} />
         )
      }
    }
    return (
       <Main user= {user}>
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
          <div className='post-username'>{props.displayName} <span> @{props.username}</span></div>
          <div className='post-text'> {props.text} </div>
          <div className='post-retweet'>retweet?</div>
       </div>
    </div>
  );
}

export default container(Home);
