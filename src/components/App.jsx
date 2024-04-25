import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import SearchBox from './searchBox/SearchBox';
import axios from 'axios'; 

const App = () => {
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/contacts'); 
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts(); 
  }, []); 

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
