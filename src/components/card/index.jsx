import PropTypes from "prop-types";
import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../contexts";

export function Card({ title, price, categoryName, image, description }) {
  const {
    countProducts,
    setCountProducts,
    openProductDetail,
    setProductDetail,
  } = useContext(ShoppingCartContext);

  const openSidebar = () => {
    setProductDetail({
      title,
      price,
      categoryName,
      image,
      description,
    });
    openProductDetail();
  };

  return (
    <button
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => openSidebar()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {categoryName}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => {
            setCountProducts(countProducts + 1);
          }}
        >
          <PlusIcon className="size-6 text-black" />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </button>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
