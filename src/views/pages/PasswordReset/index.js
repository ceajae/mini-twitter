import React,{Component} from 'react';
import './style.css';
import Header from '../../../components/Header/';
import {Link, withRouter} from 'react-router-dom';
import container from './container';
import firebase from '../../../configuration/firebase';

import InputField from '../../../components/inputField/';
import Button from '../../../components/Button/';
import handleUpdateField from '../../../utilities/handleUpdateField';

import {signInUser, resetPassword} from '../../../services/firebase';
import httpRequest from '../../../utilities/httpRequest';

class PasswordReset extends Component{
  constructor(props){
    super(props);
    this.state = {
       emailSent:  false
    }
  }

    render(){
      const {formValues}=this.props;
      return(
         <div className='passwordResetPage'>
             <Header>
                 <div className='logo-wrap'>
                       <Link to='/'>
                         Paroter
                       </Link>
                 </div>

             </Header>

              <div className='passwordResetForm'>
                    {this.state.emailSent
                      ? <span>
                           Email sent!
                        </span>
                      : ''
                    }
                   <h1>Password Reset</h1>
                   <InputField label='Enter your email'
                               type='text'
                               onChange={handleUpdateField.bind(this, 'email')}
                               value={formValues.email}/>


                   <div className='sendButton'>
                       <Button className='loginButton'
                               text='Send Email'
                               onClick={this._handlePasswordReset.bind(this)}
                               />
                      <Link to='login' >Back to Login</Link>
                   </div>
              </div>

         </div>
      );
    }

    _handlePasswordReset(){
       let email = this.props.formValues.email;
       resetPassword(email)
         .then(()=>{
            this.props.clearFormField();
            this.setState({emailSent:true})
         })
         .catch((error)=>{
            console.log(error)
         })
    }



}

export default container(PasswordReset)
