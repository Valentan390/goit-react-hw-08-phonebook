import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './contactsThunk';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
    modalContact: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
    filterModalContact: (state, action) => {
      state.contacts.modalContact = state.contacts.items.find(
        contact => contact.id === action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          ({ id }) => id !== payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.map(contact =>
          contact.id === payload.id ? payload : contact
        );
      });
  },
});

export const { filterContacts, filterModalContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
