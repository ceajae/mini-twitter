import React from 'react';
import './style.css';


export default function Button(props){
  return(
    <div className={`button ${props.disabled? 'button-disabled' : ''}`}
         onClick={props.disabled? ()=>{console.log('disabled')} :props.onClick}>
       {props.text}
    </div>
  );
}
