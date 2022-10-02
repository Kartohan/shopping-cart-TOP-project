import React, { useState } from "react";
import ShopBlock from "./ShopBlock";

const Shop = () => {
  const [card, setCard] = useState([]);
  const items = [
    {
      name: "One",
      price: 1.03,
      amount: 2,
    },
    {
      name: "Lamborgini",
      price: 12.03,
      amount: 5,
    },
    {
      name: "A mojet cucini?",
      price: 0.03,
      amount: 100,
    },
  ];
  const addToCard = (name, price, amount) => {
    let newCard = [...card];
    if (newCard.length === 0) {
      setCard([...newCard, { name, price, amount }]);
    } else {
      newCard.map((item) => {
        if (item.name === name) {
          item.amount = item.amount + amount;
          setCard([...newCard]);
        } else {
          setCard([...newCard, { name, price, amount }]);
        }
      });
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl pt-20 pb-20">Shop</h1>
      <div className="flex flex-wrap justify-center px-20 gap-10">
        {items.map((item, index) => (
          <ShopBlock item={item} addToCard={addToCard} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
