import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "../style/Shop.css"
import Button from 'react-bootstrap/Button';
const Shop = ({ producats,addproducts }) => { 

  return (
    <div className=" d-flex flex-wrap justify-content-evenly">
      {producats.map((producat) => (
        <Card style={{ width: "18rem" }} key={producat.id}  className=" headcard border-0 m-3">
          <Card.Img variant="top" src={producat.img} />
          <Card.Body>
            <Card.Title className="classUnhiden">{producat.tital}</Card.Title>
            <Card.Title onClick={()=>addproducts(producat)}  className="classhiden text-success">+ Add To Cart</Card.Title>
            <Card.Text>
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiOutlineStar />
            </Card.Text>
            <Card.Title>${producat.price}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Shop;
