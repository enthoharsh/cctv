import BackgroundVideo from "@/components/network-security/BackgroundVideo";
import NetwordSecPointStructure from "@/components/network-security/NetworkSecPointStructure";
import { ArrowDownSvg } from "@/components/social-icons/customicons";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaShieldAlt, FaTwitter } from "react-icons/fa";
import { FaFileAlt, FaChild, FaProjectDiagram, FaSyncAlt } from 'react-icons/fa';
const stats = [
    { percentage: " ", title: "Threat Intelligence" },
    { percentage: " ", title: "Threat Mitigation" },
    { percentage: " ", title: "Threat Response" }
  ];
const stats2 = [
    { percentage: "95%", title: "Improvement in the preparedness of the Units" },
    { percentage: "90%", title: "Coverage of Relevant Cyberspace" },
    { percentage: "98%", title: "Reduction of time taken to complete a case" }
  ];
  const services = [
    [
      "OSINT & SIGINT Fusion",
      "Threat Identification",
      "Unified Adversary View"
    ],
    [
      "Risk Management",
      "Threat Analysis",
      "Bot Detection"
    ],
    [
      "Active Remediation",
      "Impact Assessment",
      "Breach Detection"
    ]
  ];
export default function NetworkSecuritySolution(params) {
    return (
        <>
            <div className='h-[100vh] w-full backshadow relative'>
                <BackgroundVideo />
                <div className="relative w-full h-screen text-white overflow-hidden">
                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
                        <div className="w-[75%] max:w-[70%]">
                            <p className="text-2xl mb-4">Pinaca Platform</p>
                            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
                            Converting Data into Intelligence
                            </h1>
                            {/* <p className="text-sm md:text-base max-w-2xl mt-4">
                                Social Engineering: This involves manipulating individuals into
                                divulging confidential information or taking specific actions.
                            </p> */}
                        </div>

                        <div className="absolute leftCenter left-2 md:left-9 flex flex-col space-y-4">
                            <FaFacebookF className="text-md hover:text-blue-400 cursor-pointer" />
                            <FaTwitter className="text-md hover:text-blue-400 cursor-pointer" />
                            <FaInstagram className="text-md hover:text-blue-400 cursor-pointer" />
                        </div>

                        <div style={{ writingMode: 'vertical-lr' }} className="absolute right-2 md:right-9 rightCenter arrowHover text-sm tracking-widest">
                            <span className="absolute right-[-21px] md:right-[-21px] rightCenter">
                                <ArrowDownSvg />
                            </span>
                            SCROLL DOWN
                        </div>
                    </div>
                </div>
            </div>
    
            <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#E0FFFF] mb-12 flex gap-4 items-center glow-text-noshadow"><div className='straightLine'></div>What we do?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#E0FFFF] mb-4">Our Purpose and Mission.</h3>
            <p className="text-gray-300">
              We assist Strategic Agencies to proactively defend their Cyber and Information Environment
              across physical, information and cognitive domains, against threats.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg relative">
            <h3 className="text-xl font-semibold text-[#E0FFFF] mb-4">How do we achieve this?</h3>
            <p className="text-gray-300">
              We leverage advances in machine learning & emerging technologies to solve difficult challenges
              faced by the Agencies and serve it with usable software.
            </p>
            {/* <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E0FFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div> */}
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#E0FFFF] mb-4">What are we offering to you?</h3>
            <p className="text-gray-300">
              Dedicated Platform to anticipate threats by implementing quicker OODA Loops. Assist in
              preparing to Counter Threats; Measure impact of response to threats from a single unified
              view with in the organization.
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* About Us section */}
        {/* <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image src="/api/placeholder/500/300" alt="About Pinaca" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <p className="text-lg mb-4">Serving Mission Critical Institutions successfully since 2020</p>
                <ul className="list-disc list-inside">
                  <li>SEBI</li>
                  <li>NIA</li>
                  <li>NCBI</li>
                  <li>ED</li>
                  <li>DRI</li>
                  <li>IT DGGI</li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}


<div className="bg-gray-900 text-gray-100 py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-left mb-12 pl-4 glow-text-noshadow flex items-center gap-4"><div className='straightLine'></div>Platform Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((category, index) => (
            <div key={index} className="flex items-center justify-center">
                <div>
              {category.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center mb-4">
                  <span className="text-blue-600 mr-2 text-xl font-bold">+</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="h-px bg-gray-300 mb-4"></div> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-gray-200 mb-2">{stat.percentage}</div>
              <div className="text-3xl font-semibold text-light-cust">{stat.title}</div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-px h-12 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>



        {/* Our Purpose and Mission section */}
        <section id="purpose" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center glow-text-noshadow flex flex-col items-center gap-4">Our Purpose and Mission<div className='straightLine'></div></h2>
            <div className="flex flex-wrap items-start">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <p className="text-lg mb-4">We assist Strategic Agencies to proactively defend their Cyber and Information Environment across physical, information and cognitive domains, against threats.</p>
                <p className="text-lg">We leverage advances in machine learning & emerging technologies to solve difficult challenges faced by the Agencies and serve it with usable software.</p>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <Image src="https://kfkit.rometheme.pro/beyond/wp-content/uploads/sites/84/2024/06/developers-discussing-programming-code-N8CZ4DA.jpg" alt="Our Mission" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* Platform Capabilities section */}

        <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12 glow-text-noshadow flex flex-col items-center gap-4">Key Features<div className='straightLine'></div></h1>
      
      <div className="flex flex-col lg:flex-row items-center mb-16 relative">
        <div className="lg:w-1/2 mb-8 lg:mb-0 relative h-[400px] w-full">
          <Image 
            src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Data Processing" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-5xl font-bold text-center mb-16 text-light-cust">Data Processing</h2>
        <div className="space-y-4">
            <ServiceItem >
              Audio Data: Track Suspects with Audio Fingerprints
            </ServiceItem>
            <ServiceItem >
              
              Image/Video: Spot Suspects & Weapons/Memes
            </ServiceItem>
            <ServiceItem >
              
              Text Data: Translation & Lookup & ChatGPT
            </ServiceItem>
            <ServiceItem >
              
              Social Media: Automatic Tracking
            </ServiceItem>
          </div>
        </div>
        <FaFileAlt 
          className="absolute bottom-4 right-[5%] text-gray-700 opacity-[0.2]" 
          size={200}
        />
      </div>
      
      <div className="flex flex-col-reverse lg:flex-row items-center relative">
        <div className="lg:w-1/2 lg:pr-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 text-light-cust">Platform Advantages</h2>
          <ul className="space-y-4">
            <ServiceItem >
              
              Unified View: Respond Faster
            </ServiceItem>
            <ServiceItem >
              
              Security: Data in your control
            </ServiceItem>
            <ServiceItem >
              
              WorkFlow: Efficient Organization
            </ServiceItem>
            <ServiceItem >
              
              Updates: Always best tech
            </ServiceItem>
          </ul>
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0 relative h-[400px] w-full">
          <Image 
            src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Platform Advantages" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <FaShieldAlt 
          className="absolute bottom-4 left-[5%] text-gray-700 opacity-[0.2]" 
          size={200}
        />
      </div>
    </div>

        {/* Our Impact section */}
        <section id="impact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center glow-text-noshadow flex flex-col items-center gap-4">Our Impact<div className='straightLine'></div></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats2.map((stat, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-gray-200 mb-2 text-center">{stat.percentage}</div>
              <div className="text-md text-center font-semibold text-light-cust">{stat.title}</div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-px h-12 bg-gray-300"></div>
              )}
            </div>
          ))}
            </div>
          </div>
        </section>
        </>
    )
}
const ServiceItem = ({ children }) => (
    <div className="flex items-center">
      <span className="text-3xl font-bold text-blue-600 mr-4">+</span>
      <span className="text-xl">{children}</span>
    </div>
  );