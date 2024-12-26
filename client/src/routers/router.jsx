import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import Login from "../components/Login"
import Register from "../components/Register";
import CartPage from "../components/CartPage";
import CheckOutPage from "../components/CheckOutPage";
import SingleBook from "../components/SingleBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div>orders</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/checkout",
        element: <CheckOutPage />
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      }
    ],
  },
]);

export default router;
