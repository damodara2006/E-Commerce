import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
function Men() {
    const [data,setdata] = useState([])
    const [header,setheader] = useState()
    useEffect(()=>{
        axios.get("http://localhost:8000/alluser")
        .then(res=>{
           setdata(res.data)
        })
    })
    const handleheader = ()=>{
        console.log(header)
        axios.post("http://localhost:8000/",{header})
        
    }
  return (

    
    <div>
        <div type="form">
            <input type="text" className='border'  name="" id="" value={header} onChange={(e)=>setheader(e.target.value)} />
            <button className='border' type="submit"onClick={handleheader} >SUBMIT</button>
        </div>
        <div>
        {
        <ul className=' p-11 flex flex-wrap gap-2 gap-y-2 w-screen justify-evenly h-screen items-center' >
            {
                data.map((card,key)=>(
                    <li className='w-[150px] h-[250px] border rounded-md justify-center flex items-center' key={key} >{card}</li>
                ))
            }
        </ul>
      }
        </div>
     
    </div>
  )
}

export default Men
