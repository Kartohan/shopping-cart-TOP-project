import React from "react";
import { Liquid } from "../assets";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-full h-1/4 relative">
        <img
          className="right-0 top-0 -z-10 h-full w-full object-cover absolute blur-sm scale-y-105"
          src={Liquid}
          alt=""
        />
        <h1 className="text-center font-bold text-4xl pt-24 pb-24 text-white">
          Welcome to our shop!
        </h1>
      </div>
      <div className="flex justify-center items-center mt-10 flex-col gap-8">
        <div className="text-2xl">
          In this application you can buy free pictures for not a real money! 💰
        </div>
        <div className="text-2xl">
          All the pictures you can find in the shop section!
        </div>
        <div className="text-2xl">
          To complete checkout press on the Shopping cart 🛒 in the menu above
        </div>
        <Link className="px-10 py-4 bg-green-300 rounded-xl" to="/shop">
          Go shopping
        </Link>
      </div>
    </div>
  );
};

export default Home;
