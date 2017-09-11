import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Modal(props){
  const{ visible = false,
         onClose=()=>{console.log('closing modal')} } = props;
         
  return(
    <div className={`modal-wrap ${visible ? 'modal-open' : 'modal-closed'}`}>
        <div className='overlay' onClick={onClose}></div>
        <div className='modal-content'>{props.children}</div>
    </div>
  );
}


Modal.propTypes={
   visible: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
}
