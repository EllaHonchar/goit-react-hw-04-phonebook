import PropTypes from 'prop-types';
import s from '../Filter/Filter.module.scss';

export function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Find contacts by name</h3>
      <input
        className={s.input}
        placeholder="Input name..."
        type="onSubmit"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
