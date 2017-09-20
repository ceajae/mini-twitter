import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import container from './container';

import InputField from '../../../components/inputField/';
import Button from '../../../components/Button/';

class Welcome extends Component{

    render(){
      const {formValues}=this.props;
      return(
         <div className='welcomePage'>

              <h2 className='appTitle'>Welcome to Parot</h2>

              <div className='signUpForm'>

                   <InputField label='Username'
                               onChange={this._handleUpdateField.bind(this, 'username')}
                               value={formValues.username}/>
                   <InputField label='Password'
                               onChange={this._handleUpdateField.bind(this, 'password')}
                               value={formValues.password}/>

                   <Button text='Create Account' onClick={this._handleCreateAccount}/>

                   <div className='signInLink'>
                       <label>Already Signed Up?</label>
                       <Link to='signIn' >Sign In</Link>
                   </div>
              </div>


         </div>
      );
    }

    _handleUpdateField(name, event){
      this.props.updateFormField(name, event.target.value);
    }

    _handleCreateAccount(event){

    }
}

export default container(Welcome)
