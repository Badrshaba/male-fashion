import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ImEnter } from "react-icons/im";
import {Link} from "react-router-dom"
 import logo from "../img/logo.png"
 import "../pages/style/Haeder.css"
const Haeder = ({handleShow,cartProducats}) => {
  return (
    <div>    <Navbar bg="light" expand="lg">
    <Container>
      
       <Navbar.Brand as={Link} to="/"><img src={logo}/></Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className='nav fw-bold '>Home</Nav.Link>
          <Nav.Link as={Link} to="/shop" className='nav fw-bold '>Shop</Nav.Link>
          <Nav.Link as={Link} to="/" className='nav fw-bold '>About Us</Nav.Link>
        </Nav>
        <div className=' ms-auto w-25 d-flex justify-content-center '>
          <Nav.Link  className='icon me-3 text-black d-flex flex-column justify-content-center' onClick={handleShow}>
          <div className={cartProducats.length==0? "none":"numbers"}><h6>{cartProducats.length!==0&&cartProducats.length}</h6></div>
            <HiOutlineShoppingBag/>
            </Nav.Link>
          <Nav.Link as={Link} to="/logIn" className='icon '><ImEnter/></Nav.Link>
          </div>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Haeder