import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from '../context/GlobalState';

const IncomeTransaction = ({incomeTransaction}) =>{

    const {deleteTransaction} = useContext(GlobalContext)

    return(
        <li className = "transaction">
        <span className = "transaction-text">
            {incomeTransaction.incomeText}
        </span>
        <span className = "transaction-amt">
            ₹{incomeTransaction.incomeAmount}
        </span>
        <button className = "delete-btn" 
        onClick = {() => deleteTransaction(incomeTransaction.id)}>
        <FontAwesomeIcon icon = { faTrash } />
        </button>
        </li>
    )
}

export default IncomeTransaction;