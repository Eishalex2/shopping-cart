import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6', { mode: "cors"})
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((error) => setError(error));
  });

  

  return (
    <div>
      <p>Shop</p>
      {products && (
        products.map((product) => {
          return (
            <>
              <p key={product.id}>{product.title}</p>
              <img src={product.image} alt={product.title} />
            </>

          )
        })
      )}
    </div>
  )
}

export default Shop;