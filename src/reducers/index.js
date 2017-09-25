import {combineReducers} from 'redux';
import tweet from './tweet';
import modal from './modal';
import posts from './posts';
import form from './form';
import users from './users';


export default combineReducers({
   tweet,
   modal,
   posts,
   form,
   users
})
