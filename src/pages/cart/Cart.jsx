
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FcShop } from "react-icons/fc";
import "../style/Cart.css"
import { Link } from 'react-router-dom';
const Cart = ({show,handleClose,cartProducats}) => {
 

  return (
    <>
 

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className=' w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
          {cartProducats==0?(<div>  <FcShop className='cartIcon'/>
             <Button variant="success" onClick={handleClose} as={Link} to="/shop" >Shop Now</Button></div>):(
             <div>{cartProducats.map((cartProducat)=>(<div className=' w-100 d-flex align-items-center border-bottom'><img width="90px" src={cartProducat.img}/><div><h5>{cartProducat.tital}</h5><p>${cartProducat.price}</p></div><h3>+</h3><p>{cartProducat.count}</p><h3>-</h3></div> ))}</div>
             )}
          
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
