import React, { useRef } from 'react';
import './XModal.css';

function XModal({ closeModal }) {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content" ref={modalRef}>
        <button className="close-btn" onClick={closeModal}>&times;</button>
        <h2>User Information</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" required />

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" required />

          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default XModal;
