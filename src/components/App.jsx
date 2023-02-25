import React from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';

export const App = () => {
  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>

      {/* <Form onSubmit={formAddContact} /> */}
      <Form />

      <FilterBar />

      <ContactsList />
      {/* <ContactsList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      /> */}
    </div>
  );
};
