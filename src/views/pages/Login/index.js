import React,{Component} from 'react';
import './style.css';
import Header from '../../../components/Header/';
import {Link, withRouter} from 'react-router-dom';
import container from './container';
import firebase from '../../../configuration/firebase';

import InputField from '../../../components/inputField/';
import Button from '../../../components/Button/';
import handleUpdateField from '../../../utilities/handleUpdateField';

import {signInUser} from '../../../services/firebase';
import httpRequest from '../../../utilities/httpRequest';

class Login extends Component{


    render(){
      const {formValues}=this.props;
      return(
         <div className='loginPage'>
             <Header>
                 <div className='logo-wrap'>
                       <Link to='/'>
                         Paroter
                       </Link>
                 </div>

             </Header>

              <div className='loginForm'>
                   <h1>Login</h1>

                   <InputField label='EMAIL'
                               type='text'
                               onChange={handleUpdateField.bind(this, 'email')}
                               value={formValues.email}/>
                   <InputField label='PASSWORD'
                               type='password'
                               onChange={handleUpdateField.bind(this, 'password')}
                               value={formValues.password}/>
                   <div className='login'>
                       <Link to='/passwordReset'>Forgot password?</Link>
                       <Button className='loginButton' text='Login' onClick={this._handleSignIn.bind(this)}/>
                   </div>
              </div>

         </div>
      );
    }


    _handleSignIn(event){

       const{ formValues, addUser } = this.props;
       signInUser(formValues.email, formValues.password)
         .then( () => {
             this.props.history.push('/');

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
