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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6', {mode: 'cors'})
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
          element: <Details data={data}/>
        },
        {
          path: "cart",
          element: <Cart />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;