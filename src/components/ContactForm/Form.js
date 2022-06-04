import React, { Component } from 'react';
import { ContactForm, AddButton, FormLabel, FormInput } from './FormStyle';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  inputNameId = nanoid();
  inputNumberId = nanoid();
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <FormLabel htmlFor={this.inputNameId}>
          Name
          <FormInput
            value={name}
            onChange={this.handleChange}
            id={this.inputNameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor={this.inputNumberId}>
          Number
          <FormInput
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <div>
          <AddButton type="submit">Add contact</AddButton>
        </div>
      </ContactForm>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
