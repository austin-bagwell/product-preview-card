import "./Image.css";

interface imageProps {
  src: string;
  alt: string;
  className: string;
}

export default function Image(props: imageProps) {
  const { src, alt, className } = props;
  return (
    <div className="product-image-wrapper">
      <img src={src} alt={alt} className={className} />
    </div>
  );
}
