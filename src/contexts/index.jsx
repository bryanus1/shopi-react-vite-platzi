import PropTypes from "prop-types";
import { createContext, useState, useMemo, useCallback } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // products in cart
  const [productsInCart, setProductsInCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

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
      productsInCart,
      setProductsInCart,
      isCartOpen,
      openCart,
      closeCart,
      productDetail,
      setProductDetail,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
    }),
    [
      productsInCart,
      setProductsInCart,
      isCartOpen,
      openCart,
      closeCart,
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
