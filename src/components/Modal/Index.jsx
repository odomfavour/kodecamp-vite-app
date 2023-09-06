/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  }, [closeModal]);
  return <div>{modalContent}</div>;
};

export default Modal;
