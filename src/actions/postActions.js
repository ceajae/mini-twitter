import{ADD_POST, DELETE_POST} from '../constants/actionTypes';

export function addPost(text,postId,userId,timeStamp){
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
