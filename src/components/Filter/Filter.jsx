import PropTypes from 'prop-types';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export function Filter({ onFilter, state }) {
  return (
    <Label>
      <span>Find contacts by name:</span>
      <Input
        type="text"
        name="filter"
        value={state}
        onChange={onFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </Label>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
  state: PropTypes.string,
};