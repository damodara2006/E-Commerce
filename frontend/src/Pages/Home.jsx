import React, { useState } from 'react'
import { LuTableOfContents } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import home from "../assets/Image.png"
function Home() {
    const [nav,setnav] = useState(0)
    let catogory = ["Men", "Women","Electronics","Jewellery", "Shoes","Kid's Wear", "Sports","Toys"]
    function handlenav(){
        setnav((prev)=>{
            if(prev == 0){
                setnav("2/3")
            }
            else{
                setnav(0)
            }
        }
            
        )
    }
  return (
    <div className='text-black w-screen h-screen relative overflow-hidden' >

        <div className='w-full h-12 flex flex-row justify-between items-center ' >

            <div className='w-[30%]  text-center' >Hello</div>
            <div className='w-[40%]  '>
                <div className='flex items-center outline-1 focus-within:bg-gray-200 outline-gray-100 transition-all duration-100 rounded-2xl' >
                <input type="text" className=' rounded-xl placeholder:text-[10px] placeholder:font-mono pl-7 text-[10px] p-1.5 w-[100%] outline-0 font-mono' placeholder='Search...' 
               />
               <MdOutlineSearch className='mr-3 cursor-pointer'/>
                </div>
                
               
            </div>
            <div className='w-[30%]  text-center'>Hello</div>

        </div>

     <div className='w-full border  border-gray-200 relative mb-3' >

        <nav className='flex p-1.5 relative justify-between ' >

            <div className='  flex items-center w-[20%] justify-evenly' >
            {
                nav == 96 ?
                <LuTableOfContents onClick={()=>handlenav()} className='transition-all duration-500' /> : <div className='transition-all duration-500 px-1' onClick={()=>handlenav()} >
                    X</div>}
                CATOGORY
            </div>
            <ul className='flex font-semibold justify-evenly w-[50%]' >
                <li>HOME</li>
                <li>SHOP</li>
                <li>FEATURES</li>
                <li>PAGES</li>
                <li>BLOG</li>
            </ul>
        </nav>

      
     </div>
     <div className='relative w-full justify-center flex px-[5%] h-fit' >
        {
           <ul className={`bg-gray-100 w-[25%] flex absolute flex-col justify-between -left-${nav} transition-all duration-200 `} >
            {
                catogory.map((items,key)=>(
                    <li className='border border-gray-200 p-1.5 pl-[10%] h-full flex items-center hover:text-red-500 font-semibold transition-all '  key={key} >{items}</li>
                ))
            }
        </ul>
        }
        <div className='w-[100%] ml-2.5 ' >
            <img className='w-[100%] h-full' src={home} ></img>
        </div>
       
        </div>
       
    </div>
  )
}

export default Home