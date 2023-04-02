import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import gold from "../images/gold.jpg";
// import "../index.css"
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../Authentication/AuthContext";
const Card = (res) => {
  const { total, setTotal } = useContext(AuthContext);
  const [go, setGo] = useState(true);
  const [val, setVal] = useState(1);

  function getStar() {
    return <img className="object-contain pb-1 h-6 w-8 inline " src={gold} />;
  }
  // console.log(gender)
  // useEffect(()=>{setTotal(p=>p+ Number(res.price))},[])
  function add() {
    setVal((p) => p + 1);
    setTotal((p) => p + Number(res.price));
  }
  function min() {
    setVal((p) => p - 1);
    setTotal((p) => p - Number(res.price));
  }
  // console.log(gender)

  const postCart = () => {
    setGo(false);
    setTotal(p=>p+ Number(res.price))
    return axios.post("http://localhost:3500/cart", { ...res, cart: "Added" });
  };
  const handleDeleteData=()=>{
    alert("deleted")
    setTotal(p => p - Number(res.price));
    return axios({
        method:"delete",
        url:`http://localhost:3500/cart/${res.id}`
    }).then(()=>{res.getData()})
}
  return (
    <div className="w-30 h-50 bg-zinc-100 flex flex-col  items-center">
      <div>
        <Link to={`/productList/${res.id}`}>
          <img
            className="object-contain pt-2 h-48 w-56"
            src={res.image === undefined ? res.images[1] : res.image}
            alt="asterisk"
          />
        </Link>
      </div>

      <p className="w-40 h-9 overflow-hidden text-center leading-4 font-semibold">
        {res.title}
      </p>
      <h2 className="font-bold">Rs. {res.price}</h2>
      <p className="p-0 m-0 text-sm">
        Rating : {res.rating ? res.rating : 4.44}
        {getStar()}
      </p>
      {/* <p className="p-0 m-0 text-sm"></p> */}

      {res.gender === "cart" ? (
        <div className="flex">
          <button className="px-1" onClick={add}>
            +
          </button>
          <lable>{val}</lable>
          <button disabled={val === 1} className="px-1" onClick={min}>
            -
          </button>
          {val===1 && <button onClick={handleDeleteData} className="ml-2">Delete</button>}
        </div>
      ) : (
        <button onClick={postCart}>{go ? "add to Cart" : "Added"}</button>
      )}
    </div>
  );
};

export default Card;
