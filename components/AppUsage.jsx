"use client";
import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import AppUsageText from "./AppUsageText";
import { motion } from "motion/react";

const AppUsage = () => {
  return (
    <div className="bg-[#251804]">
      <Container maxWidth={false}>
        <div>
          <motion.p
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white font-bold md:text-[31.25px] text-[15px] leading-[47.25px] uppercase pt-30 "
          >
            how to use the app perfectly
          </motion.p>
          <motion.p
            transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-regular md:text-[16px] text-[13px] leading-[24px] text-white pb-6"
          >
            Get a step by step process of using the Ifa Kiko mobile app
            successfully.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-10 grid-cols-1 justify-center pb-10">
            <motion.div
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="">
                <Image
                  src="/Group 1000001367.png"
                  alt="group"
                  width={150}
                  height={100}
                  className=" w-[120px] lg:ps-2 ps-2 h-[80px] mx-auto"
                />
                <Image
                  src="/Group 1000001604.png"
                  alt="group"
                  width={150}
                  height={100}
                  className=" w-[120px]  mt-[-40px]  h-[80px] mx-auto"
                />
              </div>
              <AppUsageText
                text1={"Create Account"}
                text2={"Enter your information, verify "}
                text3={"and login successfully."}
              />
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Image
                src="/Group 1000001605.png"
                alt="group"
                width={120}
                height={100}
                className="h-auto w-auto pb-3 mx-auto"
              />
              <AppUsageText
                text1={"Follow your Preferred Priest"}
                text2={"Get to follow your preferred priest,"}
                text3={"see their temple and location."}
              />
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Image
                src="/Group 1000001372.png"
                alt="group"
                width={120}
                height={10}
                className="h-auto w-auto mx-auto"
              />
              <div className="md:mt-[-20px]">
                <AppUsageText
                  text1={"Listen to Ifa Verse "}
                  text2={"Get ready to listen to your ifa   "}
                  text3={"verse both on audio and lyrics."}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppUsage;
