import {connect } from 'react-redux';

function mapStateToProps(state, ownProps){
  return{
     count:state.tweet.count
  }
}

function mapDispatchToProps(dispatch){
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps);
