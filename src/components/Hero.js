import React from "react";

const Hero = () => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return (
    <div className='bg-[url("https://cdn.pixabay.com/photo/2022/10/03/23/41/house-7497001__340.png")] h-96 w-full bg-cover bg-center p-20'>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-4xl font-bold text-center">
          Hero section with background image 1
        </h1>
        <p className="text-lg text-center text-white">Test merge 12345</p>
        <div className="mt-4">
          <h1 align="center">Current Time</h1>
          <h2 align="center"> {showTime}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
