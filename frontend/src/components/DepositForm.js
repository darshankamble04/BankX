import React, { useState } from 'react';
import axios from 'axios';

const DepositForm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/accounts/deposit', { accountNumber, amount });
      alert('Deposit successful');
    } catch (error) {
      console.error(error);
      alert('Error making deposit');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Account Number"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
