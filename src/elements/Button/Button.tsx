import "./Button.css";

interface ButtonProps {
  icon: string;
  message: string;
}

export default function Button(props: ButtonProps) {
  const { icon, message } = props;
  return (
    <button className="add-to-cart-btn">
      <div className="btn-content-wrapper">
        <img src={icon} className="cart-icon" />
        <span className="button-message">{message}</span>
      </div>
    </button>
  );
}
