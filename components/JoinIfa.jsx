"use client"
import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const JoinIfa = () => {
  return (
    <div id="verses-1" className="bg-[#FFFFFF]">
      <Container maxWidth={false}>
        <div>
          <div className="grid md:grid-cols-2 mx-10 py-20 grid-cols-1 gap-4">
            <motion.div
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
        whileInView={{ y: 0, opacity: 1 }}

            className="">
              <p className="font-bold leading-tight text-[#251804] text-[40px]">
                Preserve, Learn, and Honor the Legacy of{" "}
                <span className="text-[#74B117]">Ifa</span>
              </p>
              <p className="text-[18px] py-4 font-regular text-[#251804]  ">
                IFA Kiko is more than an app — it's a spiritual movement for
                digital preservation. Contact us today to learn more about what
                we do .
              </p>
              <button className="bg-[#5CD425] text-white px-6 font-regular text-[20px] leading-[28px] py-2 rounded-[2vh] hover:bg-[#251804]">
                Join as a Priest Contributor
              </button>
            </motion.div>
            <motion.div  transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
        whileInView={{ y: 0, opacity: 1 }} className="flex items-center justify-center">
              <Image
                src="/Illustration.png"
                alt="illustration"
                width={250}
                height={100}
                className="w-auto h-auto"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinIfa;
