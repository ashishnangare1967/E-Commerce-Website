import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../../Authentication/AuthContext'
// import { ApigetData } from './api';
import { AuthContext } from "../Authentication/AuthContext";
import { ApigetData } from "./Category/api";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const { total, setTotal } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);

  const { gender, setGender } = useContext(AuthContext);
  setGender("cart");
  const [val, setVal] = useState(1);
  // console.log(gender)

  function getData() {
    axios.get(`http://localhost:3500/cart`).then((res) => {
      setproducts(res.data);
      setLoading(false);
      // console.log(res.data);
    });
    setLoading(true);
  }
  function handelOrder() {
    alert("Order is Successful");
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, [total]);
  return (
    <div className="pt-20 md:pt-40">
      <div className="bg-zinc-400 flex justify-between font-bold p-2">
        <h1 className="">Total: </h1>
        <h1>Rs. {total}</h1>
        <button onClick={handelOrder}>Order Now</button>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 w-full gap-10 pt-10">
        {products.map((el) => (
          <Card key={el.id} {...el} gender={gender} getData={getData} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
