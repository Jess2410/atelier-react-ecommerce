import { useEffect, useState, useContext } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import { CategoryContext } from "../../context/CategoryProvider";

const Products = () => {
  const { selectedCategoryContext, setSelectedCategoryContext } =
    useContext(CategoryContext);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const dataProducts = await res.json();
    setProducts(dataProducts.products);
  };

  const getProductsByCategory = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${selectedCategoryContext}`
    );
    const dataProducts = await res.json();
    setProducts(dataProducts.products);
  };
  console.log("🚀 CAT CONTEXT PRODUCTS:", selectedCategoryContext);
  // console.log(
  //   "🚀 ~ file: Products.tsx:6 ~ getProducts ~ dataProducts:",
  //   products
  // );

  useEffect(() => {
    getProductsByCategory();
  }, [selectedCategoryContext]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ul
        style={{
          display: "flex",
          // width: "100vw",
          justifyContent: "center",
          maxWidth: 1500,
          flexWrap: "wrap",
        }}
      >
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
