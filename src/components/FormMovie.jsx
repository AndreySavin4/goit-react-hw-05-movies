import PropTypes from 'prop-types';
import { useState } from 'react';
const FormMovie = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const inputChange = e => {
    const { value } = e.currentTarget;
    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') {
      alert('Search can not be empty');
      return;
    }
    onSubmit(input);
    resetForm();
  };

  const resetForm = () => {
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        placeholder="Search films"
        type="text"
        onChange={inputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormMovie;

FormMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};
