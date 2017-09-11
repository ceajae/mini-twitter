import {connect } from 'react-redux';
import {updateTweet,toggleTweetBoxVisibility} from '../../../actions/tweetActions';
import {toggleModalVisibility} from '../../../actions/modalActions';
import {addPost} from '../../../actions/postActions';

function mapStateToProps(state, ownProps){
  return{
     count:state.tweet.count,
     tweetValue:state.tweet.text,
     tweetBoxVisible:state.tweet.tweetBoxVisible,
     modalVisible: state.modal.visibility,
     posts:state.posts.posts,

  }
}

function mapDispatchToProps(dispatch){
  return{
      updateTweet:(value)=> dispatch(updateTweet(value)),
      toggleTweetBoxVisibility:(value)=> dispatch(toggleTweetBoxVisibility(value)),
      toggleModalVisibility:(value)=> dispatch(toggleModalVisibility(value)),
      postTweet: (value)=> dispatch(addPost(value)),
  }
 }


export default connect(mapStateToProps, mapDispatchToProps);
