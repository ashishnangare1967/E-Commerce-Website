import React from 'react'
import { Link } from "react-router-dom";
// import "../index.css"

const Card = ({id, title, brand, price, color, description, category,image}) => {
  return (<Link to={`/productList/${id}`} style={{ textDecoration: "none" }}>
    <div className='w-30 h-50 bg-zinc-100 flex flex-col  items-center'>
      
      <div><img className='w-40  object-fill block' src={image.includes("https://")? image: `https://${image}`}/></div>
      <p className='w-40 h-9 overflow-hidden text-justify leading-4'>{title}</p>
      <h2 className='font-semibold'>Rs. {price}</h2>
         
    </div>
    </Link>
  )
}

export default Card
