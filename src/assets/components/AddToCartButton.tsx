
import React from "react";


interface AddToCartButtonProps {
  quantity: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ quantity }) => {
  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart ✅`);
  };

  return (
    <button className="add-to-cart" onClick={handleAddToCart}>
      🛒 Add to Cart
    </button>
  );
};

export default AddToCartButton;

