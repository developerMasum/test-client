import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Products from "./Components/Products/Products.jsx";
import Shop from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import CategoryDetails from "./Components/Home/CategoryDetails";
import ProductDetails from "./Components/Home/ProductDetails";
import AddProduct from "./Components/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Products",
        element: <Products></Products>,
      },
      {
        path: "/my-cart",
        element: <Cart></Cart>,
      },
      {
        path: "/add-product",
        element: <AddProduct/>,
      },
      {
        path: "/About",
        element: <Shop></Shop>,
      },
      {
        path: "/category/:id",
        element: <CategoryDetails/>,
      
         
      },
      {
        path: "/details/:id",
        element: <ProductDetails/>,
        loader: ({ params }) =>
        fetch(`http://localhost:5000/fulldetails/${params.id}`),
      
         
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>
);
