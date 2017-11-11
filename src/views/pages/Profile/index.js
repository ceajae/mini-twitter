import React, { Component } from 'react';
import './style.css';
import Main from '../../Templates/Main/';
import InputField from '../../../components/inputField/';
import container from './container';
import handleUpdateField from '../../../utilities/handleUpdateField';
import Button from '../../../components/Button/';
import httpRequest from '../../../utilities/httpRequest';
import {getSignedInUser} from '../../../services/firebase';
import {updateUser,downloadPhotoUrl, fileUpload}from '../../../services/firebase';
import firebase from '../../../configuration/firebase';



class Profile extends Component {
  constructor(props){
    super(props);
    this.state ={
      uploading: false,
      percent:0,
      file:{},
      error:''
    }

  }

  componentDidMount(){
       getSignedInUser()
         .then((authdUser) => {

            const stringUserId = JSON.stringify({userId: authdUser.uid });

            httpRequest('GET','http://localhost:3030/users?UserId=' + stringUserId)
               .then( savedUser =>{
                 this.props.addUser(authdUser, savedUser)
                 this.props.loadSavedValues(this.props.user)
                })
               .catch(error =>{
                   console.log(error)
               })
         })
         .catch( error =>{
           console.log(error)
           this.props.history.push('/login');
         })

    }

  render() {
    const {formValues, user}=this.props;
    const {file} = this.state;
    console.log(user)
    return (
       <Main user={user}>
           <div className='profilePhoto-wrap'>
                 <div className='profilePhoto'>
                    <img src={user.photoUrl}/>
                    <label id='custom-file-upload'>
                       <input  id='file-upload'
                               type='file'
                               onChange={this._handleFileSelect.bind(this)} />
                        Change profile picture
                    </label>
                 </div>


           </div>
           <div className='profile-wrap'>


              {this.state.uploading
                 ? <div>
                     <div className='load-bar'/>
                       <span>Uploading: {this.state.percent}%</span>
                   </div>
                 : ''
               }

              <div className= 'profile-header'>
                 My Profile
              </div>
              <div className='profile-form'>

                  <form>

                        <InputField label='FIRSTNAME'
                                    onChange={handleUpdateField.bind(this, 'firstname')}
                                    value={formValues.firstname}/>
                        <InputField label='LASTNAME'
                                    onChange={handleUpdateField.bind(this, 'lastname')}
                                    value={formValues.lastname}/>

                        <InputField label='EMAIL'
                                    onChange= {handleUpdateField.bind(this, 'email')}
                                    value={formValues.email}/>
                        <InputField label='USERNAME'
                                    onChange={handleUpdateField.bind(this, 'username')}
                                    value={formValues.username}/>

                        <div  className='saveButton'>
                            <Button text='Save'
                                    onClick={this._handleUpdateUserProfile.bind(this)}/>
                        </div>
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

 _handleFileSelect(e){
    let file, fileName
    this.setState({ file: e.target.files[0] }, ()=>{

                       const file = this.state.file;
                       const fileName = this.state.file.name;
                       this._handleFileUpload(file, fileName);
                   })

 }

_handleSavePhotoUrl(fileName){
    console.log('download me')
    console.log(fileName)
    downloadPhotoUrl(fileName)
      .then( url => {
         this.props.updateUserState( 'photoUrl', url)
         const stringUserProfile = JSON.stringify({
               ...this.props.formValues,
               photoUrl: url
         })
         console.log(stringUserProfile)
         httpRequest('POST','http://127.0.0.1:3030/users', stringUserProfile )
           .then( response=>{
             console.log(response)
           })

      })
      .catch(error=>{
        console.log(error)
      })
}


 _handleFileUpload(file, fileName){
     this.setState({ uploading: true })
     fileUpload(file, fileName)
       .then(()=>{
          console.log('time to download!!')
          console.log(fileName)
          this._handleSavePhotoUrl(fileName);
       })

 }

}

export default container(Profile)
