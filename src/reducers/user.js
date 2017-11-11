import{ADD_USER, UPDATE_USER_STATE} from '../constants/actionTypes';

const initialState={
   user:{}
}

function newUserObj(state, payload){
   console.log(payload)
   return{
     ...payload.savedUser_Obj,
     displayName: payload.authdUser.displayName,
   }
}

function updateUserState(state, payload){
  return{
    ...state.user,
    [payload.name]: payload.value
  }
}

export default function User(state = initialState, action){

  switch(action.type){

    case ADD_USER:
        return{
             ...state,
             user:newUserObj(state, action.payload)
            }
      break;

    case UPDATE_USER_STATE:
        return{
             ...state,
             user: updateUserState(state, action.payload)
            }
      break;

    default:
      return state;
  }
  return state;
}
