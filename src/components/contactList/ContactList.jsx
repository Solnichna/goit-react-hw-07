import Contact from "../contact/Contact.jsx";
import { selectContacts } from "../../redux/contactsSlice.js";


export const ContactList = ({ items }) => {


  return (
    <ul className="contact-list">
      {items.length > 0 ? (
        items.map((contact) => <Contact key={contact.id} contact={contact} />)
      ) : (
        <p>You don`t have a contacts</p>
      )}
    </ul>
  );
};