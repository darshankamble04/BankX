import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';
import AccountForm from './components/AccountForm';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm22';
import TransferForm from './components/TransferForm';
import RecentTransactions from './components/RecentTransactions';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-customer" element={<CustomerForm />} />
        <Route path="/create-account" element={<AccountForm />} />
        <Route path="/deposit" element={<DepositForm />} />
        <Route path="/withdraw" element={<WithdrawForm />} />
        <Route path="/transfer" element={<TransferForm />} />
        <Route path="/transactions" element={<RecentTransactions />} />
      </Routes>
    </Router>
  );
}

export default App;
