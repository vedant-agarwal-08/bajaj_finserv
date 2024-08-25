// src/components/Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ data }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedOptions(value);
  };

  const renderData = () => {
    let result = {};
    if (selectedOptions.includes('Alphabets')) {
      result.alphabets = data.alphabets;
    }
    if (selectedOptions.includes('Numbers')) {
      result.numbers = data.numbers;
    }
    if (selectedOptions.includes('Highest lowercase alphabet')) {
      result.highest_lowercase_alphabet = data.highest_lowercase_alphabet;
    }
    return result;
  };

  return (
    <div>
      <select multiple={true} onChange={handleChange}>
        <option value="Alphabets">Alphabets</option>
        <option value="Numbers">Numbers</option>
        <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
      </select>
      <pre>{JSON.stringify(renderData(), null, 2)}</pre>
    </div>
  );
};

export default Dropdown;
