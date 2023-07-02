import React from "react";
import img from "../img2/banner/banner-1.jpg";
import img2 from "../img2/banner/banner-2.jpg";
import img3 from "../img2/banner/banner-3.jpg";
import { Link } from "react-router-dom";
import "../style/Home.css";
const Secound = () => {
  return (
    <div className=" d-flex justify-content-lg-between  justify-content-center flex-wrap-reverse">
      <div className=" col-lg-6 col-md-8 col-12 d-flex flex-column align-items-center justify-content-end mb-3">
        <img className=" m-3 mb-1" src={img2} width={"80%"} alt="" />
        <div className=" w-75">
          <h2 className=" text-start">Accessories</h2>
          <Link to={"/shop"} className=" link">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className=" col-lg-6 col-md-8 col-12 d-flex flex-column align-items-center justify-content-center mb-3">
        <div className=" w-100 d-flex flex-column align-items-center divrelitev">
          <img className=" m-3" src={img} width={"80%"} alt="" />
          <div className=" w-75 positionAbsluit">
          <h2 className=" text-start">Clothing  Collection 2023</h2>
          <Link to={"/shop"} className=" link">
            SHOP NOW
          </Link>
          </div>
        </div>
        <div className=" w-100 d-flex flex-column align-items-center divrelitev">
          <img className=" m-3" src={img3} width={"80%"} alt="" />
          <div className=" w-75 positionAbsluit">
          <h2 className=" text-start">Shoes Spring 2023</h2>
          <Link to={"/shop"} className=" link">
            SHOP NOW
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secound;
