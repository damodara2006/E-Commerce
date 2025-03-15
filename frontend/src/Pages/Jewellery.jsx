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
    axios.get("http://localhost:8000/alluser/4").then((res) => {
      setdata(res.data);
    });
  }, []);

  const handlecart = async (card) => {
    axios
      .post("http://localhost:8000/cart", { id: card._id, num })
  };

  const handleproduct = (card) => {
    navigate("/product", { state: { card } });
  };
  return (
    <div>
      <FaShoppingCart
        className=" right-10 absolute top-10 hover:text-gray-400 transition-all"
        onClick={() => navigate("/cart")}
      />
      <div>
        {
          <ul className="   flex flex-wrap gap-1 gap-y-2 w-screen justify-evenly mt-20 items-center px-36">
            {data.map((card, key) => (
              <li  onClick={() => handleproduct(card)}
                className=" group relative min-w-[150px] h-[250px] border rounded-md justify-center flex items-center bottom-0"
                key={key}
              >
                <p className=" absolute bottom-5">{card.name}</p>
                <img
                  className="w-[100%] h-[80%] rounded-md absolute top-0"
                  src={card.url}
                  alt=""
                />
                <p className=" absolute bottom-0">Price: ₹{card?.price}</p>
                <button
                  key={key}
                  onMouseEnter={() => setid(card._id)}
                  className="absolute px-2 opacity-100 group-hover:opacity-100 rounded-md bottom-14 bg-gradient-to-tl from-red-600 to-orange-400 hover:bg-gradient-to-tl hover:from-red-700 hover:to-orange-500 transition-all duration-1000 text-sm cursor-pointer"
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
