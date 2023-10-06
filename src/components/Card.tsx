import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type CardProduct = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};
const Card = ({ product }: { product: CardProduct }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onOpen = () => {
    setOpen(!open);
  };
  return (
    <article onClick={() => navigate(`/products/${product.id}`)}>
      <div className="article-wrapper">
        <figure>
          <img src={product.images[0]} alt="" />
        </figure>
        <h3
          style={{
            padding: "0 10px",
          }}
        >
          {product.title}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px",
          }}
        >
          {" "}
          <h3>{product.price.toFixed(2)} €</h3>
          <h4>{product.brand}</h4>
        </div>

        <div
          className="button-wrapper"
          style={{
            padding: "10px",
          }}
        >
          <button onClick={onOpen}>Voir plus</button>
        </div>
        {open && (
          <div>
            <ul className="ingredients"></ul>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
