import "./Copy.css";
import Button from "../Button/Button";
import cartIcon from "../../assets/images/icon-cart.svg";

export default function Copy() {
  return (
    <div className="copy-wrapper">
      <h2 className="copy-product-category">PERFUME</h2>
      <h1 className="copy-product-name">Gabrielle Essence Eau De Parfum</h1>
      <p className="copy-product-description">
        A floral, solar, and voluptuous interpretation by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <p className="copy-price-wrapper">
        <span className="copy-discounted-price">$149.99</span>
        <span className="copy-base-price">$169.99</span>
      </p>
      <Button icon={cartIcon} message="Add to Cart" />
    </div>
  );
}
