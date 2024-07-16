import React from 'react';
import Image from 'next/image';
const data = [
    {
        title:'Secure Mobile Broadband Communication',
        paragraph:'VNL’s Broadband Tactical LTE Standard Backpack is a compact, body-worn unit that exploits the advantage of limited manoeuvre space in mountainous battlefield operations by providing instant, secure, on-the-move broadband network for mission- critical communication. With on-the-move connectivity, dismounted, small groups of soldiers gain access to real-time field situational-awareness by being connected with each other and the base through Voice/Video/Data network. It is light weight with built-in battery.',
        points:[
            '1. Carry as backpack or deploy on tripod',
            '2. Rapid deployment during an emergency',
            '3. As a Captive Network for various tactical operations'
        ],
        pointsHead:'The system can be deployed in the following configurations: ',
        pictureImage:'/static/images/Picture1.png'
    },
    {
        title:'BIDS, PIDS & ISR',
        paragraph:'Critical assets like borders, camps, and airbases face high risks from intruders and are difficult to monitor manually due to challenging weather and terrain. Areas with thick vegetation or riverine borders are particularly vulnerable during winter and rainy seasons. Continuous, high-resolution, day-and-night surveillance is essential for armed forces and border security to prevent security breaches.',
        paragraph2:'Shyam VNL offers intelligent solutions for Smart Border Management, specifically designed for Indian border terrains. These solutions integrate multiple sensors to create a multi-layer security system that deters, detects, delays, and prevents intrusions in any weather condition. This system enhances the capabilities of Indian armed forces and border security agencies, acting as a comprehensive, force-multiplying solution.',
        pictureImage:'/static/images/Picture2.png' 
    },
    {
        title:'Mobile Phone Intelligence & Denial',
        paragraph:'Shyam VNL is a prominent player in the mobile wireless communication sector, offering innovative solutions that address the needs of modern governments, critical infrastructures, disaster management authorities, and large enterprises. Their deep understanding of the digital landscape allows them to provide state-of-the-art communication and intelligence tools, ensuring uninterrupted connectivity and advanced surveillance capabilities.',
        paragraph2:"In today's mobile-connected world, security within strategic buildings, embassies, and campuses is crucial. One of the major threats is the unauthorized use of personal mobile devices, which can lead to data theft and security breaches. Shyam VNL's commitment to integrating the latest technological advancements with proven communication principles helps mitigate these risks, providing bespoke systems to enhance security and connectivity.",
        pictureImage:'/static/images/Picture3.png' 
    },
    {
        title:'Private Secure Mobile Broadband',
        paragraph:'Shyam VNL provides a new generation of GSM/LTE solutions, including NiOB/eNodeB, designed to connect remote rural areas, enhance indoor coverage in offices and business parks, and offer M2M connectivity for heavy machinery businesses located far from public mobile networks. Their Private GSM/LTE solution is easy to install and manage, offering carrier-grade reliability with minimal capital and operational expenditures.',
        paragraph2:"Designed for rapid deployment and simple configuration, Shyam VNL’s solution operates in standalone mode even without backhaul connectivity, making it ideal for military operations and disaster rescue missions that require uninterrupted connectivity. Additionally, a private GSM/LTE network can help manage and control congested public networks, reducing transmission and interference issues.",
        pictureImage:'/static/images/Picture4.png' 
    },
    {
        title:'Rural Mobile Broadband (WISP) ',
        paragraph:'Traditional broadband services are costly for rural areas, making wireless solutions essential for including these regions in the digital revolution. Shyam VNL addresses this challenge with a high-speed, wireless 4G/LTE broadband infrastructure designed specifically for remote, rural areas. This infrastructure offers a low-cost alternative to expensive centralized communication systems, allowing mobile operators to profitably expand services to previously underserved areas, including regions with no phone service in developing countries.',
        paragraph2:"Shyam VNL’s 4G/LTE broadband is easy to scale, deploy, and maintain, with plug-and-play installation and quick deconstruction for redeployment. Its self-healing capability ensures increased uptime, and remote maintenance eliminates the need for frequent site visits. The system is user-friendly and can be managed by individuals without technical expertise, making it an ideal solution for expanding digital connectivity in rural markets.",
        pictureImage:'/static/images/Picture5.png' 
    }
]
const SecurityStory = ({data,ind}) => {
  return (
    <div className='bg-gray-900'>
    <div className="container mx-auto px-4 py-8 bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 glow-text-noshadow">{data.title}</h1>
      
      <div className={`flex flex-col ${ind%2 == 0?'md:flex-row':'md:flex-row-reverse'}  gap-8`}>
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-96">
            <Image
              src={data.pictureImage}
              alt="Security guard"
              layout="fill"
              objectFit="cover"
              className=" shadow-lg"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          
          <p className="mb-4">
            {data.paragraph}
          </p>
          
          {data?.paragraph2 && <p className="mb-4">
            {data?.paragraph2}
          </p>}
          
          <div className="space-y-4 mt-8">
           {
            data.points && <div>
                <h4>
                    {data.pointsHead}
                </h4>
                {data.points.map((elm,i)=>{
                    return (
                        <p key={i}>{elm}</p>
                    )
                })}
                </div>
           }
          </div>
        </div>
      </div>
    </div></div>
  );
};


const NetworkSecPointStructure = () => {
  return (
    data.map((elm,i)=>{
        return(
        <SecurityStory key={i} ind={i} data={elm}/>
        )
    })
  )
}

export default NetworkSecPointStructure

