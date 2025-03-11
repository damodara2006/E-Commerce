import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { InfinitySpin } from "react-loader-spinner";
function Cart() {
  const [array, setarray] = useState([]);
  const [arrays, setarrays] = useState([]);
  let [newarray, setnewarray] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    axios.post("http://localhost:8000/allcart").then((res) => {
      setarray(res.data);
    });
  });

  useEffect(() => {
    axios
      .post("http://localhost:8000/allcarts", { array })
      .then((res) => setarrays(res.data));
  }, [array]);

  const handlearray = (item, key) => {
    axios.post("http://localhost:8000/cartdlt", { id: item._id });
    toast.success("Deleted");

    if (newarray.length == 0) {
      newarray = arrays.filter((item, keys) => keys !== key);
      setnewarray(newarray);
    } else {
      newarray = newarray.filter((item, keys) => keys !== key);
      setnewarray(newarray);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  });

  toast.success("Deleted");

  return (
    <div className="w-screen h-screen ">
      {console.log(arrays.length)}
      
      {arrays.length == 0 ? (
        <div className="flex w-screen h-screen justify-center items-center" >
          <InfinitySpin
            visible={true}
            width="200"
            color="red"
            ariaLabel="infinity-spin-loading"
           
          />
          <p className="text-red-600" >If not loaded, you are not added any items to cart</p>
        </div>
      ) : (
        <>
          <ul className=" h-fit">
            {newarray.length == 0 && arrays.length == 0 ? (
              <div className="flex w-screen h-screen justify-center items-center">
                <p className="text-4xl text-red-600 font-mono">
                  No Products In Cart
                </p>
              </div>
            ) : (
              ""
            )}
            {!newarray.length == 0 ? (
              <>
                {newarray.map(
                  (item, key) =>
                    item && (
                      <li
                        key={key}
                        className="flex justify-evenly text-center items-center  mb-5 border-b relative"
                      >
                        <img
                          src={item.url}
                          className="w-[40] py-3 h-40 text-center "
                          alt=""
                        />
                        <p className="text-center h-full w-[22%] ">
                          Price: {item.price ? item.price : "0"}
                        </p>
                        <p className="text-center h-full w-[22%]  ">
                          {item.name}
                        </p>
                        <FaRegTrashAlt
                          className="  w-[12%] "
                          onClick={() => handlearray(item, key)}
                        />
                      </li>
                    )
                )}
              </>
            ) : (
              <>
                {arrays.map(
                  (item, key) =>
                    item && (
                      <li
                        key={key}
                        className="flex justify-evenly text-center items-center  mb-5 border-b relative"
                      >
                        <img
                          src={item.url}
                          className="w-[40] py-3 h-40 text-center "
                          alt=""
                        />
                        <p className="text-center h-full w-[22%] ">
                          Price: {item.price ? item.price : "0"}
                        </p>
                        <p className="text-center h-full w-[22%]  ">
                          {item.name}
                        </p>
                        <FaRegTrashAlt
                          className="  w-[12%] "
                          onClick={() => handlearray(item, key)}
                        />
                      </li>
                    )
                )}
              </>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default Cart;
