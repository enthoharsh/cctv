import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className='bg-gray-900' style={{
      backgroundImage:'url(/static/images/footerBack.png)',
      backgroundPosition: 'bottom center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    minHeight: '405px'
    }}>
      <div className=" text-white py-12 relative overflow-hidden">
      {/* <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
        <div className="grid grid-cols-8 gap-1">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-teal-500 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="grid grid-cols-8 gap-1">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-teal-500 rounded-full"></div>
          ))}
        </div>
      </div> */}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Working hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Working hours</h3>
            <p className="mb-2">Mon-Fri: 9 AM - 6 PM</p>
            <p className="mb-2">Saturday: 9 AM - 4 PM</p>
            <p>Sunday: closed</p>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Office</h3>
            <p className="mb-2">Country —</p>
            <p className="mb-2">785 15h abc Street, Office 478</p>
            <p className="mb-4">xyz, 81566</p>
            <a href="mailto:info@email.com" className="text-gray-400 hover:text-white transition-colors duration-300">info@email.com</a>
            <p className="mt-2">+1 800 555 25 69</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul>
              {['Home', 'Services', 'About Us', 'Shop', 'Contacts'].map((link, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="hover:text-white transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get in touch</h3>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaDribbble, FaInstagram].map((Icon, index) => (
                <a key={index} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p> © 2024. All rights reserved.</p>
        </div>
      </div>
      </div>
      {/* <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div> */}
    </footer>
  )
}
