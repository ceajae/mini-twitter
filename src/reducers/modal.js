import {TOGGLE_MODAL_VISIBILITY} from '../constants/actionTypes';

const initialState = {
     visibility:false
}

export default function modal(state= initialState, action){
   switch(action.type){
     case TOGGLE_MODAL_VISIBILITY:
       return{
         ...state,
         visibility:action.payload.value
       }
       break;
    default:
      return state;
   }
   return state;
}
