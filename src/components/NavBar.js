import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CheckoutLogo } from "../checkout.svg";

const NavBar = ({ card }) => {
  return (
    <>
      <nav className="bg-transparent w-full p-5  bg-slate-800">
        <ul className="flex gap-10 justify-end text-lg mr-20 text-white">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link className="flex" to="/card">
            <CheckoutLogo className="w-6 h-6 text-white m-0" />
            {card.length}
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
