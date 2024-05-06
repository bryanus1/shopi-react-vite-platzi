import PropTypes from "prop-types";
import { useContext } from "react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../contexts";

export default function OrderCard({ id, title, price, image, count }) {
  const { productsInCart, setProductsInCart } = useContext(ShoppingCartContext);

  const removeProductFromCart = (id) => {
    let newProductsInCart = productsInCart.filter(
      (product) => product.id !== id
    );
    setProductsInCart(newProductsInCart);
  };

  const plusCountProductInCart = (id) => {
    let product = productsInCart.find((cartProduct) => cartProduct.id === id);
    product.count = product.count + 1;
    setProductsInCart([...productsInCart]);
  };

  const minusCountProductInCart = (id) => {
    let product = productsInCart.find((cartProduct) => cartProduct.id === id);
    if (product.count === 1) return;
    product.count = product.count - 1;
    setProductsInCart([...productsInCart]);
  };
  return (
    <div className="flex justify-between items-center p-4 border border-b-gray-200">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <div>
          <p className="text-sm font-light">{title}</p>
          <p className="text-lg font-medium">${price}</p>

          <div className="flex gap-3">
            <button className=" bg-red-200 rounded-lg h-6 w-6 text-black-500">
              <MinusIcon
                className="size-6 text-black"
                onClick={() => minusCountProductInCart(id)}
              />
            </button>

            <div className="bg-gray-300 w-8 flex justify-center rounded-md">
              <p className="select-none">{count}</p>
            </div>

            <button className=" bg-green-200 rounded-lg h-6 w-6 text-black-500">
              <PlusIcon
                className="size-6 text-black"
                onClick={() => plusCountProductInCart(id)}
              />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => removeProductFromCart(id)}
        className="cursor-pointer flex items-center gap-2"
      >
        <XMarkIcon className="size-4 text-black" />
      </button>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
