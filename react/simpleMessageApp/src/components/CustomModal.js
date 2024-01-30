import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, closeModal, content }) => {
  const handleModalClose = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      contentLabel="Photo modal window"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        },
        content: {
          backgroundColor: 'transparent',
          maxWidth: '70%', 
          maxHeight: '80%',
          margin: 'auto', 
          overflow: 'hidden',
          borderRadius: '14px',
          border: 'hidden'
        },
      }}
    >
      <div>
        <button style={{backgroundColor: 'transparent', border: 'hidden'}} onClick={handleModalClose}>{content}</button> 
      </div>
    </Modal>
  );
};

export default CustomModal;
