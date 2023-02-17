import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import s from '../ContactList/ContactStyle.module.scss';

export function ContactList({ contacts, onDeleteContact }) {
  console.log(contacts);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          onDeleteContact={onDeleteContact}
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
