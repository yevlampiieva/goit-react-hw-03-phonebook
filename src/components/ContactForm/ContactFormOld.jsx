import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactFormContainer,
  ContactListLabel,
  ContactListInput,
  AddContactBtn,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactFormContainer onSubmit={this.handleSubmit}>
        <ContactListLabel htmlFor="contact__name">Name</ContactListLabel>
        <ContactListInput
          type="text"
          name="name"
          id="contact__name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <ContactListLabel htmlFor="contact__number">Number</ContactListLabel>
        <ContactListInput
          type="tel"
          name="number"
          id="contact__number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </ContactFormContainer>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
