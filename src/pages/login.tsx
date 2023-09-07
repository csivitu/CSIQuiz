import React from "react";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="w-1/5">
        <div className="flex items-center justify-center">
          <Image src="/Illustration.svg" alt="logo" width={200} height={200} />
        </div>

        <div className="text-center font-bold text-3xl pb-3">Log in to your account</div>
        <div className="text-center text-gray-500 text-lg">Welcome back! Please enter your details.</div>
        <div className="my-6">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm  border border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm  border border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="*******"
            required
          />
        </div>
        
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In 
        </button>
      </form>
    </div>
  );
};

export default Signup;
