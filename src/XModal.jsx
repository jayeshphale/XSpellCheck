import React, { useState, useEffect } from 'react';
import './App.css';

const XModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    // Validation
    if (!username || !email || !phone || !dob) {
      alert('All fields are required.');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const enteredDate = new Date(dob);
    const currentDate = new Date();
    if (enteredDate > currentDate) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    // Reset form and close modal
    setFormData({ username: '', email: '', phone: '', dob: '' });
    closeModal();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.className === 'modal') {
        closeModal();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [closeModal]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input id="username" value={formData.username} onChange={handleChange} type="text" />

          <label htmlFor="email">Email Address:</label>
          <input id="email" value={formData.email} onChange={handleChange} type="email" />

          <label htmlFor="phone">Phone Number:</label>
          <input id="phone" value={formData.phone} onChange={handleChange} type="text" />

          <label htmlFor="dob">Date of Birth:</label>
          <input id="dob" value={formData.dob} onChange={handleChange} type="date" />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default XModal;
