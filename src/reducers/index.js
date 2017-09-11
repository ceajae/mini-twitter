import {combineReducers} from 'redux';
import tweet from './tweet';
import modal from './modal';
import posts from './posts'


export default combineReducers({
   tweet,
   modal,
   posts
})
