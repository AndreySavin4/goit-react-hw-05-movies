import PropTypes from 'prop-types';
const FormMovie = ({ onChange }) => {
  return (
    <form>
      <input name="query" type="text" />
      <button type="submit" onChange={onChange}>
        Search
      </button>
    </form>
  );
};

export default FormMovie;

FormMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};
