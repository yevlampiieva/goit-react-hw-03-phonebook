import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ContactFormContainer,
  ContactListLabel,
  ContactListInput,
  StyledError,
  AddContactBtn,
} from './ContactForm.styled';

const nameRules = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRules =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().required('This field is required').matches(nameRules, {
    message:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  }),
  number: yup.string().required('This field is required').matches(numberRules, {
    message:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  }),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <ContactFormContainer autoComplete="off">
        <ContactListLabel>
          Name
          <ContactListInput type="text" name="name" />
          <StyledError name="name" component="div" />
        </ContactListLabel>

        <ContactListLabel>
          Number
          <ContactListInput type="tel" name="number" />
          <StyledError name="number" component="div" />
        </ContactListLabel>

        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </ContactFormContainer>
    </Formik>
  );
};
