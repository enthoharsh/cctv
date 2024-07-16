import BackgroundVideo from "@/components/network-security/BackgroundVideo";
import NetwordSecPointStructure from "@/components/network-security/NetworkSecPointStructure";
import { ArrowDownSvg } from "@/components/social-icons/customicons";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function NetworkSecuritySolution(params) {
    return (
        <>
            <div className='h-[100vh] w-full backshadow relative'>
                <BackgroundVideo />
                <div className="relative w-full h-screen text-white overflow-hidden">
                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
                        <div className="w-[75%] max:w-[70%]">
                            <p className="text-2xl mb-4">Security Solutions for Every Need</p>
                            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
                            Network Security Solutions
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
            <NetwordSecPointStructure />
        </>
    )
}