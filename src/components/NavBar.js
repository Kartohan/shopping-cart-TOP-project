import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-transparent w-full p-5  bg-slate-800">
        <ul className="flex gap-10 justify-end text-lg mr-20 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
