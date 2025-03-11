import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import {ToastContainer ,toast} from "react-toastify"
function Cart() {
  const [array,setarray] = useState([])
  const [arrays,setarrays] = useState([])
  let [newarray,setnewarray] = useState([])
  let [done,setdone] = useState(false)
  useEffect(()=>{
    axios.post("http://localhost:8000/allcart")
    .then(res=>setarray(res.data))
  })

  useEffect(()=>{
    axios.post("http://localhost:8000/allcarts",{array})
    .then(res=>setarrays(res.data))
  },[array])

  const handlearray = (item, key)=>{
    axios.post("http://localhost:8000/cartdlt",{id:item._id})
  toast.success("Deleted")

    if(newarray.length == 0){
      newarray = arrays.filter((item,keys)=>(
        keys !== key
       
      ))
      setnewarray(newarray)
      setdone(true)
    }
    else{
      newarray = newarray.filter((item,keys)=>(
        keys !== key
      ))
      toast.success("Deleted")
      setnewarray(newarray)
      setdone(true)
    }
    
  }

  toast.success("Deleted")
  
  return (
    
    <div className='w-screen h-screen '>
      <ul className=' h-fit'>
        {newarray.length == 0 && arrays.length-1 == 0 ? <div className='flex w-screen h-screen justify-center items-center'><p className='text-4xl text-red-600 font-mono'>No Products In Cart</p></div>  :""}
      {!newarray.length == 0 ? <>
      {
         newarray.map((item,key)=>(
         item && <li key={key} className='flex justify-evenly text-center items-center pl-20 mb-5 border-b relative' >
         
          
          <img src={item.url} className='w-40 text-center' alt="" />
          <p className='text-center h-full w-[30%] ' >{item.name}</p>
          <FaRegTrashAlt className= ' absolute  right-14' onClick={()=>handlearray(item,key) }  />  
          </li>
      ))}
      </> : <>{
        arrays.map((item,key)=>(
          
      item &&   <li key={key} className='flex justify-evenly text-center items-center pl-20 mb-5 border-b relative' >
        <img src={item.url} className='w-40 text-center' alt="" />
    
        <p className='text-center h-full w-[30%] ' >{item.name}</p>
        <FaRegTrashAlt className= ' absolute  right-14' onClick={()=>handlearray(item,key)} />    
              </li>
      ))}</>}
      </ul>
    </div>
  )
}

export default Cart
