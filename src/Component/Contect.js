// Install necessary libraries
// npm install @mui/material @emotion/react @emotion/styled framer-motion

// ContactForm.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FormContainer = motion(Container).withComponent('form');

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add logic for form submission
  };

  return (
    <FormContainer
      component="form"
      maxWidth="sm"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Message"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </FormContainer>
  );
};

export default ContactForm;
