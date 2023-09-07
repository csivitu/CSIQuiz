import React from "react";

const Sponsors = () => {
  return (
    <div>
      <section className="">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/Sponsor.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-white font-medium">
          <div className="px-4">
            <h1 className="font-bold sm:text-4xl text-3xl mb-4 text-[#FED766]">
              Meet Our Sponsor
            </h1>
            </div>
            <div className="px-4 py-2">
              Pi One Technologies is a leading provider of enterprise technology
              solutions that help businesses redefine the future of work,
              enterprise, and experience. We digitize operations, innovate
              products and services, and disrupt the status quo.
            </div>
            <div className="px-4 py-2">
              We help our customers digitize their operations by providing them
              with the tools and solutions they need to automate and streamline
              their processes. We also help them innovate by developing new
              products and services that meet the needs of the ever-changing
              marketplace. And we disrupt the status quo by challenging the way
              businesses operate and deliver value to their customers.
            </div>
            <div className="px-4 py-2">
              We have the experience, the expertise, and the technology to help
              our clients to achieve their technology goals.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
