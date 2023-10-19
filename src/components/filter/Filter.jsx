import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const hendleChangeFilter = event => {
    const { value } = event.target;
    dispatch(filterContacts(value));
  };
  return (
    <div className={styles.divFilter}>
      <h4>Find contacts by name</h4>
      <input
        className={styles.inputFilter}
        onChange={hendleChangeFilter}
        value={filter}
        type="text"
      />
    </div>
  );
};
