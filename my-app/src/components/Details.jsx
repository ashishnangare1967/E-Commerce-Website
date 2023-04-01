import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Authentication/AuthContext";

const getdata = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Details = () => {
  const { id } = useParams();
  const { gender } = useContext(AuthContext);

  const [loading, setLoding] = useState(false);
  const [err, seterr] = useState(false);
  const [go, setGo] = useState(false);

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
    return axios.post("http://localhost:3500/cart", res);
  };

  useEffect(() => {
    fetchsingledata(`http://localhost:3500/${gender}/${id}`);
  }, [id, gender]);

  return (
    <div className="p-24">
      {loading ? (
        <h1>sds</h1>
      ) : (
        <>
          <h3>{res.id}</h3>
          {go && (
            <img
              src={res.image === undefined ? res.images[1] : res.image}
              alt="asterisk"
            />
          )}
          <button onClick={postCart}>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default Details;
