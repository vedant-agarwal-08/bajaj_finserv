// src/components/TextInput.js
import React, { useState } from 'react';
import axios from 'axios';

const TextInput = ({ onResponse }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Validate JSON
      JSON.parse(input);

      // Call the API
      const response = await axios.post('https://bajajfinserv-production.up.railway.app/bfhl', JSON.parse(input));
      onResponse(response.data);
      setError('');
    } catch (err) {
      setError('Invalid JSON format or API error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="10"
          cols="50"
          placeholder='Enter JSON here, e.g., { "data": ["A", "C", "z"] }'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TextInput;
