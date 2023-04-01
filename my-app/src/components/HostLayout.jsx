import React from "react";
import { Link, Outlet } from "react-router-dom";
const HostLayout = () => {
  return (
    <div className="flex pt-40 relative">
      <ul className="pt-10">
        <li>
          <Link to="kids">Kids</Link>
        </li>
        <li>
          <Link to="men_shoes">Mens Shooes</Link>
        </li>
        <li>
          <Link to="men_clothes">Men Clothes</Link>
        </li>
        <li>
          <Link to="men_watches">Men Watches</Link>
        </li>
        <li>
          <Link to="sunglasses">Sunglasses</Link>
        </li>
        <li>
          <Link to="women_clothes">Women</Link>
        </li>
        <li>
          <Link to="women_watches">Women Watches</Link>
        </li>
      </ul>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default HostLayout;
