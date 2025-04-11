import React, { useState } from "react";
import XModal from "./XModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div id="root">
      <h1>Welcome to the Modal App</h1>
      {/* FIXED: Changed button text to "Open Form" */}
      <button onClick={() => setModalOpen(true)}>Open Form</button>
      <XModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
