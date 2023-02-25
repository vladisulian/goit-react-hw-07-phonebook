// chakra
import { Spinner } from '@chakra-ui/react';
import './ChakraUI/spinner.css'
import React from 'react';
import { ContactsList } from './Contacts/ContactsList';
import { FilterBar } from './Filter/Filter';
import { Form } from './Form/Form';


export const App = () => {
  return (
    <div className="Phonebook-container">
      <h1 className="Phonebook__title">Phonebook</h1>
      <Form />
      <FilterBar />
      <ContactsList />
      <Spinner color="orange" size={'xl'} emptyColor='orangered' speed='900ms' />
    </div>
  );
};
