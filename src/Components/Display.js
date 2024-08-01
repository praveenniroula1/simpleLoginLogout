import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";

const Display = () => {
  const dispatch = useDispatch();
  const [cart,setCart]=useState([])
  const products = [
    {
      name: "Product 1",
      description: "Very good product",
      price: 100,
    },
    {
      name: "Product 2",
      description: "Very good product",
      price: 200,
    },
    {
      name: "Product 3",
      description: "Very good product",
      price: 300,
    },
  ];

  const handleAdd = (product) => {
    setCart(product)
    dispatch(addItems(product));
  };
  return (
    <>
      {products?.map((product, index) => (
        <h1 key={index}>
          {product.name} <button onClick={()=>handleAdd(product)}>AddTocart</button>
        </h1>
      ))}
    </>
  );
};

export default Display;
