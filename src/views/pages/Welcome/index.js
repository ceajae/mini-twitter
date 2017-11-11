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

                   <InputField label='Firstname'
                               type='text'
                               onChange={handleUpdateField.bind(this, 'firstname')}
                               value={formValues.firstname}/>
                   <InputField label='Lastname'
                               type='text'
                               onChange={handleUpdateField.bind(this, 'lastname')}
                               value={formValues.lastname}/>
                   <InputField label='Email'
                               type='text'
                               onChange={handleUpdateField.bind(this, 'email')}
                               value={formValues.email}/>
                   <InputField label='Username'
                               type='text'
                               onChange={handleUpdateField.bind(this, 'username')}
                               value={formValues.username}/>
                   <InputField label='Password'
                                type='password'
                               onChange={handleUpdateField.bind(this, 'password')}
                               value={formValues.password}/>

                   <div className='createButtonSignIn'>
                       <Button text='Create Account'
                               onClick={this._handleCreateAccount.bind(this)}/>
                       <div className='signInLink'>
                           <label>Already Signed Up?</label>
                           <Link to='login' >Sign In</Link>
                       </div>
                   </div>

              </div>



         </div>
      );
    }


    _handleCreateAccount(event){
           const {formValues, clearFormField} = this.props;
           createUserAccount(formValues.email, formValues.password)
           .then((user)=>{
                 this.props.history.push('/');

                 user.updateProfile({
                   displayName: formValues.firstname,
                   username: formValues.username
                 })

                 const stringSignUpDetails = JSON.stringify(
                   {
                     ...formValues,
                     email:  user.email,
                     userId: user.uid
                   })

                   httpRequest('POST','http://127.0.0.1:3030/users', stringSignUpDetails )
                       .then(response => {
                           clearFormField();
                       })



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
