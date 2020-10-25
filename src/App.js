import React, {useState} from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddExpense from './components/AddExpense'
import AddTransaction from './components/AddTransaction'

import { GlobalProvider } from './Context/GlobalState'

import './App.css';

function App() {
  const [add, setAdd] = useState(false)

  return (

    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        {add ? <button className="btn" onClick={() => setAdd(false)}>Transaction</button> : <button onClick={() => setAdd(true)} className="btn">Expense</button>  }
        {add ? <AddExpense/> : <AddTransaction/> }
      </div>
    </GlobalProvider>
  );
}

export default App;
