import React from 'react';
import { FaGlobe, FaFileAlt, FaEye, FaCloud, FaAt, FaLaptop,FaShieldAlt, FaChevronRight } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const SecuritySolution = ({ Icon, title, description }) => (
    <div className="bg-gray-900 p-6 rounded-lg flex flex-col relative overflow-hidden weOfferBox" style={{border:'1px solid #353233'}}>
      <div className="absolute hoverIcons">
          <Icon className="text-[#E0FFFF] svgParent" />
          {/* <FaShieldAlt className="svgChild text-[#E0FFFF] text-sm absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4" /> */}
        </div>
      <div className="flex items-center mb-4">
        <div className="relative">
          <Icon className="text-[#E0FFFF] svgParent" />
          <FaShieldAlt className="svgChild glow-text-noshadow text-sm absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4" />
        </div>
        <h3 className="text-2xl font-semibold text-[#E0FFFF] ml-6">{title}</h3>
      </div>
      <div className="border-t border-gray-700 my-4"></div>
      <p className="text-gray-400 mb-4 flex-grow py-8">{description}</p>
      <a href="#" className="readmoreBtn hover:underline flex items-center">
        <FaChevronRight className="mr-1 text-sm" />
        Read More
      </a>
    </div>
  );

const WeOffer = () => {
  const solutions = [
    { Icon: FaGlobe, title: "Network Security Solution" },
    { Icon: FaFileAlt, title: "Secure & Data Encryption" },
    { Icon: FaEye, title: "Threat Detection & Response" },
    { Icon: FaCloud, title: "Secure Cloud Solutions" },
    { Icon: FaAt, title: "Identity & Access Management (IAM)" },
    { Icon: FaLaptop, title: "Managed IT Security Services" },
  ];

  return (
    <div className="customBackRadGradient text-white p-8">
      <h2 className="flex flex-col items-center gap-2 text-lg uppercase tracking-wider mb-4 glow-text">WHAT WE OFFER<div className='straightLine'></div></h2>
      <h1 className="text-6xl font-bold text-[#E0FFFF] text-center mb-12">Your Trusted Security Solution</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] m-auto">
        {solutions.map((solution, index) => (
          <SecuritySolution
            key={index}
            Icon={solution.Icon}
            title={solution.title}
            description="Lorem ipsum dolor sit amet conse adipiscing elit nunc venenatis ac dia nec commod etiam mollis nisl ac vehicula auctor."
          />
        ))}
      </div>
    </div>
  );
};

export default WeOffer;