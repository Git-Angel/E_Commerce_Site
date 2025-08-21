import { useState } from "react";
import "./ProductPageBody.css";
import product1 from "../image-product-1.jpg";
import product2 from "../image-product-2.jpg";
import product3 from "../image-product-3.jpg";
import product4 from "../image-product-4.jpg";

const ProductPage: React.FC = () => {
  const images = [product1, product2, product3, product4];
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : q));

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) of "Fall Limited Edition Sneakers" to cart!`);
    
  };

  return (
    <main className="product-layout" role="main">
      {/* LEFT: Image gallery */}
      <section className="gallery" aria-label="Product gallery">
        <div className="main-image">
          <img src={images[selectedIndex]} alt={`Product image ${selectedIndex + 1}`} />
        </div>

        <div className="thumbs" role="list">
          {images.map((src, i) => (
            <button
              key={i}
              role="listitem"
              className={`thumb ${selectedIndex === i ? "active" : ""}`}
              onClick={() => setSelectedIndex(i)}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={src} alt={`Thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      </section>

      {/* RIGHT: Details / price / actions */}
      <section className="details" aria-label="Product details">
        <p className="brand">Sneaker Company</p>
        <h1 className="title">Fall Limited Edition Sneakers</h1>

        <p className="desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything the
          weather can offer.
        </p>

        <div className="pricing">
          <div className="price-line">
            <span className="current">$125.00</span>
            <span className="badge">50%</span>
          </div>
          <span className="old">$250.00</span>
        </div>

        <div className="actions">
          <div className="qty">
            <button
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
              type="button"
            >
              -
            </button>
            <span aria-live="polite" aria-atomic="true">{quantity}</span>
            <button
              onClick={increaseQuantity}
              aria-label="Increase quantity"
              type="button"
            >
              +
            </button>
          </div>

          <button className="add" type="button" onClick={handleAddToCart}>
            🛒 Add to cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
