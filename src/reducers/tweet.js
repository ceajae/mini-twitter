import {UPDATE_TWEET,TOGGLE_TWEET_BOX_VISIBILITY} from '../constants/actionTypes';



const initialState={
  text:'',
  tweetBoxVisible:false,
  count:0,
  submitable: false
}


function tweet(state= initialState, action){
  const{payload} = action;
    switch(action.type){
      case UPDATE_TWEET:
        return{
          ...state,
          count:action.payload.value.length,
          text:action.payload.value
        }
        break;

      case TOGGLE_TWEET_BOX_VISIBILITY:
        return{
          ...state,
          tweetBoxVisible:payload.value
        }

      default:
      return state;
    }
   return state;
}


export default tweet;
