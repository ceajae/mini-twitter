import{ADD_USER, UPDATE_USER_STATE} from '../constants/actionTypes';

export function addUser(authdUser, savedUser){
  const savedUser_Obj = JSON.parse(savedUser)[0];
  return{
    type:ADD_USER,
    payload:{
        authdUser,
        savedUser_Obj
    }
  }
}

export function updateUserState(name, value){
  return{
     type: UPDATE_USER_STATE,
     payload:{
       name,
       value
     }
  }
}
