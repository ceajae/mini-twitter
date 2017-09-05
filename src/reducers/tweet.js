import {UPDATE_TWEET} from '../constants/actionTypes';



const initialState={
  text:'',
  count:0,
  submitable: false
}


function tweet(state= initialState, action){
    switch(action.type){
      case UPDATE_TWEET:
        return{
          ...state,
          text:action.payload.value
        }
      default:
      return state;
    }
   return state;
}


export default tweet;
