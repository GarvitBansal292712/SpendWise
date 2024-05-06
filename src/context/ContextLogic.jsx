import React from "react";
import { TransactionContext } from "./TransactionContext";
import { useState,useEffect } from "react";

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : [];
  });

useEffect(() => {
  localStorage.setItem("transactions", JSON.stringify(transactions))


}, [transactions])


  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
