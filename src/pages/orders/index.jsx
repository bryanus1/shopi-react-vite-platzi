import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  CalendarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../contexts";
import Layout from "../../components/layout";

export default function Orders() {
  const { orders } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <h1 className="text-center text-black text-3xl mb-10">My Orders</h1>

      {orders.map((order) => {
        return (
          <div
            key={order.id}
            className="flex justify-between items-center border border-slate-950 rounded-lg p-6 w-96 mb-6"
          >
            <div>
              <h2 className="font-medium text-lg">Order ID: {order.id}</h2>
              <div className="flex gap-1">
                <CalendarIcon className="size-6 text-black" />
                <span className="font-light text-md">
                  {order.date.toLocaleDateString()}
                </span>
              </div>

              <div className="flex gap-1">
                <ShoppingCartIcon className="size-6 text-black" />
                <span className="font-light text-md">{order.totalItems}</span>
              </div>
            </div>

            <Link
              to={`/order/${order.id}`}
              className="flex justify-center items-center"
            >
              <span className="font-medium text-lg">
                ${order.total.toFixed(2)}
              </span>

              <ChevronRightIcon className="size-6 text-black" />
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}
