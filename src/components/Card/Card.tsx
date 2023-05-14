import "./Card.css";
import Image from "../../elements/Image/Image";
import desktopImg from "../../assets/images/image-product-desktop.jpg";
import Copy from "../../elements/Copy/Copy";

export default function Card() {
  return (
    <article className="summary-card">
      <Image
        className="product-image"
        src={desktopImg}
        alt="bottle of Chanel's Gabrielle perfume"
      />
      <Copy />
    </article>
  );
}
