
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice'; 

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters'),
    number: Yup.string()
      .required('Number is required')
  });

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };
    dispatch(addContact(newContact)); // Füge den Kontakt zum Redux-Store hinzu
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="contact-form">
          <div>
            <p>Name</p>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <p>Number</p>
            <Field type="text" name="number" placeholder="Number" />
            <ErrorMessage name="number" component="div" className="error-form"/>
          </div>
          <button type="submit" className="button-add-contact" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Contact'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;


