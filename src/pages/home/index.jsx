import { useEffect, useContext } from "react";

import Layout from "../../components/layout";
import { Card } from "../../components/card";
import { ShoppingCartContext } from "../../contexts";

export default function Home() {
  const {
    products,
    setProducts,
    searchByTitle,
    setSearchByTitle,
    searchByCategory,
  } = useContext(ShoppingCartContext);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [setProducts]);

  const productsFiltered = () => {
    if (searchByTitle) {
      return products.filter((product) =>
        product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (searchByCategory) {
      return products.filter((product) =>
        product.category.name
          .toLowerCase()
          .includes(searchByCategory.toLowerCase())
      );
    }

    return products;
  };

  return (
    <Layout>
      <h1 className="text-center text-black text-3xl">Productos Exclusivos</h1>

      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={(e) => setSearchByTitle(e.target.value)}
        className="my-10 border border-gray-300 px-4 py-2 rounded-lg w-96 focus:outline-none focus:ring-1 focus:ring-black"
      />

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {productsFiltered()?.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              categoryName={product.category.name}
              image={product.images[0]}
              description={product.description}
            />
          );
        })}
      </div>
    </Layout>
  );
}
