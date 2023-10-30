import { useDispatch, useSelector } from 'react-redux';
import styles from './Contacts.module.css';

import { deleteContact } from 'redux/contacts/contactsThunk';

import { getFilterContacts } from 'redux/contacts/selectors';
import Modal from 'components/modal/Modal';
import { useEffect, useState } from 'react';
import { filterModalContact } from 'redux/contacts/contactSlice';

const ContactsListItem = ({ name, number, onDelete, onRemove }) => {
  return (
    <li className={styles.listItemContacts}>
      <p className={styles.pContactListItem}>{name}</p>
      <span>tel: {number}</span>
      <div className={styles.buttonContactListItem}>
        <button className={styles.buttonRemoveContacts} onClick={onRemove}>
          Edit contact
        </button>
        <button className={styles.buttonDeleteContacts} onClick={onDelete}>
          Delete contact
        </button>
      </div>
    </li>
  );
};

export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilterContacts);

  const [shownModal, setShownModal] = useState(false);

  const onModal = () => {
    setShownModal(!shownModal);
  };

  const handeleEdit = contactId => {
    onModal();
    dispatch(filterModalContact(contactId));
  };

  useEffect(() => {
    if (shownModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // return () => {
    //   document.body.style.overflow = 'auto';
    // };
  }, [shownModal]);

  // if (!shownModal) {
  //   return null;
  // }

  return (
    <>
      <ul className={styles.listContacts}>
        {contacts.map(contact => {
          return (
            <ContactsListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={() => dispatch(deleteContact(contact.id))}
              onRemove={() => handeleEdit(contact.id)}
            />
          );
        })}
      </ul>
      {shownModal && <Modal onClose={onModal} />}
    </>
  );
};
