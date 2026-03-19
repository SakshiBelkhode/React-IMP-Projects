import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};