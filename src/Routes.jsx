import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Components/Home";
import Products from "./Pages/Products";
import NewProducts from "./Pages/NewProducts";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "products",
        element: <Products />,
        loader: async () => fetch("https://fakestoreapi.com/products")
      },
      {
        path: "new-products",
        element: <NewProducts />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
