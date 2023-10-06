import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
import Products from "./pages/Products/Products";
import ProductScreen from "./pages/Products/[id]";
import { CategoryProvider } from "./context/CategoryProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products/:id",
    element: <ProductScreen />,
  },
  {
    path: "products",
    element: <Products />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CategoryProvider>
    <RouterProvider router={router} />
  </CategoryProvider>
);
