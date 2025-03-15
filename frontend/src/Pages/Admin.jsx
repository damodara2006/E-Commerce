import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Admin() {
  let publicId;
  const [name, setname] = useState();
  const [value, setvalu] = useState(1);
  const [url, seturl] = useState();
  const [pass, setpass] = useState();
  const [access, setaccess] = useState(false);
  const [price, setprice] = useState();
  const password = "999428";
  const handlefiles = async (e) => {
    let file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "admin_e-commerce");
    data.append("cloud_name", "dmbiqpg0z");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dmbiqpg0z/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const res = await response.json();
    seturl(res.url);
    const image = await fetch(url);
    const splitted = url.split("/upload/");
    const splitted2 = splitted[1].split(".");
    const splitted3 = splitted2[0].split("/");
    publicId = splitted3[1];
  };

  const handleheader = () => {
    if (name && url && price) {
      axios
        .post(`http://localhost:8000/${value}`, { name, url, price })
      setname("");
      toast.success("Done");
    }
  };
  function handleuser() {
    const para = document.getElementById("text");
    if (pass == password) {
      const para = document.getElementById("text");
      setaccess(true);
      para.innerText = "Hello Master!";
      setpass("");
    } else para.innerText = "Password incorrect";
  }

  return (
    <div className="flex w-screen flex-col justify-center items-center">
      <ToastContainer />

      <div className="mt-10">
        <input
          type="text"
          value={pass}
          className=" outline-1 outline-gray-400 pl-2"
          placeholder="Enter your password"
          onChange={(e) => setpass(e.target.value)}
        />
        <button className="border" type="submit" onClick={handleuser}>
          Confrim
        </button>
        <p className="text-center" id="text"></p>
      </div>
      {access && (
        <>
          <p className="text-center mt-20">Add products here</p>
          <select
            className="w-[15%] flex text-center  "
            name="Select"
            id="items"
            value={value}
            onChange={(e) => setvalu(e.target.value)}
          >
            <option value="1">Men</option>
            <option value="2">Women</option>
            <option value="3">Electronics</option>
            <option value="4">Jewellery</option>
            <option value="5">Shoes</option>
            <option value="6">Kid's Wear</option>
            <option value="7">Sports</option>
            <option value="8">Toys</option>
          </select>
          <div type="form" className="flex justify-center">
            <input
              type="text"
              className="border pl-7"
              placeholder="Enter the name of product"
              name=""
              id=""
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center flex-col text-center">
            <input
              type="file"
              className="file-input border"
              placeholder=""
              id="inputfile"
              onChange={(e) => handlefiles(e)}
            />
            <input
              type="text"
              value={price}
              className="border"
              placeholder="Enter the price"
              onChange={(e) => setprice(e.target.value)}
            />
            <img src={url} className="w-6/12 h-6/12" alt="" />
            <button className="border" type="submit" onClick={handleheader}>
              SUBMIT
            </button>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default Admin;
