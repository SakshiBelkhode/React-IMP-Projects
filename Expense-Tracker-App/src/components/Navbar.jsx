import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Navbar = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <div>
      <h2>💰 Expense Tracker</h2>
      <p>Total Transactions: {transactions.length}</p>
    </div>
  );
};

export default Navbar;