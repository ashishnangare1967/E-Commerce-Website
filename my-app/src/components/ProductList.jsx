import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [sort, setSort] = useState(null);
  const [gender, setGender] = useState("sunglasses");
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3500/${gender}`, {
        params: {
          _sort: sort && "price",
          _order: sort,
          brand: brand,
        },
      })
      .then((res) => {
        setproducts(res.data);
        setLoading(false);
      });
  }, [category, brand, sort]);
  let clearFilters = () => {
    setCategory(null);
    setBrand(null);
  };
  return (
    <div className="pt-28">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-10 pt-28">
        {products.map((el) => (
          <Card {...el} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
