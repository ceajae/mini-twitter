import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';


export default function Menu(props){
  return(
    // <div className='menu-wrap'>
    //    <ul className='menus'>
    //       <li>
    //         <Link to='profile'>{props.label}</Link>
    //       </li>
    //    </ul>
    //  </div>
    <div className ='dropdown'>
       <span>{props.label}</span>
       <div className= 'dropdown-content'>
           <ul className='menus'>
               <li>
                 <Link to='profile'>Profile</Link>
               </li>
               <li>
                 <a href="#" onClick= {props.signOut}>Sign Out</a>
               </li>
            </ul>
         </div>
    </div>
  );
}
