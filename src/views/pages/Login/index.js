import React,{Component} from 'react';
import './style.css';
import container from './container';
import firebase from '../../../configuration/firebase';

import InputField from '../../../components/inputField/';
import Button from '../../../components/Button/';
import handleUpdateField from '../../../utilities/handleUpdateField';

import {signInUser} from '../../../services/firebase';

class Login extends Component{

    render(){
      const {formValues}=this.props;
      return(
         <div className='welcomePage'>

              <div className='loginHeader'>Welcome to Parot</div>

              <div className='loginForm'>

                   <InputField label='Email'
                               onChange={handleUpdateField.bind(this, 'email')}
                               value={formValues.email}/>
                   <InputField label='Password'
                               onChange={handleUpdateField.bind(this, 'password')}
                               value={formValues.password}/>

                   <Button text='Login' onClick={this._handleSignIn.bind(this)}/>
              </div>

         </div>
      );
    }


    _handleSignIn(event){

       const{ formValues, addUser } = this.props;
       signInUser(formValues.email, formValues.password)
         .then( (user) => {
             addUser(user)
         })
         .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password'){
              alert('Wrong password');
            }else {
               alert(errorMessage)
            }
         })
    }
}

export default container(Login)
