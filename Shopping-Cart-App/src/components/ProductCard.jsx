import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const {
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
    cart,
  } = useContext(CartContext);

  const item = cart.find((i) => i.id === product.id);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <img src={product.image} width="100" />
      <h4>{product.title.slice(0, 20)}...</h4>
      <p>₹{product.price}</p>

      {!item ? (
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      ) : (
        <div>
          <button onClick={() => decreaseQty(product.id)}>
            -
          </button>

          <span>{item.qty}</span>

          <button onClick={() => increaseQty(product.id)}>
            +
          </button>

          <br />

          <button onClick={() => removeItem(product.id)}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;