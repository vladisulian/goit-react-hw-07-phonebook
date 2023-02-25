import { exampleContact } from 'API/FetchAPI';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    // dispatch(addContact(exampleContact));
    // dispatch(fetchContacts());
  });

  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>
      <Form />
      <FilterBar />
      <ContactsList />
    </div>
  );
};
