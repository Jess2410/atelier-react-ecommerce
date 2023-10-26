import { useState, useEffect, useContext } from "react";
import { CategoryContext } from "../context/CategoryProvider";
import { CategoryProvider } from "../context/CategoryProvider";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { selectedCategoryContext, setSelectedCategoryContext } =
    useContext(CategoryContext);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [productsSelected, setProductsSelected] = useState([]);

  const getCategory = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const dataCategories = await res.json();
    setCategories(dataCategories);
  };
  // console.log("🚀 CAT CONTEXT SIDEBAR:", selectedCategoryContext);

  const getProductsByCategory = async (category) => {
    setCategorySelected(category);
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const dataProductsByCategory = await res.json();
    setProductsSelected(dataProductsByCategory.products);
    setSelectedCategoryContext(category);
  };
  //   console.log(
  //     "🚀 ~ file: Sidebar.tsx:18 ~ getProductsByCategory ~ dataProductsByCategory:",
  //     productsSelected
  //   );

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      {" "}
      <div id="sidebar" style={{ height: "100%" }}>
        <nav>
          <ul>
            <li>
              <a href={`/products`}>Products</a>
            </li>
            {window.location.pathname == "/cart" ? (
              <button>
                <Link to="/products/">Retour Accueil</Link>
              </button>
            ) : (
              categories.map((category) => (
                <button
                  key={category}
                  style={{ margin: 5 }}
                  onClick={() => getProductsByCategory(category)}
                >
                  {category}
                </button>
              ))
            )}
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </div>
  );
};

export default Sidebar;
