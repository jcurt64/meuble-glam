import React from "react";

function ItemLegal({ title, subtitle, children }) {
  return (
    <div className="flex flex-col space-y-3 mt-8 border rounded  px-6 py-10">
      <p className="font-InterFont tracking-wide font-bold dark:text-gray-300 text-slate-700 ">
        {title}
      </p>
      <p className="font-MonoFont text-sm text-justify dark:text-gray-300 text-slate-700 tracking-wide">
        {subtitle}
      </p>
      <p>{children}</p>
    </div>
  );
}

export default ItemLegal;
