import React from 'react'
import "../style/Home.css"
import Button from 'react-bootstrap/Button';
import { BsArrowRight } from "react-icons/bs";
import {Link} from "react-router-dom"

const Fristhome = () => { 
  return (
    <div className=' haedimg w-100 vh-100  '>
       
      <div className=' container h-100 '>
        <div className='d-flex flex-column justify-content-center  align-items-start h-100'>
        <h5 className=' text-danger mb-3'>SUMMER COLLECTION</h5>
        <h1 className=' mb-1'>FALL-Winter</h1>
        <h1 className=' mb-3'>Collection 2023</h1>
        <p className=' mb-3'>A specialist label creating luxury esser Lorem ipsum <br/> fugiat optio officia, non doloribus, animi error </p>
        <Button variant="danger" as={Link} to="/shop"  size='lg'>Shop now  <BsArrowRight/></Button>{' '}
        </div>

      </div>
      
    </div>
  )
}

export default Fristhome