import React, { useState ,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {ToastContainer, toast} from "react-toastify"
function Cartbuy() {
    const location = useLocation();
    let card = [];
    let price = location.state.price
    card.push(location.state)
    console.log(card[0].card)
    const[buy,setbuy] = useState(500)
    
    const handlebuy = ()=>{

        (card[0].card).map((item)=>( 
            toast.success(`${item.name} Ordered`)
        ))
      
      setbuy(500)
    }
   
    console.log((card[0].card).map((item )=>(console.log(item))))
  return (
    <div className=' w-screen z-0'>
      <ToastContainer/>
        <ul className='h-[80%] flex justify-center gap-2 flex-wrap' >{(card[0].card).map((item ,key)=>(
        <li className='flex flex-col  justify-center mt-5 items-center ' key={key}><p className='text-2xl font-emblema mb-5'>{item.name}</p>
        <img className='w-50 h-55' src={item.url} alt="" />
        <p className='text-2xl mt-5 font-bebas'>Price:  <span className='text-green-600 font-cinzel'> ₹{item.price}</span></p></li>
      ))}</ul>

      <div className='mt-24' >
      <p className='text-center -mt-16 mb-10 text-3xl font-emblema'>Total price :  <span className='font-emblema text-green-600' > ₹{Intl.NumberFormat({
       style:'currency',
        currency:'INR'
      }).format(price)}</span></p>

<div className='w-full flex  items-center  h-24 flex-col overflow-hidden relative transition-all duration-200'>
<button className='z-50 flex justify-center w-[25%] font-bebas bg-gradient-to-r from-orange-600 to-orange-300 rounded-3xl text-2xl border ' onClick={()=>setbuy(22)}>Buy</button>

{ <button style={{bottom:`${buy}px`}} onClick={()=>handlebuy()} className='z-40 transition-all duration-200 ease-in-out  flex absolute justify-center w-[20%] mt-3 font-bebas bg-gradient-to-r from-orange-600 to-orange-300 rounded-3xl text-2xl border'>Confrim</button>}
</div>
      </div>
      
    </div>
  ) 
}

export default Cartbuy
