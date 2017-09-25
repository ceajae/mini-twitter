import React,{Component} from 'react';
import './style.css';
import container from './container';

import InputField from '../../../components/inputField/';
import Button from '../../../components/Button/';

class Login extends Component{

    render(){
      const {formValues}=this.props;
      return(
         <div className='welcomePage'>

              <div className='loginHeader'>Welcome to Parot</div>

              <div className='loginForm'>

                   <InputField label='Username'
                               onChange={this._handleUpdateField.bind(this, 'username')}
                               value={formValues.username}/>
                   <InputField label='Password'
                               onChange={this._handleUpdateField.bind(this, 'password')}
                               value={formValues.password}/>

                   <Button text='Login' onClick={this._handleCreateAccount}/>
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

export default container(Login)
