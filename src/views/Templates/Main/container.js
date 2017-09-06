import {connect } from 'react-redux';
import {updateTweet,toggleTweetBoxVisibility} from '../../../actions/tweetActions';

function mapStateToProps(state, ownProps){
  return{
     count:state.tweet.count,
     tweetBoxVisible:state.tweet.tweetBoxVisible,
  }
}

function mapDispatchToProps(dispatch){
  return{
      updateTweet:(value)=> dispatch(updateTweet(value)),
      toggleTweetBoxVisibility:(value)=> dispatch(toggleTweetBoxVisibility(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
