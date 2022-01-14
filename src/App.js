import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Transaction from './components/AddTransaction';

import IncomeList from './components/IncomesList';
import ExpenseList from './components/ExpensesList';

import { GlobalContextProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalContextProvider>
    <div className = "container" >
      <div className = "wrapper" >
        <Header />
        <Balance />
        <Transaction />
        <IncomeList />
        <ExpenseList />
        </div>    
    </div>
    </GlobalContextProvider>
  );
}

export default App;
