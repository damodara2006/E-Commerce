import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Men() {
  const [data, setdata] = useState([]);
  const [id, setid] = useState();
  const navigate = useNavigate();
  const num = 1;
  useEffect(() => {
    axios.get("https://e-commerce-3-7nwk.onrender.com/alluser/6").then((res) => {
      setdata(res.data);
    });
  }, []);

  const handlecart = async (card) => {
    axios
      .post("https://e-commerce-3-7nwk.onrender.com/cart", { id: card._id, num })
  };

  const handleproduct = (card) => {
    navigate("/product", { state: { card } });
  };
  return (
    <div>
      <FaShoppingCart
        className=" right-10 absolute top-7 text-3xl hover:text-gray-400 transition-all"
        onClick={() => navigate("/cart")}
      />
      <div>
        {
          <ul className="  flex flex-wrap gap-1 gap-y-2 w-screen justify-evenly mt-15 items-center">
            {data.map((card, key) => (
              <li  onClick={() => handleproduct(card)}
                className=" z-0 group relative min-w-[150px] h-[250px] border rounded-md  justify-center flex items-center bottom-0"
                key={key}
              >
                <p className=" absolute bottom-5">{card.name}</p>
                <img
                  className="w-[100%] h-[80%] rounded-md absolute top-0"
                  src={card.url}
                  alt=""
                />
                <p className=" absolute bottom-0">Price: {(Intl.NumberFormat( 'en-IN', {
                        style:'currency',
                        currency:'INR',
                        maximumFractionDigits:0
                      }).format(card.price))}</p>
                <button
                  key={key}
                  onMouseEnter={() => setid(card._id)}
                  className="absolute px-2 opacity-100 group-hover:opacity-100 rounded-md bottom-14 bg-gradient-to-tl from-red-600 to-orange-400 hover:bg-gradient-to-tl hover:from-red-700 hover:to-orange-500 transition-all duration-1000 text-sm cursor-pointer z-50"
                  onClick={() => handlecart(card)}
                >
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}

export default Men;
