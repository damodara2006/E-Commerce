        import React, {  useState } from "react";
        import { LuTableOfContents } from "react-icons/lu";
        import { MdOutlineSearch } from "react-icons/md";
        import home from "../assets/Image.png";
        import { useNavigate } from "react-router-dom";
        function Home() {
        const navigate = useNavigate();

        const [nav, setNav] = useState(0);
        let category = [
            "Men",
            "Women",
            "Electronics",
            "Jewellery",
            "Shoes",
            "Kid's Wear",
            "Sports",
            "Toys"
        ];

        function handleNav() {
            setNav((prev) => (prev === 0 ? 2 / 3 : 0));
        }

        const handleuser = (key) => {
            if (key == 0) {
            navigate("/men");
            }
            if(key == 1){
                navigate("/women")
            }
            if(key == 2){
                navigate("/electronics")
            }
            if(key == 3){
                navigate("/jewellery")
            }
            if(key == 4){
                navigate("/shoes")
            }
            if(key == 5){
                navigate("/kids")
            }
            if(key == 6){
                navigate("/sports")
            }
            if(key == 7){
                navigate("/toys")
            }
            
        };

        return (
            <div className="text-black w-screen h-screen relative overflow-hidden">
            <div className="w-full h-12 flex flex-row justify-between items-center ">
                <div className="w-[30%] text-center">Hello</div>
                <div className="w-[40%]">
                <div className="flex items-center outline-1 focus-within:bg-gray-200 outline-gray-100 transition-all duration-100 rounded-2xl">
                    <input
                    type="text"
                    className="rounded-xl placeholder:text-[10px] placeholder:font-mono pl-7 text-[10px] p-1.5 w-[100%] outline-0 font-mono"
                    placeholder="Search..."
                    />
                    <MdOutlineSearch className="mr-3 cursor-pointer" />
                </div>
                </div>
                <div className="w-[30%] text-center">Hello</div>
            </div>

            <div className="w-full border border-gray-200 relative mb-3">
                <nav className="flex p-1.5 relative justify-between ">
                <div className="flex items-center w-[20%] justify-evenly">
                    {nav === 2 / 3 ? (
                    <div
                        className="transition-all duration-500 px-1 cursor-pointer "
                        onClick={handleNav}
                    >
                        X
                    </div>
                    ) : (
                    <LuTableOfContents
                        onClick={handleNav}
                        className="transition-all duration-500 cursor-pointer"
                    />
                    )}
                    CATEGORY
                </div>
                <ul className="flex font-semibold justify-evenly w-[50%]">
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>FEATURES</li>
                    <li>PAGES</li>
                    <li>BLOG</li>
                </ul>
                </nav>
            </div>

            <div className="relative w-full justify-center flex px-[5%] h-fit">
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
                <div className="w-[100%] ml-2.5">
                <img className="w-[100%] h-full" src={home} alt="Home" />
                </div>
            </div>
            </div>
        );
        }

        export default Home;
