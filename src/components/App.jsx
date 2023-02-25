import {
  DeleteContact,
  FetchAPI,
  PostContact,
  exampleContact,
} from 'API/FetchAPI';
import React from 'react';
import { useEffect } from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  useEffect(() => {
    // console.log(exampleContact);
    FetchAPI();
    // PostContact(exampleContact);
    // DeleteContact(3);
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
