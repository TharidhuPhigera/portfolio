"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const row1 = ["Java", "Python", "Javascript", "Typescript", "PHP", "C++"];
const row2 = ["ReactJS", "NextJS", "TailwindCSS", "HTML/CSS"];
const row3 = ["NodeJS", "SpringMVC", "Flask", "Django"];
const row4 = ["MySQL", "MongoDB", "Docker", "AWS"];




export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  id?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {


  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("tharidhuphigera@gmail.com")
    setCopied(true);
  }
  return (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "#171717",
        }}
      >
      {/* add img divs */}
      <div className={`${id === 4 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 1 && (
          <div className="h-[40vh] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={row1}
            direction="right"
            speed="slow"
            backgroundColor="#80DEEA"  // Light blue
          />

          <InfiniteMovingCards
            items={row2}
            direction="left"
            speed="normal"
            backgroundColor="#E0F7FA"  // Light blue
          />

          <InfiniteMovingCards
            items={row3}
            direction="right"
            speed="normal"
            backgroundColor="#29B6F6"  // Deeper blue
          />

          <InfiniteMovingCards
            items={row4}
            direction="left"
            speed="slow"
            backgroundColor="#B3E5FC"  // Very light blue
          />
          </div>
          )}
        </div>
      </div>
    </div>
  );
};