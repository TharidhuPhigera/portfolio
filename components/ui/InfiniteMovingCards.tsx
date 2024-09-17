"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  backgroundColor,
}: {
  items: string[]; // Change the type to string array
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  backgroundColor?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  
  // Duplicate the items until the row is filled
  const duplicateItems = (items: string[]) => {
    const itemWidth = 150; // Adjust this based on your item's width (you can make this dynamic)
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const itemsNeeded = Math.ceil(containerWidth / itemWidth);
    const totalItems = [...items];

    // Duplicate the items until the number matches the required number to fill the container
    while (totalItems.length < itemsNeeded * 2) { 
      totalItems.push(...items); 
    }
    
    return totalItems;
  };

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [items]);

  const getDirection = () => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", animationDirection);
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const animationDuration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", animationDuration);
    }
  };

  const duplicatedItems = duplicateItems(items); // Duplicate the items programmatically

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <li
            className="w-[100px] max-w-full relative flex-shrink-0 flex items-center justify-center px-4 py-2 md:w-[150px] bg-gray-800 rounded-lg shadow-[inset_4px_4px_10px_rgba(0,0,0,0.6),inset_-4px_-4px_10px_rgba(255,255,255,0.1)]"
            style={{
              background: backgroundColor,
            }}
            key={idx}
          >
            <span className="text-sm leading-[1.6] text-center text-black font-semibold">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};