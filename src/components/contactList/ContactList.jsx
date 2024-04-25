
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

import Contact from '../contact/Contact';

const ContactList = () => {
  const filteredContacts = useSelector(selectContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
