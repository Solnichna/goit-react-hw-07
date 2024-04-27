import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer
});


export const store = configureStore({
  reducer: rootReducer 
});

export const persistor = persistStore(store);

export default store;
