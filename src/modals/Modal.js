import {useState} from 'react';

const CartModal = () => {
  const [open, setModalToOpen] = useState(false);
  const [close, setModalToClose] = useState(false);

  const openModal = () => {
    setModalToOpen(true);
  }

  const closeModal = () => {
    setModalToClose(true);
    setModalToOpen(false);
  }

  return {open, close, openModal, closeModal};
}

export default CartModal;