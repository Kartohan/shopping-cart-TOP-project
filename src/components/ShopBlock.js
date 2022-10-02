import React, { useState, useEffect, useRef } from "react";

const ShopBlock = ({ item, addToCard }) => {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(item.amount);
  const addBtn = useRef();

  const increaseValue = () => {
    if (amount <= count) {
      return;
    } else {
      setCount(count + 1);
    }
  };

  const decreaseValue = () => {
    if (count <= 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (amount === 0) {
      return;
    } else {
      setAmount(amount - count);
      addToCard(item.name, item.price, count);
    }
  };

  useEffect(() => {
    if (amount === 0) {
      setCount(0);
      addBtn.current.disabled = true;
    } else {
      setCount(1);
    }
  }, [amount]);

  return (
    <div>
      <div className="w-64 shadow-lg rounded-lg flex items-center flex-col gap-2">
        <div className="w-full h-2/3">
          <img
            className="rounded-b-xl shadow-md h-full object-cover w-full"
            src="https://steamuserimages-a.akamaihd.net/ugc/1678114490702494086/E640BE93B941655D46DB0130D04F96C269FF04AD/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            alt=""
          />
        </div>
        <h1 className="text-xl text-center">{item.name}</h1>
        <h2>Price {item.price}</h2>
        <div>
          <button
            className="px-2 mr-2 bg-gray-200 rounded-xl"
            onClick={increaseValue}
          >
            +
          </button>
          <span className="px-2 py-2 bg-gray-200 rounded-md">{count}</span>
          <button
            className="px-2 ml-2 bg-gray-200 rounded-xl"
            onClick={decreaseValue}
          >
            -
          </button>
        </div>
        <h3 className="text-xs">Available: {amount}</h3>
        <button
          ref={addBtn}
          onClick={add}
          className="px-10 bg-slate-700 py-2 rounded-xl text-white mb-4 disabled:bg-gray-400"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ShopBlock;
