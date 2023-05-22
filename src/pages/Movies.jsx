import { useState } from 'react';

export const Movies = () => {
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
