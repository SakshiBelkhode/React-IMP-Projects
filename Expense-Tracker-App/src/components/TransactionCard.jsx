import { Link } from "react-router-dom";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const TransactionCard = ({ tx }) => {
  const { deleteTransaction } = useContext(ExpenseContext);

  return (
    <div>
      <h4>{tx.text}</h4>
      <p>₹{tx.amount}</p>

      <Link to={`/tx/${tx.id}`}>Details</Link>

      <button onClick={() => deleteTransaction(tx.id)}>
        Delete
      </button>
    </div>
  );
};

export default TransactionCard;