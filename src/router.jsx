import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Root from './root/root';
import ErrorPage from './errors/errorPage';
import Index from './index';
import Shop from './shop/shop';
import Cart from './cart/cart';
import Details from './details/details';

const Router = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6', {mode: 'cors'})
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  const addToCart = (product, quantity) => {
    if (cartItems.length === 0) {
      setCartItems((prevCart) => [
        { ...product, quantity: quantity }, ...prevCart, 
      ]);
    } else {
      // handles if user goes back and adds more of the same item
      const newQuantity = cartItems.map((item) => {
        if (item.id === product.id) {
          let oldQuantity = item.quantity;
          return {...item, quantity: (oldQuantity + Number(quantity))}
        } else {
          return item;
        }
      });

      setCartItems(newQuantity);
    }
  }

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const changeQuantity = (e, id) => {
    const newQuantity = cartItems.map((item) => {
      if (item.id === id) {
        return {...item, quantity: e.target.value}
      } else {
        return item;
      }
    });

    setCartItems(newQuantity);
  }

  const getCartTotalItems = () => {
    let total = 0;
    cartItems.forEach((item) => {
      let quantity = Number(item.quantity);
      total += quantity;
    });
    return total;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root totalItems={getCartTotalItems()}/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, 
          element: <Index />,
        },
        {
          path: "shop",
          element: <Shop data={data}/>
        },
        {
          path: "product/:productId",
          element: <Details data={data} addToCart={addToCart}/>
        },
        {
          path: "cart",
          element: <Cart items={cartItems} remove={removeFromCart} changeQuantity={changeQuantity}/>
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;