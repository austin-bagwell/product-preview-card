import "./Copy.css";

export default function Copy() {
  return (
    <div className="copy-wrapper">
      <h2 className="copy-product-category">Perfume</h2>
      <h1 className="copy-product-name">Gabrielle Essence Eau de Parfum</h1>
      <p className="copy-product-description">
        A floral, solar, and voluptuous interpretation by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <p>
        <span className="copy-discounted-price">$149.99</span>
        <span className="copy-base-price">$169.99</span>
      </p>
      <button>Add to Cart</button>
    </div>
  );
}
