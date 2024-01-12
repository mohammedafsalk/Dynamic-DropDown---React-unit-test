import React from "react";

export default function Card({ values }) {
  console.log(values);
  return (
    <div className="flex justify-center  gap-2 mt-5">
      <div className="w-[200px] p-4 text-center border border-black  rounded-lg transition duration-300">
        {values.map((item) => (
          <p className="font-medium">{item.name}</p>
        ))}
      </div>
    </div>
  );
}
