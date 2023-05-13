import "./Image.css";

interface imageProps {
  src: string;
  alt: string;
}

export default function Image(props: imageProps) {
  const { src, alt } = props;
  return (
    <div className="product-image-wrapper">
      <img src={src} alt={alt} className="product-image" />
    </div>
  );
}
