// src/App.js
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Dropdown from './components/Dropdown';

const App = () => {
  const [response, setResponse] = useState(null);

  return (
    <div>
      <h1>21BCB0075</h1> {/* Replace with your roll number */}
      <TextInput onResponse={setResponse} />
      {response && <Dropdown data={response} />}
    </div>
  );
};

export default App;
