const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const Account = require('../models/Account');

// Create a new customer
router.post('/create', async (req, res) => {
  const { name, email } = req.body;

  try {
    const customer = new Customer({ name, email });
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
