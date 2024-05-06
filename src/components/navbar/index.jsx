import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../contexts";

export default function Navbar() {
  const activeStyle = "underline underline-offset-4";
  const { productsInCart, openCart } = useContext(ShoppingCartContext);

  const leftMenu = [
    { key: 1, name: "All", path: "/" },
    { key: 2, name: "Clothes", path: "/clothes" },
    { key: 3, name: "Electronics", path: "/electronics" },
    { key: 4, name: "Furniture", path: "/furniture" },
    { key: 5, name: "Toys", path: "/toys" },
    { key: 6, name: "Others", path: "/others" },
  ];

  const rightMenu = [
    { key: 1, name: "My Orders", path: "/orders" },
    { key: 2, name: "Account", path: "/account" },
    { key: 2, name: "Sign In", path: "/sign-in" },
  ];

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>

        {leftMenu.map((item) => {
          return (
            <li key={item.key}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">bryan.sj175@gmail.com</li>

        {rightMenu.map((item) => {
          return (
            <li key={item.key}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}

        <li>
          <button
            className="flex justify-between items-center"
            onClick={() => openCart()}
          >
            <ShoppingCartIcon className="size-6 text-black" />
            <div>{productsInCart.length}</div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
