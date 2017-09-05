import React from 'react';
import './style.css';



export default function Content(props){
  return(
    <div className = 'content-wrap'>
        {props.children}
    </div>
  );
}
