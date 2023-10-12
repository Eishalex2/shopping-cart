import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import styles from './details.module.css';

const Details = ({ data, addToCart }) => {
  const params = useParams();
  const productId = params.productId;

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // query database for a product with that id and return JSON object.
  // Going to have to remove out the getData to it's own component
  useEffect(() => {
    const item = data.find((item) => item.id === Number(productId));
    setProduct(item);
  }, [productId, data]);

  if (!product) return <p>We don't have that item!</p>;

  return (
    product && (
      <div>
        <p>Details about product {productId}</p>
        <p>{product.title}</p>
        <img className={styles.img} src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)}/>
        <button onClick={(e) => {
          e.preventDefault();
          addToCart(product, quantity);
        }}>Add to Cart</button>
      </div>
    )

  )
}

export default Details;