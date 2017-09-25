import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import container from './container';

import InputField from '../../../components/inputField/';
import Button from '../../../components/Button/';
import handleUpdateField from '../../../constants/handleUpdateField';

class Welcome extends Component{

    render(){
      const {formValues}=this.props;
      return(
         <div className='welcomePage'>

              <div className='signUpHeader'>Welcome to Parot</div>

              <div className='signUpForm'>

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

    // _handleUpdateField(name, event){
    //   this.props.updateFormField(name, event.target.value);
    // }

    _handleCreateAccount(event){
       const stringSignUpDetails = JSON.stringify({
           ...this.props.formValues
       })

       const request = new XMLHttpRequest();

       request.open('POST', 'http://localhost:3030/users', true);
       request.addEventListener('load', ()=>{
           const response = request.responseText;
           this.props.addUser(response);
       })
       request.send(stringSignUpDetails)
    }
}

export default container(Welcome)
