import React from 'react';
import Modal, { Props } from 'react-modal';
import st from './styles.module.scss';

Modal.setAppElement('#root');

interface ModalProps extends Props {
  children?: React.ReactNode;
}

export const CommonModal: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <Modal className={st.modal} overlayClassName={st.overlay} {...props}>
      {children}
    </Modal>
  );
};
