import React from 'react';
import Button from '../Button';
import {connect} from 'react-redux';
import './style.css';

export default function TweetBox(props){
  return(
     <div className = 'tweetBox-wrap'>
        <header>Compose Am Jare</header>
        <div className='tweetBox'>
            <input type='text'
                   className='tweetInput'
                   placeholder='Whatagwan Mwan!' />
            <footer>
                <span className='tweet-count'>{140- props.count}</span>
                <Button text='Parot' onClick={()=>{}}/>
            </footer>
        </div>
     </div>
  );
}
