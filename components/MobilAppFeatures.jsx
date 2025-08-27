"use client";
import { Container } from "@mui/material";
import React from "react";
import MobileComponent from "./MobileComponent";
import Image from "next/image";
import { motion } from "motion/react";

const MobilAppFeatures = () => {
  return (
    <div id="app-1" className="bg-[#F1F7E8] px-5  lg:px-20">
      <Container maxWidth={false}>
        <div>
          <p className="font-bold md:text-[40px] text-[20px]  py-10 text-[#000000] ">
            Mobile App{" "}
            <span className="italic font-[800] text-[#74B117] ">Features</span>
          </p>
          <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
            {/* 1st col */}
            <motion.div
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[#77715F] rounded-[5vh] "
            >
              <p className="text-center font-semibold pt-8  md:text-[25px] text-[15px] uppercase text-[#74B117]">
                Priest Profiles & <br /> Community Hub
              </p>
              <MobileComponent
                image={"/deupload-file-sharing 2 (1).png"}
                text3={" Users can follow verified Babaláwo, "}
                text4={" view their teachings,and ask spiritually questions."}
              />
            </motion.div>

            {/* 2nd col */}
            <motion.div
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[#74B117]  rounded-[5vh] "
            >
              <p className="text-center font-semibold pt-8 md:text-[25px] text-[15px] uppercase text-[#251804]">
                Lineage Tracing & <br /> Ìbà system
              </p>
              <MobileComponent
                image={"/deupload-file-sharing 3 (1).png"}
                text3={" Each verse is spiritually anchored.  "}
                text4={" Users can view the originating lineage of verses."}
              />
            </motion.div>

            {/* 3rd col */}
            <motion.div
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] rounded-[5vh] "
            >
              <p className="text-center font-semibold pt-8 md:text-[25px] text-[15px] uppercase text-[#251804]">
                Lineage Tracing & <br /> Ìbà system
              </p>
              <p className="md:text-[16px] text-[13px] text-center font-regular text-[#000000] py-5 ">
                Each verse is spiritually anchored. <br /> Users can view the
                originating lineage of verses.
              </p>
              <div className="flex justify-center">
                <Image
                  src="/deupload-file-sharing 3.png"
                  alt="mobile1"
                  width={350}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>
            </motion.div>

            {/* 4th col */}
            <motion.div
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[#B8893D] rounded-[5vh] "
            >
              <p className="text-center font-semibold pt-8 md:text-[25px] text-[15px] uppercase text-[#251804]">
                Priest Profiles & <br /> community hub
              </p>
              <MobileComponent
                image={"/deupload-file-sharing 3 (1).png"}
                text3={" Users can follow verified Babaláwo, "}
                text4={"view their teachings,and ask spiritually questions."}
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobilAppFeatures;
