import Card from "./productCard/productCard";
import styles from './shop.module.css';
import PropTypes from 'prop-types'

const Shop = ({ data }) => {

  return (
    <div className={styles.container}>
      {data && (
        data.map((product) => {
          return (
            <Card 
              key = {product.id}
              id = {product.id}
              title = {product.title}
              image = {product.image}
              price = {product.price}
            />
          )
        })
      )}
    </div>
  )
}

Shop.propTypes = {
  data: PropTypes.array,
}

export default Shop;