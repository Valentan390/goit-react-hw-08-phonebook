import { Contacts } from 'components/contacts/Contacts';
import { Filter } from 'components/filter/Filter';
import { FormaContacts } from 'components/formaContacts/FormaContacts';
import { Section } from 'components/section/Section';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsThunk';
import { selectLoading } from 'redux/contacts/selectors';

const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Section title={'Phonebook'}>
        <FormaContacts />
      </Section>

      <div>{isLoading && 'Request in progress...'}</div>
      <Section title={'Contacts'}>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};

export default Contact;
