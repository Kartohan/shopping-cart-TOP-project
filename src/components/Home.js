import React from "react";

const Home = () => {
  return (
    <div>
      <div className="w-full h-1/4 relative">
        <img
          className="right-0 top-0 -z-10 h-full w-full object-cover absolute blur-sm scale-105"
          src="https://get.wallhere.com/photo/liquid-lava-1501595.jpg"
          alt=""
        />
        <h1 className="text-center font-bold text-4xl pt-24 pb-24 text-white">
          Welcome to our shop!
        </h1>
      </div>
    </div>
  );
};

export default Home;
