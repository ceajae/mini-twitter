import{ADD_USER} from '../constants/actionTypes';

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
