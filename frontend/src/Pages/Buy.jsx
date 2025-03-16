import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {ToastContainer, toast} from "react-toastify"
function Buy() {
    const location = useLocation();
    const card = [];
    card.push(location.state)
    const[buy,setbuy] = useState(500)
    
    const handlebuy = ()=>{
      toast.success(`${card.map((item)=>(item.card.card.name))} Ordered`)
      setbuy(500)
    }

    
  return (
    <div className='h-screen w-screen z-0'>
      <ToastContainer/>
        <ul className='h-[80%] flex justify-center' >{card.map((item ,key)=>(
        <li className='flex flex-col  justify-center mt-5 items-center ' key={key}><p className='text-2xl font-emblema mb-5'>{item.card.card.name}</p>
        <img className='w-50 h-50' src={item.card.card.url} alt="" />
        <p className='text-2xl mt-5 font-bebas'>Price:  <span className='text-green-600 font-cinzel'> {(Intl.NumberFormat( 'en-IN', {
                        style:'currency',
                        currency:'INR',
                        maximumFractionDigits:0
                      }).format(item.card.card.price))}</span></p></li>
      ))}</ul>

      <div className='w-full flex  items-center  h-24 flex-col overflow-hidden relative transition-all duration-200'>
      <button className='z-50 flex justify-center w-[25%] font-bebas bg-gradient-to-r from-orange-600 to-orange-300 rounded-3xl text-2xl border ' onClick={()=>setbuy(22)}>Buy</button>

     { <button style={{bottom:`${buy}px`}} onClick={()=>handlebuy()} className='z-40 transition-all duration-200 ease-in-out  flex absolute justify-center w-[20%] mt-3 font-bebas bg-gradient-to-r from-orange-600 to-orange-300 rounded-3xl text-2xl border'>Confrim</button>}
      </div>
    </div>
  ) 
}

export default Buy
