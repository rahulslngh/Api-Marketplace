import React from 'react'
import './Modal.css'

function Modal(props) {
  return (
    <div className='modal'>
      <div className='modal-backdrop' onClick={props.onClose}></div>
      <div className='modal-content'>
        {props.children}
      </div>
    </div>
  )
}

export default Modal