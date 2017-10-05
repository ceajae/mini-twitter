import{ADD_USER} from '../constants/actionTypes';

export function addUser(authdUser, savedUser){
  return{
    type:ADD_USER,
    payload:{
        authdUser,
        savedUser
    }
  }
}
