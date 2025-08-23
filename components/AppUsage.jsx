import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import AppUsageText from "./AppUsageText";

const AppUsage = () => {
  return (
    <div className="bg-[#251804]">
      <Container maxWidth={false}>
        <div>
          <p className="text-center text-white font-bold text-[31.25px] leading-[47.25px] uppercase pt-30 ">
            how to use the app perfectly
          </p>
          <p className="text-center font-regular text-[16px] leading-[24px] text-white pb-6">
            Get a step by step process of using the Ifa Kiko mobile app
            successfully.
          </p>
          <div className="flex justify-center">
            <Image
              src="/Screenshot 2025-05-16 084526.png"
              alt="vector"
              width={900}
              height={100}
              className="w-[100vw] md:w-[100vw] lg:w-[60vw]  h-auto"
            />
          </div>
          <div className="flex pb-15 md:gap-15 md:mx-5 gap-5 justify-center">
            <div className="">
              <AppUsageText
                text1={"Create Account"}
                text2={"Enter your information, verify "}
                text3={"and login successfully."}
              />
            </div>
            <div className="">
              <AppUsageText
                text1={"Follow your Preferred Priest"}
                text2={"Get to follow your preferred priest,"}
                text3={"see their temple and location."}
              />
            </div>
            <div className="">
              <AppUsageText
                text1={"Listen to Ifa Verse "}
                text2={"Get ready to listen to your ifa   "}
                text3={"verse both on audio and lyrics."}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppUsage;
