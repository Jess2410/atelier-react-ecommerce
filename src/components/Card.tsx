import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";
import { Button } from "@mui/material";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <article>
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
          <button onClick={() => navigate(`/products/${product.id}`)}>
            Voir plus
          </button>
          <Button
            variant="contained"
            onClick={() => dispatch(addCart(product))}
          >
            Add
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Card;
