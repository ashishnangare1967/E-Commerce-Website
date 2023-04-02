import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Authentication/AuthContext";
import gold from "../images/gold.jpg";

const getdata = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
function getStar() {
  return <img className="object-contain pb-1 h-6 w-8 inline " src={gold} />;
}

const Details = () => {
  const { id } = useParams();
  const { gender } = useContext(AuthContext);

  const [loading, setLoding] = useState(false);
  const [err, seterr] = useState(false);
  const [go, setGo] = useState(false);
  const [added, setAdded] = useState(true);

  const [res, setRes] = React.useState({});
  // console.log(id);
  // console.log(data)
  const fetchsingledata = (url) => {
    setLoding(true);
    getdata(url)
      .then((res) => {
        setRes((p) => res);
        console.log(res);
        setGo(true);
      })
      .catch(() => {
        seterr(true);
      })
      .finally(() => {
        setLoding(false);
      });
  };

  const postCart = () => {
    setAdded(p=>!p)
    return axios.post("http://localhost:3500/cart", res);
  };

  useEffect(() => {
    fetchsingledata(`http://localhost:3500/${gender}/${id}`);
  }, [id, gender]);

  return (
    <div className="p-44 flex justify-center items-center bg-zinc-200">
      {loading ? (
        <h1 className="">Loading....</h1>
      ) : (
        <>
          {go && (
            <img
              className="object-contain pt-2 h-68 w-86"
              src={res.image === undefined ? res.images[1] : res.image}
              alt="asterisk"
            />
          )}
          <div>
            <ul>
              <li className="text-xl font-bold mb-auto">{res.brand}</li>
              <li className="text-xl mt-2 font-semibold mb-auto">
                {res.title}
              </li>
              <li className="">
                Rating : {res.rating ? res.rating : 4.44}
                {getStar()}
              </li>
              <li>Available Quantity: {res.quantity ? res.quantity : 43}</li>
              {res.description && (
                <li className="reading-3 py-0 text-md">
                  Description: {res.description}
                </li>
              )}
              <li>Rs. {res.price} </li>
            </ul>
            <button className="ml-4" onClick={postCart}>{added ? "add to Cart" : "Added"}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
