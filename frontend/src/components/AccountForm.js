import React, { useState } from 'react';
import axios from 'axios';

const AccountForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/accounts/create', { customerId, accountNumber });
      alert('Account created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating account');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Customer ID"
        required
      />
      <input
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Account Number"
        required
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default AccountForm;
