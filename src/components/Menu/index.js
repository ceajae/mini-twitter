import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';


export default function Menu(props){
  return(
    <div className='menu-wrap'>
       <ul className='menus'>
          <li>
            <Link to='profile'>My Profile</Link>
          </li>
       </ul>
    </div>
  );
}
