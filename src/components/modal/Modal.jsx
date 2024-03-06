import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className='overlay' onClick={handleClose}>
      <div className='modal'>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal; 