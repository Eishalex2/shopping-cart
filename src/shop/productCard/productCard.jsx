//individual card component that shows on the products page
import PropTypes from 'prop-types';
import styles from './card.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Card = ({ title, image, price }) => {

  const { productId } = useParams();

  return (
      <div className={styles.card}>
          <h2>{title}</h2>
          <img className={styles.img} src={image} alt={title} />
          <p>${price}</p>
      </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
}

export default Card;