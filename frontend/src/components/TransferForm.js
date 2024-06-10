import React, { useState } from 'react';
import axios from 'axios';

const TransferForm = () => {
  const [fromAccountNumber, setFromAccountNumber] = useState('');
  const [toAccountNumber, setToAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/accounts/transfer', { fromAccountNumber, toAccountNumber, amount });
      alert('Transfer successful');
    } catch (error) {
      console.error(error);
      alert('Error making transfer');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fromAccountNumber}
        onChange={(e) => setFromAccountNumber(e.target.value)}
        placeholder="From Account Number"
        required
      />
      <input
        type="text"
        value={toAccountNumber}
        onChange={(e) => setToAccountNumber(e.target.value)}
        placeholder="To Account Number"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Transfer</button>
    </form>
  );
};

export default TransferForm;
