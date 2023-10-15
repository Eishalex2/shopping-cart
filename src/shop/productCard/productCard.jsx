//individual card component that shows on the products page
import PropTypes from 'prop-types';
import styles from './card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ id, title, image, price }) => {

  return (
    <>
      <Link to={`/product/${id}`} className={styles.link}>
        <div className={styles.card}>
            <h2>{title}</h2>
            <img className={styles.img} src={image} alt={title} />
            <p className={styles.para}>${price.toFixed(2)}</p>
        </div>
      </Link>
    </>

  )
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
}

export default Card;