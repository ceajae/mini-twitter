import {TOGGLE_MODAL_VISIBILITY} from '../constants/actionTypes';


export function toggleModalVisibility(value){
  return{
    type:TOGGLE_MODAL_VISIBILITY,
    payload:{
      value
    }
  }
}
