import React from "react";
import { Link } from "react-router-dom";
// import "../index.css"

const Card = (res) => {
  // const [go, setGo]= useState(false)
  return (
    <Link to={`/productList/${res.id}`}>
      <div className="w-30 h-50 bg-zinc-100 flex flex-col  items-center">
        <div>
          {
            <img
              className="object-contain h-48 w-96"
              src={res.image === undefined ? res.images[1] : res.image}
              alt="asterisk"
            />
          }
        </div>

        <p className="w-40 h-9 overflow-hidden text-justify leading-4">
          {res.title}
        </p>
        <h2 className="font-semibold">Rs. {res.price}</h2>
      </div>
    </Link>
  );
};

export default Card;
