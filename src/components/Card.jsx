import React, { useState } from "react";
export default function Card({
  heading = "Student",
  description = "Number of Students",
  number = "68"
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className=" m-4 rounded-lg shadow-md lg:max-w-xl w-full h-full"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="p-10 bg-white hover:bg-purple-900 hover:text-white rounded-xl transition ease-in-out delay-150">
        <h4
          className={`${
            isHover && "text-white"
          } text-xl font-semibold tracking-tight ${
            !isHover && "text-blue-600"
          } text-left mb-2 transition ease-in-out delay-150`}
        >
          {heading}
        </h4>
        <p
          className={`${
            isHover && "text-white"
          } mb-2 leading-normal text-slate-400 text-left transition ease-in-out delay-150`}
        >
          {description}
        </p>
        <h2
          className={`${isHover && "text-white"} ${
            !isHover && "text-blue-600"
          } text-xl font-semibold tracking-tight text-left transition ease-in-out delay-150`}
        >
          {number}
        </h2>
      </div>
    </div>
  );
}
