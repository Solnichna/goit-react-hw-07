import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList'; 
import SearchBox from './searchBox/SearchBox';
import { Loading } from "./loading/Loading.jsx";
import { Error } from "./error/Error.jsx";
import { fetchContacts } from '../redux/contactsOps.js'; 

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loading />}
      {error && <Error />}
      <ContactList /> {}
    </div>
  );
}

export default App;
