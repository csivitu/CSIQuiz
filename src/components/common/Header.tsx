import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-10">
            <a className="mr-5 text-[#F9F7F7CC] hover:text-white text-2xl font-bold">
              Home
            </a>
            <a className="mr-5 text-[#F9F7F7CC] hover:text-white text-2xl font-bold">
              About
            </a>
            <a className="mr-5 text-[#F9F7F7CC] hover:text-white text-2xl font-bold">
              Sponsors{" "}
            </a>
            <a className="mr-5 text-[#F9F7F7CC] hover:text-white text-2xl font-bold">
              Register
            </a>
          </nav>
          <button className=" inline-flex items-center bg-[#FED766] border-0 text-[#102D4D] text-2xl rounded-2xl py-1 px-6 font-bold focus:outline-none hover:bg-yellow-400 mt-4 md:mt-0">
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
