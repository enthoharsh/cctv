import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurProduct = () => {
    const cards = [
        { 
          title: 'Network Security Solutions', 
          image: 'https://kfkit.rometheme.pro/beyond/wp-content/uploads/sites/84/2024/06/cutting-the-wire-young-man-is-working-with-interne-ZUJJ3JD.jpg',
          size: 'col-span-6',
          link:'/network-security-solution'
        },
        { 
          title: 'Converting Data into Intelligence', 
          image: 'https://kfkit.rometheme.pro/beyond/wp-content/uploads/sites/84/2024/06/technology-face-detection-concept-artificial-intel-YMD7NTT.jpg',
          size: 'col-span-6',
          link:'/network-security-solution'
        },
        // { 
        //   title: 'Data Encryption and Protection', 
        //   image: 'https://kfkit.rometheme.pro/beyond/wp-content/uploads/sites/84/2024/06/vertical-image-of-advanced-cybersecurity-encryptio-QQV4R95.jpg',
        //   size: 'col-span-3' 
        // }
      ];
    
  return (
    <div className="bg-gray-900 text-white p-8 pb-12">
    <div className="max-w-7xl mx-auto">
      <header className="mb-4">
        <div className="flex items-center">
          {/* <div className="w-8 h-0.5 bg-orange-500 mr-3"></div> */}
          <h2 className="flex items-center gap-2 text-lg uppercase tracking-wider mb-4 glow-text"><div className='straightLine'></div>Our Product</h2>
        </div>
      </header>
      
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-[#E0FFFF] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
          Simple to use tools for intricate security requirements
        </h1>
        <button className="bg-[#00FFFF] text-white py-[20px] px-[35px] mt-4 rounded-lg hover:bg-[#00CCCC] transition duration-300 glow-button glow-button" >
          Views All Tools
        </button>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
      {cards.map((card, index) => (
            <Link 
            href={card.link}
            key={index} 
            className={`relative overflow-hidden rounded-lg ${card.size} transition-transform duration-300 ease-in-out transform hover:-translate-y-2`}
          >
              <div className="aspect-[16/9] w-full">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827] via-black/70 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <button className="flex items-center transition duration-300 readmoreBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  </div>
  );
};

export default OurProduct;