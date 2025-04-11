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
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    // Validations
    if (!username || !email || !phone || !dob) {
      alert('All fields are required.');
      return;
    }

    if (!email.includes('@') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Invalid email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }

    const enteredDate = new Date(dob);
    const today = new Date();
    if (enteredDate > today) {
      alert('Date of birth cannot be in the future.');
      return;
    }

    alert('Form submitted successfully!');
    setFormData({ username: '', email: '', phone: '', dob: '' });
    closeModal();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal')) {
        closeModal();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [closeModal]);

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>×</button>
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
