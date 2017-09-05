import React from 'react';
import './style.css';



export default function Header(props){
  return(
    <div className='header'>
       {props.children}
    </div>
  );
}
