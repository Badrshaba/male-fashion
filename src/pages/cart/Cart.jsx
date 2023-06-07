import React from "react";
import { IoMdTrash } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import "../style/Cart.css"
const Cart = ({cartProducat, del,incerment,decerment}) => {
  return (
    <div>
      <div className=" d-flex align-items-center flex-column  border-bottom mb-5">
        <img width="150px" src={cartProducat.img} />
        <div>
          <h5>{cartProducat.name}</h5>
          <p className=" text-center fw-bold">${cartProducat.price}</p>
        </div>
        <div className=" d-flex justify-content-evenly w-100 ">
        <h3  className=" hovericon" onClick={()=>incerment(cartProducat)}>+</h3>
        <p>{cartProducat.count}</p>
        <h3  className=" hovericon" onClick={()=>decerment(cartProducat)}>-</h3>
        <p className=" fw-bold">${cartProducat.count*cartProducat.price}</p>{" "}
         <h3 onClick={()=>del(cartProducat)} className=" hovericon">< IoMdTrash/></h3>
        </div>

      </div>{" "}
    </div>
  );
};

export default Cart;
