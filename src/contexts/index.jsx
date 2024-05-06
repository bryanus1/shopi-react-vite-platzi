import PropTypes from "prop-types";
import { createContext, useState, useMemo, useCallback } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");

  // products in cart
  const [productsInCart, setProductsInCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  // Order
  const [orders, setOrders] = useState([]);

  // Product detail
  const [productDetail, setProductDetail] = useState({});

  // Product detail sidebar
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = useCallback(() => setIsProductDetailOpen(true), []);
  const closeProductDetail = useCallback(
    () => setIsProductDetailOpen(false),
    []
  );

  const value = useMemo(
    () => ({
      products,
      setProducts,
      searchByTitle,
      setSearchByTitle,
      searchByCategory,
      setSearchByCategory,
      productsInCart,
      setProductsInCart,
      isCartOpen,
      openCart,
      closeCart,
      orders,
      setOrders,
      productDetail,
      setProductDetail,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
    }),
    [
      products,
      setProducts,
      searchByTitle,
      setSearchByTitle,
      searchByCategory,
      setSearchByCategory,
      productsInCart,
      setProductsInCart,
      isCartOpen,
      openCart,
      closeCart,
      orders,
      setOrders,
      productDetail,
      setProductDetail,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
    ]
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
