import React from 'react'
import "../style/Home.css"
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Third = () => {
  return (
    <div>
        <div className=' bg-black divThird'> 
            <h3 className=' text-white text-center pt-2 pb-3 '>Free shipping , 30-day return or refund guarantaa.</h3>
        </div>
        <div className=' d-flex justify-content-evenly flex-wrap'>
        <Card style={{ width: "18rem" }}   className="  border-0 m-3">
          <Card.Img variant="top" src='https://m.media-amazon.com/images/I/41hn+kIAZgL._AC_.jpg' />
          <Card.Body>
            <Card.Title className="classUnhiden">Activ mens ACTIV MEN CREW-NECK SWEATSHIRT Sweatshirt</Card.Title>
            
            <Card.Text>
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiOutlineStar />
            </Card.Text>
            <Card.Title>$290</Card.Title>
            <div className=" w-100 text-center">
            <Button as={Link} to={"/shop"} className="w-100" variant="outline-secondary">Go shopping</Button>
            </div>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}   className="  border-0 m-3">
          <Card.Img variant="top" src='https://m.media-amazon.com/images/I/519pXr8k7cL._AC_SX679_.jpg' />
          <Card.Body>
            <Card.Title className="classUnhiden">Copper Bomb Jacket</Card.Title>
            
            <Card.Text>
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiOutlineStar />
            </Card.Text>
            <Card.Title>$600</Card.Title>
            <div className=" w-100 text-center">
            <Button as={Link} to={"/shop"} className="w-100" variant="outline-secondary">Go shopping</Button>
            </div>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}   className="  border-0 m-3">
          <Card.Img variant="top" src='https://m.media-amazon.com/images/I/41cmdWj-DUL._AC_.jpg' />
          <Card.Body>
            <Card.Title className="classUnhiden">Focus Waterproof Beige Jacket</Card.Title>
            
            <Card.Text>
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiOutlineStar />
            </Card.Text>
            <Card.Title>$500</Card.Title>
            <div className=" w-100 text-center">
            <Button as={Link} to={"/shop"} className="w-100" variant="outline-secondary">Go shopping</Button>
            </div>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}   className="  border-0 m-3">
          <Card.Img variant="top" src='https://m.media-amazon.com/images/I/71fllpmQnfL._AC_SX679_.jpg' />
          <Card.Body>
            <Card.Title className="classUnhiden">naruto hoodie49</Card.Title>
            
            <Card.Text>
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiFillStar className=" text-warning" />
              <AiOutlineStar />
            </Card.Text>
            <Card.Title>$360</Card.Title>
            <div className=" w-100 text-center">
            <Button as={Link} to={"/shop"} className="w-100" variant="outline-secondary">Go shopping</Button>
            </div>
            
          </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Third