import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const display = data.cartList;

  const handleOnClick = (index) => {
    dispatch(removeItems({ index }));
  };

  const handleOnAdd = (item) => {
    dispatch(addItems(item));
  };
  const handleOnMinus = (index) => {
    dispatch(removeItems({ index }));
  };
  return (
    <div>
      <h1 className="cart">This is Cart Items={data.cartList.length}</h1>
      {display?.map((item, index) => (
        <div className="list" key={ item._id}>
          {item.name}{" "}
          <button onClick={() => handleOnClick(index)}>RemoveFromCart</button>{" "}
          <span>
            <button onClick={() => handleOnAdd(item)}>+</button>{" "}
            <button onClick={() => handleOnMinus(index)}>-</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
