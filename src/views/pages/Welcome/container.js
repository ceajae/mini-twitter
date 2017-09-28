import {connect } from 'react-redux';
import {updateFormField } from '../../../actions/formActions';
import {addFieldError} from '../../../actions/formActions';
import {clearFormField} from '../../../actions/formActions';



function mapStateToProps(state, ownProps){
  return{
     modalVisible: state.modal.visibility,
     formValues: state.form.values
  }
}

function mapDispatchToProps(dispatch){
  return{
      addFieldError:(name,value)=>dispatch(addFieldError(name, value)),
      clearFormField:()=> dispatch(clearFormField()),
      updateFormField:(name, value)=>dispatch(updateFormField(name, value))
  }
 }


export default connect(mapStateToProps, mapDispatchToProps);
