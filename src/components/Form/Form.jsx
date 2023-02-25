import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import { useState } from 'react';
//? redux
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlise';

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const stateName = e.currentTarget.name;
    const stateValue = e.currentTarget.value;

    switch (stateName) {
      case 'name':
        setName(stateValue);
        break;

      case 'number':
        setNumber(stateValue);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact(name, number));

    // onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form
        autoComplete="off"
        className="Phonebook__form-container"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Name <br />
          <input
            type="text"
            name="name"
            className="Phonebook__form-input"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="number">
          Number <br />
          <input
            type="tel"
            name="number"
            className="Phonebook__form-input"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="Phonebook__form-submit-button">
          Add contact
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
};
