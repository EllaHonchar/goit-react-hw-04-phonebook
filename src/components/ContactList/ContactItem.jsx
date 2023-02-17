import PropTypes from 'prop-types';
import s from '../ContactList/ContactStyle.module.scss';

export function ContactItem({ name, number, onDeleteContact, id }) {
  return (
    <li className={s.item}>
      <strong>{name}</strong>
      <span className={s.number}>{number}</span>
      <button
        className={s.btn}
        type="button"
        id={id}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
