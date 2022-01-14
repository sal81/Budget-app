import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const{incomeTransactions, expenseTransactions} = useContext(GlobalContext);

    const incomeAmounts = incomeTransactions.map(
        incomeTransaction => incomeTransaction.incomeAmount
    )
    const expenseAmounts = expenseTransactions.map(
        expenseTransaction => expenseTransaction.expenseAmount
    )

    const totalIncome = incomeAmounts.
    reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const totalExpense = expenseAmounts.
    reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    return (
        <div className = "balance">
            <h2>Your Balance</h2>
            <h4>₹{totalIncome-totalExpense}</h4>
{/* //  {totalIncome-totalExpenses} */}
            <div className ="inc-exp">
                <div className = "plus">
                    <h3>Income</h3>
                    <p>+₹{totalIncome}</p>
                </div>

                <div className = "minus">
                    <h3>Expense</h3>
                    <p>-₹{totalExpense}</p>
                </div>
            </div>

        </div>
    )
}

export default Balance
