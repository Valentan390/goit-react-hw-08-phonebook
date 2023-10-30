import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalContact } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/contactsThunk';

const ModalRoot = document.getElementById('ModalRoot');

const Modal = ({ onClose }) => {
  const contact = useSelector(selectModalContact);
  const [form, setForm] = useState({
    name: contact.name,
    number: contact.number,
  });

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onEditSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({ ...form, id: contact.id }));
    onClose();
  };

  const handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <div onClick={handleBackdrop} className={styles.Overlay}>
      <form onSubmit={onEditSubmit} action="" className={styles.Modal}>
        <div>
          <label className={styles.labelModal} htmlFor="">
            Name
            <input
              className={styles.inputModal}
              type="text"
              value={form.name}
              name="name"
              onChange={handleChangeInput}
            />
          </label>
        </div>
        <div>
          <label className={styles.labelModal} htmlFor="">
            Number
            <input
              className={styles.inputModal}
              type="text"
              value={form.number}
              name="number"
              onChange={handleChangeInput}
            />
          </label>
        </div>
        <button className={styles.duttonEditContact} type="submit">
          Edit contact
        </button>
      </form>
    </div>,
    ModalRoot
  );
};

export default Modal;
