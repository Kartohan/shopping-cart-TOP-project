import React from "react";

const CardItem = ({ obj }) => {
  return (
    <div className="">
      <div className="flex py-8">
        <img
          className="h-40 w-40"
          src="https://steamuserimages-a.akamaihd.net/ugc/1678114490702494086/E640BE93B941655D46DB0130D04F96C269FF04AD/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          alt=""
        />
        <div className="flex flex-col gap-2 justify-center pl-5">
          <h1 className="text-xl w-full">{obj.name}</h1>
          <h2>Item price: {obj.price}</h2>
          <h2>Amount: {obj.amount}</h2>
          <h2 className="text-xl border-t border-slate-500">
            Total: {(obj.price * obj.amount).toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
