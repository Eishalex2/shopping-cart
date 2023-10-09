import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <h1>My Shop Name</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="shop">Products</Link></li>
            <li><Link to="cart">Cart</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Root;