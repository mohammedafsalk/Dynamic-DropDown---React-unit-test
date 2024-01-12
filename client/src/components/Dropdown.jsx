import React, { Suspense, useState } from "react";
import Select from "./Select";
import Card from "./Card";

export default function Dropdown() {
  const [values, setValues] = useState([]);

  return (
    <>
      <div className="flex flex-col justify-between p-5">
        <div>
          <div className="flex flex-col  items-center ">
            <div>
              <h1 className="text-black text-8xl font-extrabold uppercase">
                Data Spot
              </h1>
              <p className="text-start">- Choose your data -</p>
            </div>
          </div>
          <div></div>
          <div className="flex justify-center my-3 mt-3 sm:mt-10">
            <Select setValues={setValues} />
          </div>
        </div>
        <div>
          <Card values={values} />
        </div>
      </div>
    </>
  );
}
