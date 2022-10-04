import React from "react";
import CardItem from "./CardItem";

const Card = ({ card, removeFromCard }) => {
  function totalPrice() {
    let price = 0;
    card.map((item) => {
      price = price + item.price * item.amount;
    });
    return price.toFixed(2);
  }
  return (
    <div className="">
      <h1 className="text-center font-bold text-4xl pt-20 pb-20">Your items</h1>
      <div className="mx-10 p-12 bg-slate-200 rounded-lg divide-y divide-slate-500 lg:w-2/3 lg:mx-auto mb-10">
        {card.map((item, index) => (
          <CardItem obj={item} key={index} removeFromCard={removeFromCard} />
        ))}
        <h1 className="text-2xl pt-2">Total price: {totalPrice()}</h1>
      </div>
    </div>
  );
};

export default Card;
