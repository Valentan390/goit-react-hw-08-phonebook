import { useDispatch, useSelector } from 'react-redux';
import styles from './Contacts.module.css';

import { deleteContact } from 'redux/contacts/contactsThunk';

import { getFilterContacts } from 'redux/contacts/selectors';

const ContactsListItem = ({ name, number, onDelete }) => {
  return (
    <li className={styles.listItemContacts}>
      <p>{name} -</p>
      <span>tel: {number}</span>
      <button className={styles.buttonDeleteContacts} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilterContacts);

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
            />
          );
        })}
      </ul>
    </>
  );
};
