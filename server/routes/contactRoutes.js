// server/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Mongoose model for Contact
const nodemailer = require('nodemailer');

// It's generally more efficient to create the transporter once, outside the route handler,
// if its configuration doesn't change per request.
const transporter = nodemailer.createTransport({
  service: 'gmail', // Consider using a dedicated SMTP service for production (e.g., SendGrid, Mailgun)
  auth: {
    user: process.env.EMAIL_USER, // Your email address from .env
    pass: process.env.EMAIL_PASS  // Your email password or app-specific password from .env
  }
});

// POST /api/contact - Handle contact form submissions
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // 1. Input Validation: Check if required fields are present
  // (You can add more sophisticated validation like email format checks)
  if (!name || !email || !message || !phone) { // Added phone as required based on your schema
    return res.status(400).json({ message: 'All fields (Name, Email, Phone, Message) are required.' });
  }

  try {
    // 2. Save to database
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    console.log('Contact form data saved to MongoDB:', newContact);

    // 3. Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@comfortcooling.na', // Replace with the actual email address where you want to receive submissions
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully!');
    } catch (emailError) {
      // Log email error, but don't necessarily fail the entire request if DB save was successful
      console.error('Error sending email notification:', emailError);
      // You might choose to still send a 201 if the DB save was the primary goal
      // or send a 202 (Accepted) with a warning. For now, we'll let the outer catch handle it.
    }
    
    // Respond after both DB save and email attempt (even if email failed silently)
    res.status(201).json({ message: 'Contact form submitted successfully!' });

  } catch (error) {
    // This catch block handles errors from DB save or initial email setup/send failure
    console.error('Error processing contact form submission:', error);
    // More specific error messages can be added here based on 'error.code' or 'error.name'
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
