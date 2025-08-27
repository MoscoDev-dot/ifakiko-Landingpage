import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Mozilla_Headline } from "next/font/google";

const mozilla = Mozilla_Headline({ subsets: ["latin"], weight: "700" });

const MovingTexts = ({ text1, text2 }) => {
  return (
    <div className="relative md:pt-20 overflow-hidden whitespace-nowrap  ">
      <div className="scroll-text gap-20 flex">
        <div className=" flex ">
          <Image
            src="/istockphoto-188072112-612x612-removebg-preview 1.png"
            alt="orisa"
            width={50}
            height={50}
          />
          <p
            className={` ${mozilla} text-[#74B117] uppercase text-[15px] md:text-[2xl] lg:text-4xl`}
          >
            {text1}
          </p>
        </div>
        <div className=" flex">
          <Image
            src="/istockphoto-188072112-612x612-removebg-preview 1.png"
            alt="orisa"
            width={50}
            height={50}
          />
          <p
            className={` ${mozilla} uppercase text-[15px] md:text-[2xl] lg:text-4xl`}
          >
            {text2}
          </p>
        </div>
        <div className=" flex">
          <Image
            src="/istockphoto-188072112-612x612-removebg-preview 1.png"
            alt="orisa"
            width={50}
            height={50}
          />
          <p
            className={` ${mozilla} text-[#74B117] uppercase text-[15px] md:text-[2xl] lg:text-4xl`}
          >
            {text1}
          </p>
        </div>
        <div className=" flex">
          <Image
            src="/istockphoto-188072112-612x612-removebg-preview 1.png"
            alt="orisa"
            width={50}
            height={50}
          />
          <p
            className={` ${mozilla} uppercase text-[15px] md:text-[2xl] lg:text-4xl`}
          >
            {text2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovingTexts;
