import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#222",
        color: "white",
      }}
    >
      <h2>🛍 Shopping Cart</h2>

      <div>
        <p>Items: {cart.length}</p>
        <p>Total: ₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Navbar;