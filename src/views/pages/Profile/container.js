import {connect } from 'react-redux';
import {updateFormField } from '../../../actions/formActions';
import {addFieldError} from '../../../actions/formActions';
import {loadSavedValues} from '../../../actions/formActions'

function mapStateToProps(state, ownProps){
  return{
     modalVisible: state.modal.visibility,
     formValues: state.form.values,
     //user:state.users.users
  }
}

function mapDispatchToProps(dispatch){
  return{
      loadSavedValues:(values)=> dispatch(loadSavedValues(values)),
      addFieldError:(name,value)=>dispatch(addFieldError(name, value)),
      updateFormField:(name, value)=>dispatch(updateFormField(name, value))
  }
 }


export default connect(mapStateToProps, mapDispatchToProps);
