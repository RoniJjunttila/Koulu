import React, { useState } from 'react';

const SetName = ({ onSendName }) => {
  const [name, setName] = useState('');

  const handleNameChange = () => {
    if (name.trim() !== '') {
      onSendName(name);
      setName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleNameChange}>Change nick</button>
    </div>
  );
};

export default SetName;