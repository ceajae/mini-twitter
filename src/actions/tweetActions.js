import {UPDATE_TWEET} from '../constants/actionTypes';

export updateTweet(value){
  return{
    type: UPDATE_TWEET,
    payload:{
      value
    }
  }
}
