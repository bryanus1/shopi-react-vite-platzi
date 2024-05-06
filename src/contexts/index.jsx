import PropTypes from "prop-types";
import { createContext, useState, useMemo } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [countProducts, setCountProducts] = useState(0);

  const value = useMemo(
    () => ({
      countProducts,
      setCountProducts,
    }),
    [countProducts, setCountProducts]
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
