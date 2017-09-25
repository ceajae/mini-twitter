import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Main from '../../Templates/Main/';
import InputField from '../../../components/inputField/';
import container from './container';
import handleUpdateField from '../../../constants/handleUpdateField';
import updateUserProfile from '../../../constants/updateUserProfile';
import Button from '../../../components/Button/';

class Profile extends Component {

  componentWillMount(){
      const request = new XMLHttpRequest();

      request.open('GET', 'http://127.0.0.1:3030/users', true);
      request.addEventListener('load', ()=>{
          const response = request.responseText;
          this.props.loadSavedValues(response);
          console.log(response)
      })
      request.send();
  }

  render() {
      const {formValues}=this.props;
      console.log(formValues)

    return (
       <Main>
           <div className='profile-wrap'>
              <div className= 'profile-header'>
                 My Profile
              </div>
              <div className='profile-form'>
                  <form>

                        <InputField label='Firstname'
                                    onChange={handleUpdateField.bind(this, 'firstname')}
                                    value={formValues.firstname}/>
                        <InputField label='Lastname'
                                    onChange={handleUpdateField.bind(this, 'lastname')}
                                    value={formValues.lastname}/>

                        <InputField label='Email'
                                    onChange={handleUpdateField.bind(this, 'email')}
                                    value={formValues.email}/>
                        <InputField label='Username'
                                    onChange={handleUpdateField.bind(this, 'username')}
                                    value={formValues.username}/>
                        <InputField label='Password'
                                    onChange={handleUpdateField.bind(this, 'password')}
                                    value={formValues.password}/>

                        <Button text='Save'
                                 onClick={updateUserProfile.bind(this)}/>
                  </form>
              </div>
               </div>
       </Main>
    );
  }
}
export default container(Profile)
