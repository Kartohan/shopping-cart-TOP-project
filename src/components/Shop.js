import React from "react";
import ShopBlock from "./ShopBlock";

const Shop = ({ addToCard, items }) => {
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
