import React, { useState } from "react";
import XModal from "./XModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div id="root">
      <h1>Welcome to the Modal App</h1>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <XModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
