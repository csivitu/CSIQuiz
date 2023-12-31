import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-20">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-20 font-secondary pr-16">
            <a className="text-[#F9F7F7CC] hover:text-white text-2xl font-bold" href="#home">
              Home
            </a>
            <a className="text-[#F9F7F7CC] hover:text-white text-2xl font-bold" href="#about">
              About
            </a>
            <a className="text-[#F9F7F7CC] hover:text-white text-2xl font-bold" href="#sponsors">
              Sponsors{" "}
            </a>
            <Link href="/signup" className="text-[#F9F7F7CC] hover:text-white text-2xl font-bold">
              Register
            </Link>
          
          <Link className=" inline-flex items-center bg-[#FED766] border-0 text-[#102D4D] text-2xl rounded-2xl py-1 px-6 font-bold focus:outline-none hover:bg-yellow-400 md:mt-0" href= "/login">
            Sign In
          </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;