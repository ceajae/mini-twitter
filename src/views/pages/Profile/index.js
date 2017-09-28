import React, { Component } from 'react';
import './style.css';
import Main from '../../Templates/Main/';
import InputField from '../../../components/inputField/';
import container from './container';
import handleUpdateField from '../../../utilities/handleUpdateField';
import Button from '../../../components/Button/';
import httpRequest from '../../../utilities/httpRequest';


class Profile extends Component {

  componentWillMount(){

    httpRequest('GET','http://127.0.0.1:3030/users')
    .then( (response) => {
       this.props.loadSavedValues(response);
    })
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
                                 onClick={this._handleUpdateUserProfile.bind(this)}/>
                  </form>
              </div>
               </div>
       </Main>
    );
  }

  _handleUpdateUserProfile(){

      const stringUserProfile = JSON.stringify({
            ...this.props.formValues
      })

      httpRequest('POST','http://127.0.0.1:3030/users', stringUserProfile )
  }

}

export default container(Profile)
