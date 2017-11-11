import{ADD_POST, DELETE_POST,LOAD_SAVED_POSTS, UPDATE_LIKED_POST } from '../constants/actionTypes';

export function addPost(text,postId,userId,timeStamp, likedBy,liked){
  if(!postId){
      const post = JSON.parse(text)
      console.log(post)
      text = post.text;
      postId= post._id;
      userId= post.userId;
      timeStamp=post.timeStamp;
      likedBy=post.likedBy;
      liked=post.liked;
  }

  return{
    type:ADD_POST,
    payload:{
        text,
        postId,
        userId,
        timeStamp,
        likedBy,
        liked
    }
  }
}

export function loadSavedPosts(post, text, postId, userId, timeStamp,likedBy,liked,likes){
    text = post.text;
    postId= post._id;
    userId= post.userId;
    timeStamp=post.timeStamp;
    likedBy=post.likedBy;
    liked=post.liked;
    if(post.likedBy){
      likes = post.likedBy.length;
    }




    return{
      type:LOAD_SAVED_POSTS,
      payload:{
          text,
          postId,
          userId,
          timeStamp,
          likedBy,
          liked,
          likes
      }
    }
}

export function updateLikedPost(value, post){

  return{
    type: UPDATE_LIKED_POST,
    payload:{
      value,
      post
    }
  }
}

export function deletePost(postId){
  return{
    type: DELETE_POST,

  }
}
