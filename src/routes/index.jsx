import { useRoutes } from "react-router-dom";

// Pages
import Home from "../pages/home";
import Account from "../pages/account";
import Order from "../pages/order";
import Orders from "../pages/orders";
import SignIn from "../pages/sign-in";
import NotFound from "../pages/not-found";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/clothes",
      element: <Home />,
    },
    {
      path: "/electronics",
      element: <Home />,
    },
    {
      path: "/furniture",
      element: <Home />,
    },
    {
      path: "/toys",
      element: <Home />,
    },
    {
      path: "/others",
      element: <Home />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/order/:id",
      element: <Order />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
};
