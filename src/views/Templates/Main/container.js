import {connect } from 'react-redux';
import {updateTweet,toggleTweetBoxVisibility} from '../../../actions/tweetActions';
import {toggleModalVisibility} from '../../../actions/modalActions';
import {addPost} from '../../../actions/postActions';

function mapStateToProps(state, ownProps){
  return{
     count:state.tweet.count,
     tweetBoxVisible:state.tweet.tweetBoxVisible,
     modalVisible: state.modal.visibility,
     posts:state.posts.posts,
     tweetValue:state.tweet.text
  }
}

function mapDispatchToProps(dispatch){
  return{
      updateTweet:(value)=> dispatch(updateTweet(value)),
      toggleTweetBoxVisibility:(value)=> dispatch(toggleTweetBoxVisibility(value)),
      toggleModalVisibility:(value)=> dispatch(toggleModalVisibility(value)),
      postTweet:(value, postId,userId,timeStamp)=> dispatch(addPost(value,postId,userId, timeStamp))

 }
}

export default connect(mapStateToProps, mapDispatchToProps);
