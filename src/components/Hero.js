import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
const Hero = () => {
  const [data, setData] = useState(null);

  const wasCalled = useRef(false);
  useEffect(() => {
    if (wasCalled.current) return;
    wasCalled.current = true;

    fetch("http://194.60.201.145:8080/api/container", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='bg-[url("https://cdn.pixabay.com/photo/2022/10/03/23/41/house-7497001__340.png")] h-96 w-full bg-cover bg-center p-20'>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-4xl font-bold text-center">
          Hero section with background image 1
        </h1>
        <p className="text-lg text-center text-white">Test merge 12345</p>
        <div className="mt-4">
          <h1 className="text-center">Container name</h1>
          <h2 className="text-center text-white text-[30px]"> {data}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
