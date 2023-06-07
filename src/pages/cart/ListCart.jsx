
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FcShop } from "react-icons/fc";
import "../style/Cart.css"
import { Link } from 'react-router-dom';
import Cart from './Cart';
const ListCart = ({show,handleClose,cartProducats,del,incerment,decerment}) => {
 

  return (
    <>
 

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className=' w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
          {cartProducats==0?(<div className='d-flex flex-column justify-content-center align-items-center'>  <FcShop className='cartIcon'/>
             <Button variant="success" onClick={handleClose} as={Link} to="/shop" >Shop Now</Button></div>):(
             <div className=' w-100'>{cartProducats.map((cartProducat)=>(<Cart key={cartProducat.id} cartProducat={cartProducat} del={del} incerment={incerment} decerment={decerment}/>))}</div>
             )}
          
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ListCart;
