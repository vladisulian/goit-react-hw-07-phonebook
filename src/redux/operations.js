import { URL } from 'API/FetchAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(URL).catch(error => console.error(error));
  console.log('response.data from fetch(operations)', response.data);

  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios
      .post(URL, contact)
      .catch(error => console.error(error));

    console.log('response.data from addContact(operations)', response.data);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios
      .delete(`${URL}/${contactId}`)
      .catch(error => console.error(error));
    console.log('Contact deleted. ID is =>', contactId);

    return contactId;
  }
);
