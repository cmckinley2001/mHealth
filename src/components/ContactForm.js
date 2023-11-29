import React, { useState } from 'react';
import './ContactFormStyles.css';

const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    details: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [charCount, setCharCount] = useState(0);
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'details') {
      if (value.length <= 200) {
        setCharCount(value.length);
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      email: value
    });

    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, details } = formData;

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCharCount(0);
    setEmailError('');
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleInputChange} />
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <label>Subject</label>
        <input type='text' name='subject' value={formData.subject} onChange={handleInputChange} />
        <label>
          Details <span className="char-count">{charCount}/200</span>
        </label>
        <textarea
          rows='6'
          name='details'
          placeholder='Type a short message here'
          value={formData.details}
          onChange={handleInputChange}
        />
        <button className='btn' type='button' onClick={handleReset}>
          Reset
        </button>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
