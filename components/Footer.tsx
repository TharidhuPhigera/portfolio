import { FaEnvelope } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";


const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      {/* background grid */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-gradient">elevate</span> your digital presence?
        </h1>
        <p className="text-[#D3F4D3] md:mt-10 my-5 text-center">
        Let’s connect and explore how we can achieve your goals together.
        </p>
        <a 
        href="mailto:tharidhuphigera@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaEnvelope />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 7azyDevZ
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              >
              <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;