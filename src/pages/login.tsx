import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Signup = () => {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // This code will only run on the client side
    localStorage.removeItem("token");
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      alert("Login Successful!");
      localStorage.setItem("token", data.user);
      navigate.push("/");
    } else if (data.status === "passerror") {
      alert("Wrong Password Try Again");
    } else {
      alert("You need to register first.");
      navigate.push("/signup");
    }
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="w-1/5"
      onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">
          <Image src="/Illustration.svg" alt="logo" width={200} height={200} />
        </div>

        <div className="text-center font-bold text-3xl pb-3">
          Log in to your account
        </div>
        <div className="text-center text-gray-500 text-lg">
          Welcome back! Please enter your details.
        </div>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
