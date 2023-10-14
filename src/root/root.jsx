import { Link, Outlet } from "react-router-dom";
import styles from './root.module.css';

const Root = ({totalItems}) => {
  return (
    <>
      <header>
        <h1>My Shop Name</h1>
        <nav>
          <ul>
            <Link to="/" className={styles.link}><li>Home</li></Link>
            <Link to="shop" className={styles.link}><li>Products</li></Link>
            <Link to="cart" className={styles.link}><li>Cart ({totalItems})</li></Link>
          </ul>
        </nav>
      </header>
      <Outlet />
      {/* <footer>
        Footer
      </footer> */}
    </>
  )
}

export default Root;