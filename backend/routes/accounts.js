const express = require('express');
const router = express.Router();
const Account = require('../models/Account');
const Customer = require('../models/Customer');
const Transaction = require('../models/Transactions');

// Create a new account for a customer
router.post('/create', async (req, res) => {
  const { customerId, accountNumber } = req.body;

  try {
    const account = new Account({ accountNumber });
    await account.save();

    const customer = await Customer.findById(customerId);
    customer.accounts.push(account);
    await customer.save();

    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Deposit money into an account
router.post('/deposit', async (req, res) => {
  const { accountNumber, amount } = req.body;

  try {
    const account = await Account.findOne({ accountNumber });
    account.balance += amount;

    const transaction = new Transaction({
      type: 'deposit',
      amount,
      toAccount: account._id,
    });
    await transaction.save();

    account.transactions.push(transaction);
    await account.save();

    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Withdraw money from an account
router.post('/withdraw', async (req, res) => {
  const { accountNumber, amount } = req.body;

  try {
    const account = await Account.findOne({ accountNumber });
    if (account.balance < amount) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }
    account.balance -= amount;

    const transaction = new Transaction({
      type: 'withdraw',
      amount,
      fromAccount: account._id,
    });
    await transaction.save();

    account.transactions.push(transaction);
    await account.save();

    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Transfer money between accounts
router.post('/transfer', async (req, res) => {
  const { fromAccountNumber, toAccountNumber, amount } = req.body;

  try {
    const fromAccount = await Account.findOne({ fromAccountNumber });
    const toAccount = await Account.findOne({ toAccountNumber });

    if (fromAccount.balance < amount) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }

    fromAccount.balance -= amount;
    toAccount.balance += amount;

    const transaction = new Transaction({
      type: 'transfer',
      amount,
      fromAccount: fromAccount._id,
      toAccount: toAccount._id,
    });
    await transaction.save();

    fromAccount.transactions.push(transaction);
    toAccount.transactions.push(transaction);
    await fromAccount.save();
    await toAccount.save();

    res.status(200).json({ fromAccount, toAccount });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get recent transactions for an account
router.get('/transactions/:accountNumber', async (req, res) => {
  const { accountNumber } = req.params;

  try {
    const account = await Account.findOne({ accountNumber }).populate({
      path: 'transactions',
      options: { limit: 10, sort: { date: -1 } },
    });

    res.status(200).json(account.transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
