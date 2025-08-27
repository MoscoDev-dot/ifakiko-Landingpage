"use client";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Josefin_Sans } from "next/font/google";
import { motion } from "motion/react";

//adding custom font
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const IfaHome = () => {
  return (
    <Container maxWidth={false}>
      <div className="grid md:grid-cols-2   lg:mx-15 mx-0 mb-150  mb-10 mt-20 grid-cols-1 md:gap-5">
        {/* 1st col */}

        <div className="">
          <motion.div
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative  flex items-center justify-center  learning-ifa "
          >
            <div className="border-[10px] absolute top-2 border-[#74B117] lg:h-[89vh] h-[49vh] lg:w-[80vh] w-[40vh] "></div>

            <div className="border-2 bg-white absolute  top-2 md:top-3 me-[70px] border-[#74B117] lg:w-[80vh] w-[38vh] lg:p-8 p-3 lg:h-[80vh] h-[42vh] mt-5 ">
              <p className="capitalize lg:text-[50px] md:text-[40px] text-[25px] font-semibold leading-tight">
                Join thousands{" "}
                <span className="italic text-[#74B117]">learning Ifá</span>{" "}
                through ancestral voice{" "}
              </p>
              <p className="lg:text-[20px] text-[10px] leading-tight mt-4 text-[#6C6C72]">
                Available on iOS and Android. Free to join, pay-per-verse model.
                Built for the spiritually curious, the committed learner, and
                the global Yoruba community.
              </p>
              <p
                className={` ${josefinSans.className} uppercase lg:text-[25px] text-[12px] leadig-tight  text-[#232233] mt-5 `}
              >
                Download App Now
              </p>
              <div className="flex gap-4">
                <Link href="#">
                  {" "}
                  <Image src="/toppng 1.png" alt="s" width={149} height={47} />
                </Link>
                <Link href="#">
                  {" "}
                  <Image
                    src="/PngItem_1144050 2.png"
                    alt="w"
                    width={149}
                    height={47}
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2nd col */}
        <motion.div
          initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative mb-10 md:mb-0 lg:mt-0 flex items-center justify-center top-120 md:top-45  lg:top-75"
        >
          <div className="absolute">
            <Image
              src="/deupload-feature-mobile 3.png"
              alt="k"
              width={150}
              height={150}
              className="lg:h-auto  h-[250px] md:h-[400px] w-[150px] md:w-[200px]  mx-auto lg:w-auto"
            />
          </div>
          {/* <div className="bg-[#251804] absolute  flex items-center justify-center lg:h-[30vh] h-[15vh] rounded-[10vh] w-[40vh] lg:w-[70vh]">
            <Image
              src="/Ifá Kíkọ́ Green Logo Text_prev_ui 2.png"
              alt="k"
              width={150}
              height={50}
              className="lg:h-auto h-[30px] w-[120px] mx-auto lg:w-auto"
            />
          </div> */}
        </motion.div>
      </div>
      <div></div>
    </Container>
  );
};

export default IfaHome;
