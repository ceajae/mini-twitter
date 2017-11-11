import {connect } from 'react-redux';
import {updateTweet,toggleTweetBoxVisibility} from '../../../actions/tweetActions';
import {toggleModalVisibility} from '../../../actions/modalActions';
import {addPost} from '../../../actions/postActions';
import {addUser,} from '../../../actions/userActions';

function mapStateToProps(state, ownProps){
  return{
     count:state.tweet.count,
     tweetBoxVisible:state.tweet.tweetBoxVisible,
     modalVisible: state.modal.visibility,
     posts:state.posts.posts,
     tweetValue:state.tweet.text,
     user: state.user.user
  }
}

function mapDispatchToProps(dispatch){
  return{
      addUser:(user)=> dispatch(addUser(user)),
      updateTweet:(value)=> dispatch(updateTweet(value)),
      toggleTweetBoxVisibility:(value)=> dispatch(toggleTweetBoxVisibility(value)),
      toggleModalVisibility:(value)=> dispatch(toggleModalVisibility(value)),
      postTweet:(value, postId,userId,timeStamp,likedBy)=> dispatch(addPost(value,postId,userId, timeStamp, likedBy))

 }
}

export default connect(mapStateToProps, mapDispatchToProps);
