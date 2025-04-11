import React from "react";
import "./XModal.css";

function XModal({ isOpen, onClose }) {
  const handleOutsideClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const dob = form.dob.value;

    // Log submitted data
    console.log({ email, phone, dob });

    onClose(); // close modal after submit
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-overlay" id="modalOverlay" onClick={handleOutsideClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />

          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" required />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default XModal;
