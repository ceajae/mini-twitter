import {UPDATE_FORM_FIELD, ADD_FIELD_ERROR} from '../constants/actionTypes';



const initialState={
  errors:{},
  values:{}
}

function updateValue(value, payload){
  return{
     ...value,
     [payload.name]:payload.value
  }
}



function form(state=initialState, action){
  const{payload} = action;
    switch(action.type){

      case UPDATE_FORM_FIELD:
          return{
            ...state,
            values: updateValue(state.value, action.payload)
          }
          break;
      case ADD_FIELD_ERROR:
          return{

          }
      default:
      return state;
    }
   return state;
}


export default form;
