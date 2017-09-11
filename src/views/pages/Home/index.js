import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import Header from '../../../components/Header/';
import Content from '../../../components/Content/';
import Menu from '../../../components/Menu/';
import Main from '../../Templates/Main/';
import container from './container';


class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const{posts} = this.props;
    const postArray =[];
    for (var post in posts){
      if(posts.hasOwnProperty(post) && posts[post].text !==''){
         postArray.push(
           <Post key={`post_${postArray.length + 1}`} text={posts[post].text}/>
         )
      }
    }
    return (
       <Main>
          <div className='home-wrap'>
             <div className='post-container'>
                 {
                   postArray
                 }
             </div>
          </div>
       </Main>
    );
  }
}

function Post(props){
  return(
    <div className='post-wrap'>
       <div className='post-avatar'>?</div>
       <div className='post-text-wrap'>
          <div className='post-username'>Adesola <span> @CHICHI </span></div>
          <div className='post-text'> {props.text} </div>
          <div className='post-retweet'>retweet?</div>
       </div>
    </div>
  );
}

export default container(Home);
