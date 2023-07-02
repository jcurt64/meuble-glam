import React from "react";

function RgpdItem({ title, subtitle }) {
  return (
    <div className=" flex flex-col items-start px-6 py-10 border rounded mt-10 mx-4  ">
      <div className="flex items-center  space-x-10  mb-7 mt-5">
        <p className="text-center text-sm md:text-lg font-bold font-MonoFont tracking-wide dark:text-gray-300 text-slate-700">
          {title}
        </p>
      </div>

      <p className="text-left text-sm font-MonoFont tracking-wide dark:text-gray-300 text-slate-700">
        {subtitle}
      </p>
    </div>
  );
}

export default RgpdItem;