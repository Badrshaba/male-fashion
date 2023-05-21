import React from "react";
import "../pages/style/Footer.css"
import logo from "../img/footer-logo.png"
import visa from "../img/payment.png"
import img1 from "../img/clients/client-1.png"
import img2 from "../img/clients/client-5.png"
import img3 from "../img/clients/client-3.png"
import img4 from "../img/clients/client-4.png"
import Form from 'react-bootstrap/Form';
const Footer = () => {
  return (
    
    <div className="  footer d-flex flex-column align-items-center pb-1 ">
      <div className="container footer2 d-flex justify-content-around align-items-start flex-wrap">
      <div className="div">
        <div className="mb-3"><img src={logo}  /></div>
        <p>
          he customer is at the heart of our 
          unique business model, which includes  design.
        </p>
        <div className="mt-3"><img src={visa}  /></div>
      </div>
      <div className="div">
        <h5 className="mb-3">SHOPPING</h5>
        <ol className=" p-0">
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
        </ol>
      </div>
      <div className="div">
        <h5 className="mb-3">PARTNER</h5>
        <div className=" images d-flex flex-wrap justify-content-evenly ">
        <img src={img1} className="me-3 mt-3"  />
        <img src={img2} className="me-3 mt-3"/>
        <img src={img3} className="me-3 mt-3" />
        <img src={img4} className="me-3 mt-3" />
        </div>

      </div>
      <div className="div">
      <h5 className="mb-3">NEWLETTER</h5>
      <p>Be the first to know about new arrivals , look books,sales & promos! </p>
      <Form.Control className="input" type="email" placeholder="Your email" />
      </div>
      </div>
      <hr className=" text-white w-75 text-center" />
 <p>Copyright © 2023 & 2020</p>
    </div>
  );
};

export default Footer;
