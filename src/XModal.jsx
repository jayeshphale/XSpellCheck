import React, { useState } from 'react';
import './XModal.css';

function XModal({ closeModal }) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    dob: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, phone, dob } = formData;

    if (!email || !phone || !dob) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const dobDate = new Date(dob);
    const today = new Date();

    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError('Invalid phone number');
      return;
    }

    if (!(dobDate instanceof Date) || isNaN(dobDate.getTime()) || dobDate >= today) {
      setError('Invalid date of birth');
      return;
    }

    alert('Form submitted successfully!');
    closeModal();
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <h2>Modal Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" onChange={handleChange} value={formData.email} />

          <label>Phone</label>
          <input type="text" name="phone" onChange={handleChange} value={formData.phone} />

          <label>Date of Birth</label>
          <input type="date" name="dob" onChange={handleChange} value={formData.dob} />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default XModal;
