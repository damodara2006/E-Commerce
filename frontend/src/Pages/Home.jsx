import React, { useEffect, useState } from "react";
import { LuTableOfContents } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import product from "./Product";

function Home() {
  const navigate = useNavigate();
  const [alldata, setalldata] = useState([]);
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [searching, setsearching] = useState(true);
  const [nav, setNav] = useState(0);

  const category = [
    "Men",
    "Women",
    "Electronics",
    "Jewellery",
    "Shoes",
    "Kid's Wear",
    "Sports",
    "Toys"
  ];

  useEffect(() => {
    axios.get("https://e-commerce-3-7nwk.onrender.com/alluser").then((res) => {
      setalldata(res.data);
      setdata(res.data);
    });
  }, []);

  function handleNav() {
    setNav((prev) => (prev === 0 ? 2 / 3 : 0));
  }

  const handleuser = (key) => {
    const routes = [
      "/men",
      "/women",
      "/electronics",
      "/jewellery",
      "/shoes",
      "/kids",
      "/sports",
      "/toys"
    ];
    navigate(routes[key]);
  };

  function handlesearch() {
    const filteredData = alldata.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );
    setdata(filteredData);
    setsearching(false);
  }

  const handleproduct = (card) => {
    navigate("/product", { state: { card } });
  };
  
  
  

  return (
    <div className="text-black w-screen h-full  overflow-hidden bg-gray-300 relative overflow-hidden ">
      <div className="w-full h-12 flex flex-row justify-between items-center bg-orange-400  ">
        <div className=" text-center font-bold ml-[4%] flex ">ＣＬＯＵＤＨＵＴ</div>
        <div className="w-[40%]">
          <div className="flex items-center outline-1 focus-within:bg-gray-200 outline-gray-100 transition-all duration-100 rounded-2xl relative">
            <input
              type="text"
              className="rounded-xl placeholder:text-[10px] placeholder:font-mono pl-7 text-[10px] p-1.5 w-[100%] outline-0 font-mono"
              placeholder="Search..."
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <MdOutlineSearch
              className="mr-3 cursor-pointer"
              onClick={handlesearch}
            />
          </div>
        </div>
        <div className="w-[30%] text-center flex justify-evenly">
        <a href="mailto:damodara2006@gmail.com"><IoMdMail /></a>
        <a href="https://www.instagram.com/its_me_pdp28/"><FaInstagram  /> </a>
        <a href="tel:9043402788"><IoCallSharp /></a>
       
        </div>
      </div>
      <div className="w-full border border-gray-200 relative mb-3 bg-gradient-to-r from-gray-600 to-gray-400">
        <nav className="flex p-1.5 relative justify-between">
          <div className="flex items-center w-[20%] justify-evenly">
            {nav === 2 / 3 ? (
              <div
                className="transition-all duration-500 px-1 cursor-pointer"
                onClick={handleNav}
              >
                X
              </div>
            ) : (
              <LuTableOfContents
                onClick={handleNav}
                className="transition-all duration-500 cursor-pointer "
              />
            )}
           
          </div>
          <div className="flex  w-[40%]"> CATEGORY</div>
        
          <ul className="flex font-semibold justify-evenly flex-row sm:w-[50%] md:w-[50%] lg:w-[50%] w-[0%] xl:w-[50%] shrink ">
            <li className="cursor-pointer text-sm hidden sm:block lg:block xl:block md:block" >HOME</li>
            <li className="cursor-pointer text-sm hidden sm:block lg:block xl:block md:block" onClick={handleNav}>SHOP</li>
            <li className="cursor-pointer text-sm hidden sm:block lg:block xl:block md:block" >FEATURES</li>
            <li className="cursor-pointer text-sm hidden sm:block lg:block xl:block md:block" >PAGES</li>
            <li className="cursor-pointer text-sm hidden sm:block lg:block xl:block md:block" >BLOG</li>
          </ul>
         
         
        </nav>
      </div>
      <div className="relative w-full justify-center flex px-[5%] h-fit z-50">
        <ul
          className="bg-gray-100 w-[25%] flex absolute flex-col justify-between transition-all duration-200"
          style={{ left: `${nav === 0 ? "-100%" : "0"}` }}
        >
          {category.map((item, key) => (
            <li
              onClick={() => handleuser(key)}
              className="border border-gray-200 p-1.5 pl-[10%] h-full flex items-center hover:text-red-500 font-semibold transition-all"
              key={key}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="w-[100%] ml-2.5"></div>
      </div >
      <div className="px-16 ml-3.5 z-0 ">
        <ul className="flex flex-wrap justify-center gap-10">
          {data.length == 0 ? (
            <p>No Results</p>
          ) : (
            data.map((card, key) => (
              <li
                className="border rounded-md bg-white"
                onClick={() => handleproduct(card)}
                key={key}
              >
                {
                  <>
                    {" "}
                    <img
                      src={`${card.url}`}
                      className="w-40 h-56 text-center rounded-md"
                      alt={card.name}
                    />
                    <p className="text-center">{card.name}</p>
                    <p className="text-center">
                      Price: {card.price ? (Intl.NumberFormat( 'en-IN', {
                        style:'currency',
                        currency:'INR',
                        maximumFractionDigits:0
                      }).format(card.price)): 0}
                    </p>
                  </>
                }
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
