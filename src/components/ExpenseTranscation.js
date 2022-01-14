import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from '../context/GlobalState';

const ExpenseTransaction = ({expenseTransaction}) =>{
    const {deleteTransaction} = useContext(GlobalContext)
    return(
        <li className = "transaction">
        <span className = "transaction-text">
            {expenseTransaction.expenseText}
        </span>
        <span className = "transaction-amt">
            ₹{expenseTransaction.expenseAmount}
        </span>
        <button className = "delete-btn"
        onClick = {() => deleteTransaction(expenseTransaction.id)}>
        <FontAwesomeIcon icon = { faTrash } />
        </button>
        </li>
    )
}

export default ExpenseTransaction;