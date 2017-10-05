import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import container from './container';
import firebase from '../../../configuration/firebase';
import httpRequest from '../../../utilities/httpRequest';
import InputField from '../../../components/inputField/';
import Button from '../../../components/Button/';
import handleUpdateField from '../../../utilities/handleUpdateField';

import {createUserAccount} from '../../../services/firebase';



class Welcome extends Component{

    render(){
      const {formValues}=this.props;
      return(
         <div className='welcomePage'>

              <div className='signUpHeader'>Welcome to Parot</div>

              <div className='signUpForm'>

                   <InputField label='Fullname'
                               onChange={handleUpdateField.bind(this, 'fullname')}
                               value={formValues.fullname}/>
                   <InputField label='Email'
                               onChange={handleUpdateField.bind(this, 'email')}
                               value={formValues.email}/>
                   <InputField label='Username'
                               onChange={handleUpdateField.bind(this, 'username')}
                               value={formValues.username}/>
                   <InputField label='Password'
                               onChange={handleUpdateField.bind(this, 'password')}
                               value={formValues.password}/>

                   <Button text='Create Account' onClick={this._handleCreateAccount.bind(this)}/>


              </div>
              <div className='signInLink'>
                  <label>Already Signed Up?</label>
                  <Link to='login' >Sign In</Link>
              </div>


         </div>
      );
    }


    _handleCreateAccount(event){
           const {formValues, clearFormField} = this.props;
           createUserAccount(formValues.email, formValues.password)
           .then((user)=>{
               user.updateProfile({
                 displayName: formValues.fullname,
                 username: formValues.username
               })
               console.log(user)
               const stringSignUpDetails = JSON.stringify(
                 {
                   ...formValues,
                   email:  user.email,
                   userId: user.uid
                 })

                 httpRequest('POST','http://127.0.0.1:3030/users', stringSignUpDetails )
                 .then(response => {
                    console.log(response)
                 })

                 clearFormField();

              })
            .catch((error)=>{
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode == 'auth/weak-password'){
                  alert('The password is too weak');
                } else{
                  alert(errorMessage);
                }
           })


    }
}

export default container(Welcome)
