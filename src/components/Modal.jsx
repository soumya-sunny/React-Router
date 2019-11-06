import ReactDOM from 'react-dom';
import React from 'react';

const Modal = ({root, open, close}) => {
  return (open ?
    ReactDOM.createPortal(
      <div className="modal">
        <div className="modalContent">
          modal
          <span onClick={close} style={{position: 'absolute',
          right: '10px',
          top: '2px'}}> X </span>
        </div>
       </div>
    , root): null
  );
}

export default Modal;
