
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";


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

  const [loading, setLoding] = useState(false);
  const [err, seterr] = useState(false);

  const [res, setRes] = React.useState({});
  // console.log(id);
  // console.log(data)
  const fetchsingledata = (url) => {
    setLoding(true);
    getdata(url)
      .then((res) => {
        setRes(p=>res);
        console.log(res.id)
      })
      .catch(() => {
        seterr(true);
      })
      .finally(() => {
        setLoding(false);
      });
  };

  useEffect(() => {
    fetchsingledata(`http://localhost:3500/men/${id}`);
  }, [id]);
 
  return (
    <div className="p-24">
     <h3>{res.id}</h3>
     <img src={ +(res.id) > 74? `https://${res.image}`: res.image}/>
    </div>
  )
}

export default Details

