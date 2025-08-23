import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Mozilla_Headline } from "next/font/google";

const mozilla = Mozilla_Headline({ subsets: ["latin"], weight: "400" });

const MovingTexts = ({text1, text2}) => {
  return (
    <div className=" md:mt-0 overflow-hidden">
      <Container maxWidth={false}>
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          <Image
            src="/istockphoto-188072112-612x612-removebg-preview 1.png"
            width={100}
            height={100}
            alt="eyo-owo"
          />
          <p className={` ${mozilla} md:text-[56px] mt-4 md:mt-0 text-[20px] uppercase font-bold`}>{text1}</p>
          <Image
            src="/istockphoto-188072112-612x612-removebg-preview 1.png"
            width={100}
            height={100}
            alt="eyo-owo"
          />
          <p className={` ${mozilla} md:text-[56px] mt-4 md:mt-0 text-[20px] text-[#74B117] uppercase font-bold`}>{text2}</p>
           <Image
            src="/istockphoto-188072112-612x612-removebg-preview 1.png"
            width={100}
            height={100}
            alt="eyo-owo"
          />
          <p className={` ${mozilla} md:text-[56px] mt-4 md:mt-0 text-[20px] uppercase font-bold`}>{text1}</p>
            <Image
            src="/istockphoto-188072112-612x612-removebg-preview 1.png"
            width={100}
            height={100}
            alt="eyo-owo"
          />
          <p className={` ${mozilla} md:text-[56px] mt-4 md:mt-0 text-[20px] text-[#74B117] uppercase font-bold`}>{text2}</p>
        </div>
      </Container>
      
    </div>
  );
};

export default MovingTexts;