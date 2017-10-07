import {UPDATE_FORM_FIELD,
        ADD_FIELD_ERROR,
        LOAD_SAVED_VALUES,
        CLEAR_FORM_FIELD} from '../constants/actionTypes';



const initialState={
  errors:{},
  values:{}
}

function updateValue(values, payload){
  return{
     ...values,
     [payload.name]:payload.value
  }
}

function loadSavedValues(values, payload){
  return{
    ...values,
    ...payload.values
  }

}



function form(state=initialState, action){
  const{payload} = action;
    switch(action.type){

      case UPDATE_FORM_FIELD:
          return{
            ...state,
            values: updateValue(state.values, action.payload)
          }
          break;
      case ADD_FIELD_ERROR:
          return{

          }
          break;

      case LOAD_SAVED_VALUES:
          return{
            ...state,
            values: loadSavedValues(state.values, action.payload)
          }

          break;

      case CLEAR_FORM_FIELD:
          return{
            ...state,
            values: initialState.values
          }
          break;

      default:
      return state;
    }
   return state;
}


export default form;
