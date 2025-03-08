import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
function Men() {
    const [data,setdata] = useState([])
    const [header,setheader] = useState()
    let urls = []
    useEffect(()=>{
        axios.get("http://localhost:8000/alluser")
        .then(res=>{
           setdata(res.data)
           console.log(res)

            
        })
    },[])

    urls = data.map((cards)=>(
        cards.url
    ))
    console.log(urls)
    
  return (

    
    <div>
        
        <div>
        {
        <ul className='   flex flex-wrap gap-1 gap-y-2 w-screen justify-evenly mt-20 items-center px-36' >
            {
                data.map((card,key)=>(
                    <li className=' relative min-w-[150px] h-[250px] border rounded-md justify-center flex items-center bottom-0' key={key} >
                        <p className=' absolute bottom-3' >{card.header}</p>
                    <img  className='w-[100%] h-[80%] rounded-md absolute top-0' src={card.url} alt="" />
                    </li>
                ))
            }
        </ul>
      }
        </div>
     
    </div>
  )
}

export default Men
