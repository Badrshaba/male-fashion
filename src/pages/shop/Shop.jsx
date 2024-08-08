import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "../style/Shop.css"
import Button from 'react-bootstrap/Button';
import Scroll from "../home/Scroll";
const Shop = ({ producats,addproducts }) => { 

  return (
    <div className="container">
<div className="row justify-content-center" >
{producats.map((producat) => (
        <Card style={{ width: "18rem" }} key={producat.id}  className="border-0 m-3 col-8 col-md-6 col-lg-4 h-50">
          <Card.Img variant="top" src={producat.img} />
          <Card.Body>
            <Card.Title className="classUnhiden">{producat.name}</Card.Title>
            
            <Card.Text>
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiOutlineStar />
            </Card.Text>
            <Card.Title>${producat.price}</Card.Title>
            <div className=" w-100 text-center">
            <Button onClick={()=>addproducts(producat)}  className="w-100" variant="outline-secondary">Add to card</Button>
            </div>
            
          </Card.Body>
        </Card>
        
      ))}
</div>
      <Scroll/>
    </div>
  );
};

export default Shop;
