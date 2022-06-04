import { useState } from 'react';
import { ContactForm, AddButton, FormLabel, FormInput } from './FormStyle';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function Form({ onSubmit }) {
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleChangeName = e => {
    const { value } = e.currentTarget;

    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.currentTarget;

    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const state = {
      name,
      number,
    };
    console.log(state);
    onSubmit(state);
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <FormLabel htmlFor={inputNameId}>
        Name
        <FormInput
          value={name}
          onChange={handleChangeName}
          id={inputNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor={inputNumberId}>
        Number
        <FormInput
          value={number}
          onChange={handleChangeNumber}
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

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
