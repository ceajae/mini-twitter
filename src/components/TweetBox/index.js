import React from 'react';
import Button from '../Button';
import {connect} from 'react-redux';
import './style.css';

export default function TweetBox(props){
  const getCountClass = (count)=>{
     if(count>120 && count<=130){
       return 'text-color-warning';
     }else if(count>130){
       return 'text-color-danger';
     }
     else {return 'text-color-default'}
  }

  const checkDisabled = props.count >140 || props.count==0 ? true : false;

  return(
     <div className = 'tweetBox-wrap'>
        <header>Compose Am Jare</header>
        <div className='tweetBox'>
            <textArea type='text'
                      className='tweetInput'
                      onChange={props.onUpdateTweet}
                      placeholder='Whatagwan Mwan!' />
            <footer>
                <span className={`tweet-count ${getCountClass(props.count)}`}>{140- props.count}</span>
                <Button text='Parot'
                        onClick={props.onSubmitTweet}
                        disabled={checkDisabled}/>
            </footer>
        </div>
     </div>
  );
}
