"use client";
import { fetchWeatherData } from "@/actions/actions";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const Form = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const result = event.currentTarget.value.replace(/[^a-z]/gi, "");

    setMessage(result);
  };
  return (
    <form className="" action={fetchWeatherData}>
      <div className="flex items-center gap-3">
        <div>
          <label htmlFor="city" className="text-gray-400">
            City
          </label>
          <input
            type="text"
            name="city"
            value={message}
            onChange={handleChange}
            className="outline-0 peer py-2 pe-0 ps-3 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-md focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-100 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
          />
        </div>
        <button
          type="submit"
          className="text-white self-end p-[13px] bg-gray-300 rounded-xl"
        >
          <FaSearch color="black" />
        </button>
      </div>
    </form>
  );
};
