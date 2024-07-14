import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { ArrowDownSvg } from '@/components/social-icons/customicons'
import AboutSec from '@/components/home/AboutSect'
import OurProduct from '@/components/home/OurProduct'
import WeOffer from '@/components/home/WeOffer'
import FAQSection from '@/components/home/FAQSections'


const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
     <div className='h-[100vh] w-full backshadow relative backGroundZoom' style={{backgroundImage:'url(https://themes.pixelwars.org/secury/demo-01/wp-content/uploads/sites/2/2023/09/smart-home-internet-things-with-image-smart-home-1.jpg)',backgroundPosition:'center',backgroundRepeat:'no-repeat',}}>
     <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Background image with overlay */}
      {/* <div className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center"> */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
      {/* </div> */}

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
        {/* Neon border effect */}
        {/* <div className="absolute inset-0 border-8 border-blue-400 opacity-20 animate-pulse"></div> */}

        {/* Main content */}
        <div className=" w-[75%] max:w-[70%]">
          <p className="text-2xl mb-4">Security Solutions for Every Need</p>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            Fortifying Your <br /> Future with <br /> Security
          </h1>
          <p className="text-sm md:text-base max-w-2xl mt-4">
            Social Engineering: This involves manipulating individuals into 
            divulging confidential information or taking specific actions.
          </p>
        </div>

        {/* Social icons */}
        <div className="absolute leftCenter left-2 md:left-9 flex flex-col space-y-4">
          <FaFacebookF className="text-md hover:text-blue-400 cursor-pointer" />
          <FaTwitter className="text-md hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="text-md hover:text-blue-400 cursor-pointer" />
        </div>

        {/* Scroll down */}
        <div style={{writingMode: 'vertical-lr'}} className="absolute right-2 md:right-9 rightCenter arrowHover text-sm tracking-widest">
          <span className="absolute right-[-21px] md:right-[-21px] rightCenter">
            <ArrowDownSvg/>
          </span>
          SCROLL DOWN
        </div>
      </div>
    </div>
     </div>
     <AboutSec/>
     <OurProduct/>
     <WeOffer/>
     <FAQSection/>
    </>
  )
}
