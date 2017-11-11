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

import Retweet from 'react-icons/lib/fa/retweet';
import Like from 'react-icons/lib/fa/heart';
import Reply from 'react-icons/lib/fa/comment-o';
import Message from 'react-icons/lib/fa/envelope-o';
import Loader from 'react-loader';




class Home extends Component {
  constructor(props){
    super(props);

    this.state ={
      loading:true

    }
  }
  componentDidMount(){

     getSignedInUser()
       .then((authdUser) => {
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
                       this.setState({loading:false})

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
         this.props.history.push('/welcome');
       })
       console.log('loading false')
    /// this.setState({ loading: false })
  }

  render() {
      const{posts, user} = this.props;
      const{ loading } = this.state;
      const postArray =[];
      for (var post in posts){

        if(posts.hasOwnProperty(post) && posts[post].text !==''){

           postArray.push(
               <Post key= {`post_${postArray.length + 1}`}
                     text= {posts[post].text}
                     liked={posts[post].liked}
                     likes={posts[post].likes}
                     updateUserPostLikes = {this._handleUpdateUserPostLikes.bind(this,posts[post], user)}
                     displayName= {user.displayName}
                     username= {user.username}
                     profilePhoto={user.photoUrl}/>
             )
        }
      }

    if(this.state.loading){
      return <Loader/>
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

 _handleUpdateUserPostLikes(post, user){
      let likers = post.likedBy;
      if(likers.indexOf(user.userId) > -1){
         var index = likers.indexOf(user.userId);
         likers.splice(index, 1)
      } else{

            likers.push(user.userId)
      }

      const stringUserPost = JSON.stringify({
             likedBy: likers,
             liked: !post.liked,
             postId: post.postId
        })

      httpRequest('POST','http://127.0.0.1:3030/tweet', stringUserPost )
        .then( response => {
           this.props.updateLikedPost(!post.liked, post)
        })
        .catch(error =>{
          console.log(error)
        })

  }
}

function Post(props){

  return(
    <div className='post-wrap'>
       <div className='post-avatar'><img src={props.profilePhoto}/></div>
       <div className='post-text-wrap'>
          <div className='post-username'>
                <span className='displayName'>{props.displayName}</span>
                <span className='username'> @{props.username}</span>
          </div>
          <div className='post-text'> {props.text} </div>
          <div className='post-feedback'>
             <div className='retweet-icon'>
                  <Retweet/>
             </div>

             <div className={`like-icon ${props.liked? `liked-icon`:''}`} onClick={props.updateUserPostLikes}>
                 <Like id='like-icon'/><span>{props.likes===0 ? '': props.likes}</span>
             </div>

             <div className='reply-icon'>
                 <Reply/>
             </div>

             <div className='message-icon'>
                  <Message/>
             </div>
          </div>
       </div>
    </div>
  );
}





export default container(Home);
