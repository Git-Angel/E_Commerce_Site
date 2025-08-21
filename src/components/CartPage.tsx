import { useCart } from "../CartContext";
import "./CartPage.css";

function CartPage() {
  const { cart } = useCart();
  return (
 <div style={{ padding: "2rem" }}>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width={50} />
              {item.name} - ${item.price} × {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
