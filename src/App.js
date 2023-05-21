import React from 'react'
import Haeder from './componats/Haeder'
import "./pages/style/Shop.css"
import Shop from './pages/shop/Shop.jsx'
import Footer from './componats/Footer'
import Home from './pages/home/Home'
import {Routes,Route} from "react-router-dom"



const App = () => {
  return (
    <div>
       <div className='text-center p-1 ads'><h4>Free shipping, 30-day return or refund guarantee</h4></div>
      <Haeder/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/> 
      </div>
  )
}

export default App