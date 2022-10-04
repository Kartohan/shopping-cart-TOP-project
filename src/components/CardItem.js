import React from "react";

const CardItem = ({ obj, removeFromCard }) => {
  const remove = () => {
    removeFromCard(obj.name);
  };
  return (
    <div className="">
      <div className="flex py-8 relative">
        <img className="h-40 w-auto" src={obj.img} alt={obj.name} />
        <div className="flex flex-col gap-2 justify-center pl-5">
          <h1 className="text-xl w-full">{obj.name}</h1>
          <h2>Item price: {obj.price}</h2>
          <h2>Amount: {obj.amount}</h2>
          <h2 className="text-xl border-t border-slate-500">
            Total: {(obj.price * obj.amount).toFixed(2)}
          </h2>
        </div>
        <button
          onClick={remove}
          className="absolute right-px top-1/3 px-4 py-3 bg-red-300 rounded-xl"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CardItem;
