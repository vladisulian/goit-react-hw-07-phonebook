import { FetchAPI, PostContact } from 'API/FetchAPI';
import React from 'react';
import { useEffect } from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  useEffect(() => {
    FetchAPI();
  }, []);

  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>
      <Form />
      <FilterBar />
      <ContactsList />
    </div>
  );
};
