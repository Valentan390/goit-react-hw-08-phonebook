import { useDispatch, useSelector } from 'react-redux';
import styles from './FormaContacts.module.css';
import { addContact } from 'redux/contacts/contactsThunk';
// import { nanoid } from 'nanoid';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';

export const FormaContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Name cannot be empty');
      return;
    }

    if (
      contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert(`${name} is already in contacts`);

      setName('');

      setNumber('');
      return;
    }

    const newContact = {
      // id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));

    setName('');

    setNumber('');
  };
  return (
    <>
      <form className={styles.form} onSubmit={hendleSubmit} action="">
        <div className={styles.formDivContainer}>
          <label className={styles.label} htmlFor="">
            Name
          </label>
          <input
            className={styles.inputformDivContainer}
            value={name}
            name="name"
            onChange={handleChange}
            type="text"
            required
          />
        </div>

        <div className={styles.formDivContainer}>
          <label className={styles.label} htmlFor="">
            Number
          </label>
          <input
            className={styles.inputformDivContainer}
            value={number}
            type="tel"
            name="number"
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
