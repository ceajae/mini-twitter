import{ADD_USER} from '../constants/actionTypes';

export function addUser(user, userId, email, username, password, firstname, lastname){
  console.log('hey!!');
      const userObj = JSON.parse(user);
                  userId = userObj._id;
                  email= userObj.email;
                  username= userObj.username;
                  password= userObj.password;
                  firstname= userObj.firstname;
                  lastname= userObj.lastname;

                  console.log(userObj);

  return{
    type:ADD_USER,
    payload:{
        userId,
        email,
        username,
        password
    }
  }
}
