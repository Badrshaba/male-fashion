import React from "react";
import { IoMdTrash } from "react-icons/io";
const Cart = ({cartProducat}) => {
  return (
    <div>
      <div className=" w-100 d-flex align-items-center justify-content-between border-bottom">
        <img width="90px" src={cartProducat.img} />
        <div>
          <h5>{cartProducat.tital}</h5>
          <p>${cartProducat.price}</p>
        </div>
        <h3>+</h3>
        <p>{cartProducat.count}</p>
        <h3>-</h3>
        <p>${cartProducat.price}</p>{" "}
        <IoMdTrash/>
      </div>{" "}
    </div>
  );
};

export default Cart;
