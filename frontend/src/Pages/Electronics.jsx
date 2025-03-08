import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Electronics() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/alluser/3").then((res) => {
      setdata(res.data);
    });
  });

  return (
    <div>
      <div>
        {
          <ul className="   flex flex-wrap gap-1 gap-y-2 w-screen justify-evenly mt-20 items-center px-36">
            {data.map((card, key) => (
              <li
                className=" relative min-w-[150px] h-[250px] border rounded-md justify-center flex items-center bottom-0"
                key={key}
              >
                <p className=" absolute bottom-3">{card.name}</p>
                <img
                  className="w-[100%] h-[80%] rounded-md absolute top-0"
                  src={card.url}
                  alt=""
                />
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
}

export default Electronics;
