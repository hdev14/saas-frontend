import React from 'react';
import PropTypes from 'prop-types';

import { Container, ModalShape } from './styles';

const Modal = ({ children, size }) => (
  <Container>
    <ModalShape size={size}>
      {children}
    </ModalShape>
  </Container>
);

Modal.defaultProps = {
  size: 'default',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node]),
  ]).isRequired,
  size: PropTypes.string,
};

export default Modal;
