import phoneImage from "../assets/pi_video-6.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden hero bg-no-repeat bg-cover container mx-auto px-4 max-w-screen-xl flex lg:items-center">
      <div className="flex flex-col gap-8 w-full lg:w-[60%]">
        <p
          className="lg:text-5xl text-3xl font-bold z-10 lg:pt-0 pt-10"
          data-aos="fade-right"
        >
          Activate Marketplace
        </p>
        <p className="font-semibold text-lg sm:text-2xl z-10" data-aos="fade-up">
          Activating Marketplace on your Pi wallet allows you to securely
          trade your Pi assets with other pioneers, using Pi Network Escrow
          services, this is only available to pioneers who have completed KYC
          and migrated all assets to the Mainnet.
        </p>
        <div className="z-10">
          <Link to={'/validate'}><button className="border-2 group transition-colors duration-300 text-secondary hover:text-white flex items-center gap-4 border-secondary bg-transparent hover:bg-secondary pl-5 pr-16 py-2 lg:py-4 lg:text-lg text-sm rounded-md font-semibold text-start">
            {/* Activate P2P Marketplace */}
            Unlock Payment Method
            {/* <p className="h-6 w-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  className="fill-secondary group-hover:fill-white"
                  d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
                />
              </svg>
            </p> */}
          </button></Link>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[40%] z-10">
        <img src={phoneImage} alt="" className="w-full" />
      </div>
    </section>
  );
}
