import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'; 

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className="contact">
      <p>Name: {contact.name}</p>
      <p>Number: {contact.number}</p>
      <button className="contact-delete" onClick={handleClick}>Delete</button>
    </li>
  );
};

export default Contact;
