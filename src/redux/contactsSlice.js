import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    setContacts(state, action) {
      state.items = action.payload;
    },
    addContactSuccess(state, action) {
      state.items.push(action.payload);
    },
    deleteContactSuccess(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  }
});

export const { setContacts, addContactSuccess, deleteContactSuccess, setLoading, setError } = contactsSlice.actions;


export const fetchContacts = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('https://6629139e54afcabd073815b7.mockapi.io/contacts'); 
    dispatch(setContacts(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const addContact = (newContact) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post('https://6629139e54afcabd073815b7.mockapi.io/contacts', newContact); // Adjust the URL according to your API endpoint
    dispatch(addContactSuccess(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};


export const deleteContact = (contactId) => async dispatch => {
  dispatch(setLoading(true));
  try {
    await axios.delete(`https://6629139e54afcabd073815b7.mockapi.io/contacts/${contactId}`); 
    dispatch(deleteContactSuccess(contactId));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export default contactsSlice.reducer;
