import React, { useState } from 'react'
import Haeder from './componats/Haeder'
import "./pages/style/Shop.css"
import Shop from './pages/shop/Shop.jsx'
import Footer from './componats/Footer'
import Home from './pages/home/Home'
import img1 from "./img/download.jpeg"
import {Routes,Route} from "react-router-dom"
import Cart from './pages/cart/Cart'
import Login from './pages/login&creatAccount/Login'
import Creataccount from './pages/login&creatAccount/Creataccount'

const App = () => {
  const[producats,setproducats]=useState([{id:1,tital:"naruto hoodie",price:325,count:1,img:img1},{id:2,tital:"naruto hoodie",price:325,count:1,img:img1},{id:3,tital:"naruto hoodie",price:325,count:1,img:img1},{id:4,tital:"naruto hoodie",price:325,count:1,img:img1}])
  const[cartProducats,setcartProducats]=useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const oppo=()=>{
  console.log("pk");
 }
  return (
    <div>
       <div className='text-center p-1 ads'><h4>Free shipping, 30-day return or refund guarantee</h4></div>
      <Haeder handleShow={handleShow} cartProducats={cartProducats}/>
      <Cart show={show} handleClose={handleClose}  cartProducats={cartProducats}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop producats={producats} oppo={oppo}/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/logIn" element={<Login/>}/>
        <Route path="/logIn/creataccount" element={<Creataccount/>}/>
      </Routes>
      <Footer/> 
      </div>
  )
}

export default App