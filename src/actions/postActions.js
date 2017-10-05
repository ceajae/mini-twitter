import{ADD_POST, DELETE_POST,LOAD_SAVED_POSTS } from '../constants/actionTypes';

export function addPost(text,postId,userId,timeStamp){
  if(!postId){
      const post = JSON.parse(text)
      console.log(post)
      text = post.text;
      postId= post._id;
      userId= post.userId;
      timeStamp=post.timeStamp;
  }

  return{
    type:ADD_POST,
    payload:{
        text,
        postId,
        userId,
        timeStamp
    }
  }
}

export function loadSavedPosts(post, text, postId, userId, timeStamp){
  console.log(post)
    text = post.text;
    postId= post._id;
    userId= post.userId;
    timeStamp=post.timeStamp;

    return{
      type:LOAD_SAVED_POSTS,
      payload:{
          text,
          postId,
          userId,
          timeStamp
      }
    }
}

export function deletePost(postId){
  return{
    type: DELETE_POST,

  }
}
