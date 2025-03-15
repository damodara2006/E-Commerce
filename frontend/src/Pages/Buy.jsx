import React from 'react'
import { useLocation } from 'react-router-dom'
function Buy() {
    const location = useLocation();
    const card = [];
    card.push(location.state)
  return (
    <div className='h-screen w-screen'>
        <ul className='h-[80%] flex justify-center' >{card.map((item ,key)=>(
        <li className='flex flex-col  justify-center mt-5 items-center' key={key}><p>{item.card.card.name}</p>
        <img className='w-40 h-45' src={item.card.card.url} alt="" />
        <p>Price: ₹{item.card.card.price}</p></li>
      ))}</ul>

      <div className='w-full flex justify-center'>
      <button className='z-50 flex justify-center w-[25%] font-bebas bg-gradient-to-r from-orange-600 to-orange-300 rounded-3xl text-2xl border'>BUY</button>
      </div>
    </div>
  )
}

export default Buy
