import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecentTransactions = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/accounts/transactions/${accountNumber}`);
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching transactions');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Account Number"
        required
      />
      <button onClick={handleSearch}>Search Transactions</button>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.type} of ${transaction.amount} on {new Date(transaction.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
