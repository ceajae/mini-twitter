import{ADD_POST, DELETE_POST} from '../constants/actionTypes';

export function addPost(text,postId,userId,timeStamp){
  if(!postId){
      const post = JSON.parse(text)
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

export function deletePost(postId){
  return{
    type: DELETE_POST,

  }
}
