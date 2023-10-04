import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id='about' className="h-screen">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center max-md:pt-16">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/aboutquiz.png"
              height={500}
              width={500}
            />
          </div>
          <div className="container mx-auto px-5 md:flex-row lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
            <div className="">
              <h1 className="font-bold sm:text-4xl text-3xl mb-4 text-[#FED766] font-primary">
                About the Quiz
              </h1>
              <p className="mb-8 leading-relaxed text-white font-medium font-secondary text-lg">
              Talent search for Tech Savy

CSI Vellore in association with Chennai, Trivandrum, Kancheepuram, Trichy, Coimbatore, Salem, Cochin and Sivakasi is thrilled to organize our second National Quiz. Are you ready to take on a challenge and test your skills? The event aims to encourage students to take quizzing as a passion and to brush up their knowledge in computer science. 
•	Eligibility: The competition is open for all graduates/postgraduates
•	Participation: Individual participation
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
            <h1 className="font-primary font-bold sm:text-4xl text-3xl mb-4 text-[#FED766]">
              About CSI
            </h1>
            <p className="mb-8 leading-relaxed text-white font-medium font-secondary text-lg">
            Computer Society of India (CSI) is the largest association of IT professionals in India. CSI is a non-profit organization established in 1965 and its members are committed to the advancement of theory and practice of Computer Engineering and Technology Systems. The Mission of CSI is to facilitate research, knowledge sharing, learning and career enhancement for all categories of IT professionals, while simultaneously inspiring and nurturing new entrants into the industry and helping them to integrate into the IT community

            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
