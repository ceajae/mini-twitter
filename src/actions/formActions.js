import {UPDATE_FORM_FIELD, ADD_FIELD_ERROR, LOAD_SAVED_VALUES} from '../constants/actionTypes';

export function updateFormField(name , value){
  return{
    type:UPDATE_FORM_FIELD,
    payload:{
        name,
        value
    }
  }
}

export function addFieldError(name, value){
  return{
    type:ADD_FIELD_ERROR,
    payload:{
      name,
      value
    }
}
}

export function loadSavedValues(values){
  const valuesObj = JSON.parse(values)

   return {
     type: LOAD_SAVED_VALUES,
     payload:{
        valuesObj
     }
   }
}
