import{ADD_USER} from '../constants/actionTypes';

const initialState={
   user:{}
}

export default function User(state = initialState, action){

  switch(action.type){

    case ADD_USER:
        console.log(action.payload.user)
        return{
             ...state,
             user: action.payload.user
            }
      break;
    default:
      return state;
  }
  return state;
}
