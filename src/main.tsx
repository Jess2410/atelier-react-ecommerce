import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
import Products from "./pages/Products/Products";
import ProductScreen from "./pages/Products/[id]";
import { CategoryProvider } from "./context/CategoryProvider";
import Layout from "./pages/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CartViewer from "./pages/CardViewer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "products/:id",
    element: (
      <Layout>
        <ProductScreen />
      </Layout>
    ),
  },
  {
    path: "products",
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
  {
    path: "cart",
    element: (
      <Layout redirect>
        <CartViewer />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CategoryProvider>
      <RouterProvider router={router} />
    </CategoryProvider>
  </Provider>
);
