import PropTypes from 'prop-types';
import {
  Container,
  Contact,
  ContactInfo,
  DeleteBtn,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Container>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id}>
        <ContactInfo>
          {name}: {number}
        </ContactInfo>
        <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteBtn>
      </Contact>
    ))}
  </Container>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};


