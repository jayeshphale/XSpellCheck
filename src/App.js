import React, { useState } from 'react';
import XModal from './XModal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App" id="root">
      {!isOpen && <button onClick={() => setIsOpen(true)}>Open Form</button>}
      {isOpen && <XModal closeModal={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
