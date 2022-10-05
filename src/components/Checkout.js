import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Checkout = ({ removeCard, items }) => {
  const [bought, setBought] = useState(false);
  useEffect(() => {
    removeCard();
    let overallAmount = items.reduce((accum, next) => accum + next.amount, 0);
    if (overallAmount === 0) {
      setBought(true);
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10">
      {bought ? (
        <h1 className="text-2xl px-4 py-2 bg-slate-300 rounded-lg text-center">
          You just boguht all the items! Thanks! You can reload the page to fill
          up the shop
        </h1>
      ) : (
        <div className="flex flex-col justify-center items-center gap-10 mt-10">
          <h1 className="text-2xl px-4 py-2 bg-slate-300 rounded-lg text-center">
            There is no checkout because this is not the real shop 😊 <br />{" "}
            Thanks for purchasing, your card is clean, you can continue shopping
          </h1>
          <div className="">
            <Link className="px-10 py-4 bg-green-300 rounded-xl" to="/shop">
              Return to shop
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
