import React, { useEffect, useState } from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
function Product() {
  const location = useLocation();
  let card = location.state;
  const navigate = useNavigate();
  const handlecart = async (card) => {
    axios
      .post("http://localhost:8000/cart", { id: card.card._id })
  };
  const handlebuy = (card)=>{
    navigate("/buy" ,{state:{card}})
  }
  return (
    <div className="w-screen h-screen">
      <FaShoppingCart
              className=" right-10 absolute top-10 hover:text-gray-400 transition-all z-50"
              onClick={() => navigate("/cart")}
            />
      <div className="flex items-center justify-center relative w-screen flex-col">
        <div className="w-[50%] mt-10 flex justify-center">
          <img src={card.card.url} className="w-fit h-[500px]" alt="" />
        </div>
        <div className="flex flex-col  items-center">
          <p className="font-emblema text-5xl mt-5">{card.card.name}</p>
          <p className=" mt-10 font-cinzel text-pdp text-2xl text-orange-600">
            Price:{" "}
            {
              <span className="text-green-600 font-bebas">
                ₹ {card.card.price}
              </span>
            }
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 flex w-screen justify-evenly border h-[5%]">
        <button className="w-[50%] bg-orange-400 font-montserrat text-2xl" onClick={()=>handlebuy(card)} >BUY NOW</button>
        <button className="w-[50%] font-montserrat text-2xl" onClick={()=>handlecart(card)} >ADD TO CART</button>
      </div>
    </div>
  );
}

export default Product;
