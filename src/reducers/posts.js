import{ADD_POST, DELETE_POST, LOAD_SAVED_POSTS, UPDATE_LIKED_POST} from '../constants/actionTypes';
const posts={
  post:{
     text:'',
     userId:'',
     replies:[],
     likes:0,
     likedBy:[],
     liked:false,
     retweets:0,

  }
}

function addPost(posts, post){

  const {text,postId,userId,timeStamp, likedBy,liked, likes}= post
   return {

     [postId]:{
           text,
           postId,
           userId,
           timeStamp,
           likedBy,
           liked,
           likes
       },
       ...posts,

   }
}

function updatePost(posts, payload){
  for (var post in posts){
     if (post === payload.post.postId){
       let curPostId = post;
       let likesNo = posts[curPostId].likedBy.length
       const {text,postId,userId,timeStamp, likedBy, likes}= posts[curPostId]

       return{
         ...posts,
         [curPostId]:{
             text,
             postId,
             userId,
             timeStamp,
             likedBy,
             likes: likesNo,
             liked:payload.value
         }
       }
     }
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

      case UPDATE_LIKED_POST:
          return{
                 ...state,
                 posts: updatePost (state.posts, action.payload)
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
