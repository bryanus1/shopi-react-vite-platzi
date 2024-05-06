import PropTypes from "prop-types";
import { createContext, useState, useMemo, useCallback } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Count of products in the shopping cart
  const [countProducts, setCountProducts] = useState(0);

  // Product detail sidebar
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = useCallback(() => setIsProductDetailOpen(true), []);
  const closeProductDetail = useCallback(
    () => setIsProductDetailOpen(false),
    []
  );

  // Product detail
  const [productDetail, setProductDetail] = useState({});

  const value = useMemo(
    () => ({
      countProducts,
      setCountProducts,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productDetail,
      setProductDetail,
    }),
    [
      countProducts,
      setCountProducts,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productDetail,
      setProductDetail,
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
