import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Details = () => {
  const { id } = useParams();
  const { transactions } = useContext(ExpenseContext);

  const tx = transactions.find((t) => t.id === Number(id));

  if (!tx) return <p>Transaction not found</p>;

  return (
    <div>
      <h2>{tx.text}</h2>
      <p>Amount: ₹{tx.amount}</p>
    </div>
  );
};

export default Details;