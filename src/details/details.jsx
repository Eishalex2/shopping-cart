import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import styles from './details.module.css';
import PropTypes from 'prop-types';

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

  if (!product) return <p>We don&apos;t have that item!</p>;

  return (
    product && (
      <div className={styles.container}>
        <img className={styles.img} src={product.image} alt={product.title} />
        <div className={styles.details}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <label htmlFor="quantity">Quantity: 
            <input type="number" id="quantity" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)}/>
          </label>
          <button className={styles.btn} onClick={(e) => {
            e.preventDefault();
            addToCart(product, quantity);
          }}>Add to Cart</button>
        </div>


      </div>
    )

  )
}

Details.propTypes = {
  data: PropTypes.array,
  addToCart: PropTypes.func,
}

export default Details;