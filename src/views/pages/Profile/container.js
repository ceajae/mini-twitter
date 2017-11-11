import {connect } from 'react-redux';
import {updateFormField } from '../../../actions/formActions';
import {addFieldError} from '../../../actions/formActions';
import {loadSavedValues} from '../../../actions/formActions';
import {addUser, updateUserState} from '../../../actions/userActions';

function mapStateToProps(state, ownProps){
  return{
     modalVisible: state.modal.visibility,
     formValues: state.form.values,
      user: state.user.user

  }
}

function mapDispatchToProps(dispatch){
  return{
      addUser:(authdUser, savedUser)=> dispatch(addUser(authdUser, savedUser)),
      loadSavedValues:(values)=> {console.log('hey!!');dispatch(loadSavedValues(values))},
      addFieldError:(name,value)=>dispatch(addFieldError(name, value)),
      updateFormField:(name, value)=>dispatch(updateFormField(name, value)),
      updateUserState:(name, value)=>dispatch(updateUserState(name, value))
  }
 }


export default connect(mapStateToProps, mapDispatchToProps);
