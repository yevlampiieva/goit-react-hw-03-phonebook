import PropTypes from 'prop-types';
import { Container, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <Container>
    <FilterLabel htmlFor="search__contact">Find contacts by name </FilterLabel>
    <FilterInput
      type="text"
      id="search__contact"
      value={value}
      onChange={onChange}
    />
  </Container>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
