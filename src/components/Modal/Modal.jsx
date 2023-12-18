import React from 'react';
import { Overlay } from './ModalStaled';

export const Modal = ({ closeModal, urlModal }) => {
  return (
    <Overlay
      onClick={closeModal}
      style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}
      className="overlay"
    >
      <div className="Modal">
        <img src={urlModal} alt="#" />
      </div>
    </Overlay>
  );
};
