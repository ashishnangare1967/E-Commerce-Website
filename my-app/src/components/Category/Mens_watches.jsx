import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import { ApigetData } from "./api";

const Mens_watches = () => {
  const { setGender, gender } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [go, setGo] = useState(false);
  setGender((p) => "mens_watches");

  ApigetData({ loading, setLoading, products, setproducts, go, setGo, gender });
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-10">
        {products.map((el) => (
          <Card {...el} />
        ))}
      </div>
    </div>
  );
};

export default Mens_watches;
