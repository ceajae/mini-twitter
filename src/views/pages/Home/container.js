import {connect } from 'react-redux';
import {updateTweet,toggleTweetBoxVisibility} from '../../../actions/tweetActions';
import {toggleModalVisibility} from '../../../actions/modalActions';
import {addPost, loadSavedPosts, updateLikedPost} from '../../../actions/postActions';
import {addUser} from '../../../actions/userActions';

function mapStateToProps(state, ownProps){
  return{
     count:state.tweet.count,
     tweetValue:state.tweet.text,
     tweetBoxVisible:state.tweet.tweetBoxVisible,
     modalVisible: state.modal.visibility,
     posts:state.posts.posts,
     user: state.user.user

  }

}

function mapDispatchToProps(dispatch){
  return{
      addUser:(authdUser, savedUser)=> dispatch(addUser(authdUser, savedUser)),
      updateTweet:(value)=> dispatch(updateTweet(value)),
      toggleTweetBoxVisibility:(value)=> dispatch(toggleTweetBoxVisibility(value)),
      toggleModalVisibility:(value)=> dispatch(toggleModalVisibility(value)),
      postTweet: (value)=> dispatch(addPost(value)),
      loadSavedPosts:(post)=> dispatch(loadSavedPosts(post)),
      updateLikedPost:(value, post)=>dispatch(updateLikedPost(value, post))
  }
 }


export default connect(mapStateToProps, mapDispatchToProps);
