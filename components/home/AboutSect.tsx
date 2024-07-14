import React from 'react';
import Image from 'next/image';
import { coloursConfig } from '../constants';

const AboutSec = () => {
  return (
    <div className="bg-[#111827] text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-">
        {/* Left Column */}
        <div className="col-span-1 flex flex-col justify-between">

            <h2 className="flex items-center gap-2 text-lg uppercase tracking-wider mb-4 glow-text"><div className='straightLine'></div>ABOUT</h2>
          <div>
            <h3 className=" text-4xl font-bold mb-2 glow-text-noshadow">Cyber Security</h3>
            <h3 className="relative right-12 text-4xl font-bold mb-2 opacity-60 strikText">Cyber Security</h3>
            <h3 className="relative left-12 text-gray-500 text-4xl font-bold">Cyber Security</h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 flex flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#E0FFFF]">
            Leading the charge in cyber defense innovation
          </h1>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nunc venenatis ac dia nec commodo etiam mollis nisl ac vehicula
            auctor erat nisi sollicitudin nisi non ultrices ante ante in libero cras commodo risus.
          </p>
          
          <div className="relative mb-8 grid grid-cols-6 gap-6">
            <Image 
              src="https://kfkit.rometheme.pro/beyond/wp-content/uploads/sites/84/2024/06/cybersecurity-woman-and-writing-global-location-in-GJ778KR.jpg" 
              alt="Cyber security professional" 
              width={800} 
              height={450} 
              className="rounded-lg col-span-4 flex flex-col"
            />
            <div className="col-span-2 flex flex-col items-start">
            <Image 
                src="https://kfkit.rometheme.pro/beyond/wp-content/uploads/sites/84/2024/06/contemporary-young-programmer-standing-by-workplac-BPCK7CT.jpg" 
                alt="Cyber security team member" 
                width={200} 
                height={200} 
                sizes='100%'
                className="rounded-lg w-full"
              />
               <div className="flex justify-between items-end">
            <ul className="space-y-4 mt-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 glow-text" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cyber Defense Innovation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 glow-text" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Protecting Your Digital World
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 glow-text" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure IT Solutions
              </li>
            </ul>
          </div>
            <button className="bg-[#00FFFF] text-white py-[20px] px-[35px] mt-4 rounded-lg hover:bg-[#00CCCC] transition duration-300 glow-button glow-button" >
              More About Us
            </button>
            </div>
          </div>

          {/* <div className="flex justify-between items-end">
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 " fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cyber Defense Innovation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 " fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Protecting Your Digital World
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 " fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure IT Solutions
              </li>
            </ul>
            <button className="bg-[#00FFFF] text-black py-3 px-6 rounded-lg hover:bg-[#00CCCC] transition duration-300 glow-button">
              More About Us
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSec;