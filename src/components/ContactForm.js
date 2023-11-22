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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is for the 'details' field
    if (name === 'details') {
      // Check if the length exceeds the limit (200 characters)
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

  // Regular expression for a simple email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, details } = formData;

    // Validate email before submission
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // This is to process the form submission - can add more logic here if needed
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCharCount(0); // Reset character count
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleInputChange} />
        <label>Email</label>
        <input type='email' name='email' value={formData.email} onChange={handleInputChange} />
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
