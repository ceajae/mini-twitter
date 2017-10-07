import{ADD_USER} from '../constants/actionTypes';

const initialState={
   user:{}
}

function newUserObj(state, payload){
   return{
     ...payload.savedUser_Obj,
     displayName: payload.authdUser.displayName
   }
}

export default function User(state = initialState, action){

  switch(action.type){

    case ADD_USER:
        return{
             ...state,
             user: newUserObj(state, action.payload)
            }
      break;
    default:
      return state;
  }
  return state;
}
