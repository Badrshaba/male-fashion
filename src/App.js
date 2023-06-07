import React, { useState } from "react";
import Haeder from "./componats/Haeder";
import "./pages/style/Shop.css";
import Shop from "./pages/shop/Shop.jsx";
import Footer from "./componats/Footer";
import Home from "./pages/home/Home";
import img1 from "./img/download.jpeg";
import { Routes, Route } from "react-router-dom";
import ListCart from "./pages/cart/ListCart.jsx";
import Login from "./pages/login&creatAccount/Login";
import Creataccount from "./pages/login&creatAccount/Creataccount";
import { producats } from "./product";

const App = () => {
  const [producats, setproducats] = useState([
    {
      name: "Activ mens ACTIV MEN CREW-NECK SWEATSHIRT Sweatshirt",
      price: "2",
      img: "https://m.media-amazon.com/images/I/41hn+kIAZgL._AC_.jpg",
      sort: "Sweatshirt",
      label: {
        name: "sale",
        color: "black",
        background: "green",
      },
      id: 1,
      count:1
    },
    {
      name: "White Pockets Plain Slim Fit Jeans Pants",
      price: "290",
      img: "https://m.media-amazon.com/images/I/41UNLFk9IxL._AC_SY679_.jpg",
      sort: "Pants",
      label: {
        name: "sale",
        color: "black",
        background: "white",
      },
      id: 2,
      count:1
    },
    {
      id: 3,
      count:1,
      img: "https://m.media-amazon.com/images/I/71fllpmQnfL._AC_SX679_.jpg",
      name: "naruto hoodie49",
      price: 390,
      sort: "Hoodie",
      label: {
        name: "sale",
        color: "black",
        background: "white"
      }
    },
    {
      name: "Copper Bomb Jacket",
      price: "651",
      img: "https://m.media-amazon.com/images/I/519pXr8k7cL._AC_SX679_.jpg",
      sort: "Jacket",
label: {
        name: "new",
        color: "white",
        background: "black"
      },
      id: 4,

count:1    },
    {
      id: 5,
      count:1,
      img: "https://m.media-amazon.com/images/I/41cmdWj-DUL._AC_.jpg",
      name: "Focus Waterproof Beige Jacket",
      price: 500,
      sort: "Jacket",
      label: {
        name: "sale",
        color: "black",
        background: "white"
      }
    },
    {
      name: "Black Clover hoodie1",
      price: 399,
      img: "https://m.media-amazon.com/images/I/61ZcbR2r5FL._AC_SX569_.jpg",
      sort: "Hoodie",
      label: {
        name: null,
        color: null,
        background: null
      },
      id: 6,

count:1    },
    {
      id: 7,
      count:1,
      img: "https://m.media-amazon.com/images/I/41ZWgHnMrzS._AC_SX679_.jpg",
      name: "Maestro Uncle Packet-142",
      price: 105,
      sort: "Socks",
      label: {
        name: "new",
        color: "white",
        background: "black"
      }
    },
    {
      id: 8,
      count:1,
      img: "https://m.media-amazon.com/images/I/61-sJ1uucQL._AC_SX679_.jpg",
      name: "Gadardine Tough Fur Lined Youth Jacket",
      price: 599,
      sort: "Jacket",
      label: {
        name: "sale",
        color: "black",
        background: "white"
      }
    },
    {
      id: 9,
      count:1,
      img: "https://m.media-amazon.com/images/I/61UbGqL-DdL._AC_SX679_.jpg",
      name: "Bella Cotton BCS68 Drawstring Short",
      price: 170,
      sort: "Short",
      label: {
        name: "new",
        color: "white",
        background: "black"
      }
    },
    {
      id: 10,
      count:1,
      img: "https://m.media-amazon.com/images/I/41Q8F1Y0IML._AC_.jpg",
      name: "TIA Casual Zip Fur Sleeve Hooded Jacket with Suede",
      price: 280,
      sort: "Jacket",
      label: {
        name: null,
        color: null,
        background: null
      }
    },
    {
      id: 11,
      count:1,
      img: "https://m.media-amazon.com/images/I/41LaIWDR0kL._AC_.jpg",
      name: "jacket lined with fur",
      price: 1100,
      sort: "Jacket",
      label: {
        name: "new",
        color: "white",
        background: "black"
      }
    },
    {
      id: 12,
      count:1,
      img: "https://m.media-amazon.com/images/I/31EFzZ6XRNL._AC_.jpg",
      name: "Kitten Kids Boys Waterproof Zipper Hooded Jacket",
      price: 309,
      sort: "Jacket",
      label: {
        name: "sale",
        color: "black",
        background: "white"
      }
    },
    {
      id: 13,
      count:1,
      img: "https://m.media-amazon.com/images/I/51pjcpQY0AL._AC_SY500_.jpg",
      name: "Italiano Suede half boot",
      price: 375,
      sort: "Shoes",
      label: {
        name: null,
        color: null,
        background: null
      }
    },
    {
      name: "Hesham-Tshirt",
      price: "200",
      sort: "tshirts",
      img: "https://freepngimg.com/save/36634-blank-white-t-shirt-template/1280x1024",
      label: {
        name: "",
        color: "white",
        background: ""
      },
      id: 14,
      count:1
    }
  ]);
  const [cartProducats, setcartProducats] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addproducts = (obj) => {
    if (!cartProducats.includes(obj)) {
      setcartProducats([obj, ...cartProducats]);
    } else {
      setcartProducats([...cartProducats]);
      cartProducats.map((e) => {
        if (e.id === obj.id) {
          e.count++;
        }
      });
    }
   
  };
  const incerment =(obj)=>{
    let incer= cartProducats.map((e)=>{if(e.id==obj.id){ e.count++}return e})
    setcartProducats([...incer])
  }
  const decerment =(obj)=>{
    let decer= cartProducats.map((e)=>{if(e.id==obj.id){e.count > 1 && e.count--}return e})
    setcartProducats([...decer])
  }
  const del = (obj)=>{
    let delet= cartProducats.filter((w)=>{return w!=obj})
    setcartProducats(delet)
    }
  return (
    <div>
      <div className="text-center p-1 ads">
        <h4>Free shipping, 30-day return or refund guarantee</h4>
      </div>
      <Haeder handleShow={handleShow} cartProducats={cartProducats} />
      <ListCart
        show={show}
        handleClose={handleClose}
        cartProducats={cartProducats}
        del={del}
        incerment={incerment}
        decerment={decerment}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop producats={producats} addproducts={addproducts} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/logIn/creataccount" element={<Creataccount />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
