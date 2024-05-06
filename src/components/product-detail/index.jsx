import "./styles.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../contexts";

export default function ProductDetail() {
  const {
    isProductDetailOpen,
    closeProductDetail,
    productDetail,
    setProductDetail,
  } = useContext(ShoppingCartContext);

  const closeSidebar = () => {
    setProductDetail({});
    closeProductDetail();
  };

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border bg-white border-black rounded-lg mr-3`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={() => closeSidebar()} className="cursor-pointer">
          <XMarkIcon className="size-6 text-black" />
        </button>
      </div>

      <figure className="px-6">
        <img
          className="w-full- h-full rounded-lg object-cover"
          src={productDetail.image}
          alt={productDetail.title}
        />
      </figure>

      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${productDetail.price}
        </span>
        <span className="font-medium text-md text-balance">
          {productDetail.title}
        </span>
        <span className="font-light text-sm text-pretty">
          {productDetail.description}
        </span>
      </p>
    </aside>
  );
}
