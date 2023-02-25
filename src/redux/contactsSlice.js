// import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsAPI, addContactAPI, deleteContactAPI } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.contacts.push(action.payload);
    //   },
    //   prepare(name, phone) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         phone,
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   const index = state.contacts.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   state.contacts.splice(index, 1);
    // },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAPI.pending, state => {
        state.status = 'idle';
        state.isLoading = true;
      })
      .addCase(fetchContactsAPI.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContactsAPI.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContactAPI.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactAPI.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export const { setLoading, setError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
