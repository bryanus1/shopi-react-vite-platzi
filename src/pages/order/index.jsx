import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Layout from "../../components/layout";
import { ShoppingCartContext } from "../../contexts";

export default function Account() {
  const { id } = useParams();
  const { orders } = useContext(ShoppingCartContext);

  const getOrder = () => orders.find((order) => order.id === Number(id));

  return (
    <Layout>
      <div className="flex justify-center items-center mb-10 gap-5">
        <Link to="/orders">
          <ChevronLeftIcon className="size-6 text-black" />
        </Link>

        <h1 className="text-center text-black text-3xl">Order Nº {id}</h1>
      </div>

      {getOrder()?.products.map((product) => {
        return (
          <div
            key={product.key}
            className="flex justify-between items-center p-4 border border-black w-96 mb-6 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <figure className="w-20 h-20">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full rounded-lg object-cover"
                />
              </figure>
              <div>
                <p className="text-sm font-light">{product.title}</p>
                <p className="text-lg font-medium">${product.price}</p>

                <div className="bg-gray-300 w-8 flex justify-center rounded-md">
                  <p className="select-none">{product.count}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
