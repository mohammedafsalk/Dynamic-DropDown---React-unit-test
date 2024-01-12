import React, { useState } from "react";
import data from "../Metadata/data";
import { getdata } from "../Axios/service";

export default function Select({setValues}) {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleSelect = async (item) => {
    toggleDropdown();
    let { data } = await getdata(item);
    if (data.success) {
      setValues(data.values);
    } else {
      console.log(data.message);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 s:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
      >
        Choose an option
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm">
            {data.map((item, i) => (
              <li key={i}>
                <p
                  onClick={() => handleSelect(item.value)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-white cursor-pointer"
                >
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
