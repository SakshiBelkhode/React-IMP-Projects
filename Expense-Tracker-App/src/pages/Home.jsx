import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import TransactionCard from "../components/TransactionCard";

const Home = () => {
  const { transactions, addTransaction } =
    useContext(ExpenseContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    if (!text || !amount) return;

    addTransaction({
      id: Date.now(),
      text,
      amount: Number(amount),
    });

    setText("");
    setAmount("");
  };

  const balance = transactions.reduce(
    (acc, tx) => acc + tx.amount,
    0
  );

  return (
    <div>
      <h3>Balance: ₹{balance}</h3>

      <input
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (+ income, - expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <h3>Transactions</h3>

      {transactions.map((tx) => (
        <TransactionCard key={tx.id} tx={tx} />
      ))}
    </div>
  );
};

export default Home;