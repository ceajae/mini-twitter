import React from 'react';
import './style.css';


export default function InputField(props){
   return(
     <div className='inputField-wrap'>
        <label>{props.label + ':' || ''}</label>
        <input value={props.value || ''}
               onChange={props.onChange}
               disabled={props.disabled}
               type={props.type ||''} />

        <span>{props.error && props.error}</span>
     </div>
   )
}
