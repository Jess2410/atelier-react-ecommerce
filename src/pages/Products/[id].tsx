import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const getProductById = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };
  console.log("🚀 ~ file: [id].tsx:10 ~ getProductById ~ product:", product);

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <>
      <Sidebar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 1200,
        }}
      >
        <div className="product-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <div className="product-details">
            <p className="product-price">${product.price}</p>
            <p className="product-rating">Rating: {product.rating}</p>
          </div>
          <div>
            {product?.images &&
              product?.images.map((image) => (
                <img
                  style={{ height: 50, padding: 3 }}
                  src={image}
                  alt={image}
                />
              ))}
          </div>
          <button
            className="add-to-cart-button"
            onClick={() => navigate("/products")}
          >
            Return
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
