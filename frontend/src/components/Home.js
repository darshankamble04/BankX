import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bank Admin Panel</h1>
      <div style={styles.links}>
        <Link to="/create-customer" style={styles.link}>Create Customer</Link>
        <Link to="/create-account" style={styles.link}>Create Account</Link>
        <Link to="/deposit" style={styles.link}>Deposit Money</Link>
        <Link to="/withdraw" style={styles.link}>Withdraw Money</Link>
        <Link to="/transfer" style={styles.link}>Transfer Money</Link>
        <Link to="/transactions" style={styles.link}>Recent Transactions</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    margin: '0.5rem 0',
    padding: '0.75rem 1.5rem',
    fontSize: '1.25rem',
    textDecoration: 'none',
    color: '#007bff',
    border: '1px solid #007bff',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  },
};

export default Home;
