import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import { BACKEND_URL } from "@/constants";

const Signup = () => {
  const router = useRouter(); // Initialize the history hook
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [repeatPassword,setRepeatPassword] = useState('')

  const handleSubmit =  async (e: { preventDefault: () => void; })=>{
    e.preventDefault()
    if(password !== repeatPassword){
      toast.error("Passwords do not match")
      return
    }
    const payload = {
      email: email,
      password: password
    }
    try{
      const response = await axios.post(`${BACKEND_URL}/register`,payload)
      const cookieToken = response.data.token;
      Cookies.set('token', cookieToken);
      toast.success("Successfully Registered");
      router.push("/");
      return;
    }
    catch(err:any){
      toast.error(err.response.data.error)

    }

  }

  return (
    <div id="signup" className="min-h-screen flex items-center justify-center bg-white">
      <form className="w-1/5" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <Image src="/Illustration.svg" alt="logo" width={200} height={200} />
        </div>

        <div className="text-center font-bold text-3xl pb-3">Sign Up</div>
        <div className="text-center text-gray-500 text-lg">
          Lets get started
        </div>
        <div className="mb-6">
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
        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm  border border-black text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="*******"
            required
            onChange = {(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>
  );
};

export default Signup;
