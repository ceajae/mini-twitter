import {UPDATE_TWEET, TOGGLE_TWEET_BOX_VISIBILITY} from '../constants/actionTypes';

export function updateTweet(value){
  return{
    type: UPDATE_TWEET,
    payload:{
      value
    }
  }
}

export function toggleTweetBoxVisibility(value){
  return{
     type:TOGGLE_TWEET_BOX_VISIBILITY,
     payload:{
       value
     }
  }
}
