import React, { useState } from 'react';
import './XModal.css';

function XModal({ closeModal }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone, dob } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const dobDate = new Date(dob);
    const today = new Date();

    if (!emailRegex.test(email)) {
      alert('Invalid email');
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert('Invalid phone number');
      return;
    }

    if (!(dobDate instanceof Date) || isNaN(dobDate.getTime()) || dobDate >= today) {
      alert('Invalid date of birth');
      return;
    }

    alert('Form submitted successfully!');
    closeModal();
  };

  // ✅ Fixes modal backdrop click issue
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <h2>Modal Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={handleChange} value={formData.username} />

          <label>Email</label>
          <input type="text" name="email" onChange={handleChange} value={formData.email} />

          <label>Phone</label>
          <input type="text" name="phone" onChange={handleChange} value={formData.phone} />

          <label>Date of Birth</label>
          <input type="date" name="dob" onChange={handleChange} value={formData.dob} />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default XModal;
