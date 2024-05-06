import "./styles.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../contexts";
import OrderCard from "../order-card";

export default function Cart() {
  const {
    productsInCart,
    setProductsInCart,
    isCartOpen,
    closeCart,
    orders,
    setOrders,
  } = useContext(ShoppingCartContext);

  const handleCheckout = () => {
    const newOrder = {
      id: orders.length + 1,
      date: new Date(),
      products: productsInCart,
      totalItems: productsInCart.length,
      total: productsInCart.reduce(
        (total, product) => total + product.price * product.count,
        0
      ),
    };
    setOrders([...orders, newOrder]);
    setProductsInCart([]);
  };

  return (
    <aside
      className={`${
        isCartOpen ? "flex" : "hidden"
      } cart flex-col fixed right-0 border bg-white border-black rounded-lg mr-3`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Cart</h2>
        <button onClick={() => closeCart()} className="cursor-pointer">
          <XMarkIcon className="size-6 text-black" />
        </button>
      </div>

      <div className="overflow-y-scroll flex-1">
        {productsInCart.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              count={product.count}
            />
          );
        })}
      </div>

      <div className="bg-white border border-t-slate-400 border-l-black-400 p-4 rounded-sm w-full">
        <div className="flex justify-between mb-3">
          <span className="text-lg font-medium">Total:</span>
          <span className="text-lg font-medium">
            $
            {productsInCart.reduce(
              (total, product) => total + product.price * product.count,
              0
            )}
          </span>
        </div>
        <button
          className="w-full rounded-md text-white font-medium bg-black  active:bg-white active:text-black hover:bg-slate-900 hover:text-slate-100"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
}
