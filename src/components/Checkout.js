import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Checkout = ({ removeCard }) => {
  useEffect(() => {
    removeCard();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10">
      <h1 className="text-2xl px-4 py-2 bg-slate-300 rounded-lg text-center">
        There is no checkout because this is not the real shop 😊 <br /> Thanks
        for purchasing, your card is clean, you can continue shopping
      </h1>
      <div className="">
        <Link className="px-10 py-4 bg-green-300 rounded-xl" to="/shop">
          Return to shop
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
