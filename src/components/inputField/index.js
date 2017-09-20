import React from 'react';
import './style.css';


export default function InputField(props){
   return(
     <div className='inputField-wrap'>
        <label>{props.label || 'label'}</label>
        <input value={props.value || ''}
               onChange={props.onChange}
               disabled={props.disabled}/>

        <span>{props.error && props.error}</span>
     </div>
   )
}
