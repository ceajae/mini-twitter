import{ADD_USER} from '../constants/actionTypes';

const users={
  user:{
     userId:'',
     email:'',
     username:'',
     password:'',
     firstname:'',
     lastname:''
  }
}

function addUser(users, user){
  console.log(users);
  console.log(user)
  const {userId,email, username, password, firstname, lastname}= user
   return {

     [userId]:{
           email,
           username,
           password,
           firstname,
           lastname

       },

          // ...users

   }
      console.log(users)
}

// function deletePost(posts, postId){
//   return delete Object.assign({},posts)[postId]
// }


const initialState ={
  users: users
}



export default function Users(state = initialState, action){
  console.log('hiiiiii')
  switch(action.type){
    case ADD_USER:
        return{
               users: addUser(state.users, action.payload),
            }

      break;
    default:
      return state;
  }
  return state;
}
