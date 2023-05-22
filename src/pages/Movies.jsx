import { useState } from 'react';

const Movies = () => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <form>
      <label>
        <input name="filter" type="text" value={value} onChange={onChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Movies;
