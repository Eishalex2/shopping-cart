import { useState, useEffect } from "react";
import Card from "./productCard/productCard";
import styles from './shop.module.css';

const Shop = ({ data }) => {

  console.log(data);

  return (
    <div>
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

export default Shop;