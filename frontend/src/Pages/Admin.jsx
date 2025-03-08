import { useState } from "react";
import axios from "axios";

function Admin() {
    let publicId;
        const [header,setheader] = useState()
        
    const [url , seturl] = useState()
    const handlefiles = async(e)=>{
        const file = e.target.files[0]

        const data = new FormData()
        data.append("file",file)
        data.append("upload_preset","admin_e-commerce")
        data.append("cloud_name","dmbiqpg0z")

        const response = await fetch("https://api.cloudinary.com/v1_1/dmbiqpg0z/image/upload",{
            method:"POST",
            body:data
        })
        const res = await response.json()
        seturl(res.url)
        console.log(url)
        const image = await fetch(url)
        console.log(image)
        const splitted = url.split("/upload/")
        const splitted2 = splitted[1].split(".")
        const splitted3 = splitted2[0].split("/")
        publicId = splitted3[1]
        console.log(publicId)

        
    }

    const handleheader = ()=>{
        console.log(header)
        axios.post("http://localhost:8000/",{header,url})
        .then(res=>console.log(res))
        window.location.reload()
        
    }
    
  return (
    <div className="flex w-screen flex-col" >
      <div type="form" className="flex justify-center" >
            <input type="text" className='border pl-10' placeholder="Enter the name of product" name="" id="" value={header} onChange={(e)=>setheader(e.target.value)} />
        </div>
      <div className="flex justify-center items-center flex-col text-center" >
        <input
          type="file"
          className="file-input border"
          placeholder=""
          id="inputfile"
          onChange={(e) => handlefiles(e)}
        /> 
        <img src={url} className="w-full h-full"  alt="" />
      <button className='border' type="submit"onClick={handleheader} >SUBMIT</button>

      </div>
    </div>
  );
}

export default Admin;
