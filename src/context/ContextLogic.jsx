import React from "react";
import { TransactionContext } from "./TransactionContext";
import { useState } from "react";



export const TransactionProvider = ({children}) =>{
const [transactions, setTransactions] = useState([])


const addTransaction = (transaction)=>{
    setTransactions([...transactions, transaction])
}

return(
    <TransactionContext.Provider value={{transactions,addTransaction}}>
        {children}
    </TransactionContext.Provider>
)
}

