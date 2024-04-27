import { useSelector } from "react-redux";
import Contact from "../contact/Contact.jsx";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="contact-list">
      {contacts.length > 0 ? (
        contacts.map((contact) => <Contact key={contact.id} contact={contact} />)
      ) : (
        <p>You dont have any contacts</p>
      )}
    </ul>
  );
};

export default ContactList;
