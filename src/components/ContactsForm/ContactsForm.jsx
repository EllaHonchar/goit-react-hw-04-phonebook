import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from '../ContactsForm/FormStyle.module.scss';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          placeholder="Name..."
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          className={s.input}
          placeholder="Number..."
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};
