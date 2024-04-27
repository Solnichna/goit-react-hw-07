import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice.js';
import filtersReducer from './filtersSlice';


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer
});


export const store = configureStore({
  reducer: rootReducer 
});

export default store;
