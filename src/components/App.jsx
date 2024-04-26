import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux'; 
import { store, persistor } from '../redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import SearchBox from './searchBox/SearchBox';
import { fetchContacts } from '../redux/contactsSlice'; 

const App = () => {
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); 

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
