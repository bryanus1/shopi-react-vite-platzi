import { useEffect, useState } from "react";

import Layout from "../../components/layout";
import { Card } from "../../components/card";
import ProductDetail from "../../components/productDetail";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  });

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => {
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

      <ProductDetail />
    </Layout>
  );
}
