import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
// import { AuthContext } from '../../Authentication/AuthContext'
// import { ApigetData } from './api';
import { AuthContext } from "../Authentication/AuthContext";
import { ApigetData } from "./Category/api";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [sort, setSort] = useState(null);
  const { gender, setGender } = useContext(AuthContext);
  setGender("cart");
  useEffect(() => {
    function getData() {
      axios.get(`http://localhost:3500/cart`).then((res) => {
        setproducts(res.data);
        setLoading(false);
      });
      setLoading(true);
    }
    getData();
  }, []);
  return (
    <div className="bg-red-300 grid grid-cols-2 md:grid-cols-4 w-full gap-10 pt-40">
      {products.map((el) => (
        <Card key={el.id} gender={gender} {...el} />
      ))}
    </div>
  );
};

export default Cart;
