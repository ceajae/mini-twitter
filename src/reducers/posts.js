import{ADD_POST, DELETE_POST, LOAD_SAVED_POSTS} from '../constants/actionTypes';
const posts={
  post:{
     text:'',
     userId:'',
     replies:[],
     likes:0,
     retweets:0,
  }
}

function addPost(posts, post){

  const {text,postId,userId,timeStamp}= post
   return {

     [postId]:{
           text,
           postId,
           userId,
           timeStamp
       },
       ...posts,

   }
}

function deletePost(posts, postId){
  return delete Object.assign({},posts)[postId]
}


const initialState ={
  posts: posts
}



export default function Posts(state = initialState, action){
  switch(action.type){
    case ADD_POST:
        return{
               posts: addPost(state.posts, action.payload)
            }

      break;

      case LOAD_SAVED_POSTS:
          return{
                 posts: addPost(state.posts, action.payload)
              }

        break;

    case DELETE_POST:
       return{
              posts:deletePost(state.posts, action.payload.postId)
       }
       break;
    default:
      return state;
  }
  return state;
}
