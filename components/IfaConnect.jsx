"use client";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const IfaConnect = () => {
  return (
    <div id="price-1" className="bg-[#74B117] ">
      <Container maxWidth={false}>
        <div className="text-center pb-10">
          <div>
            <motion.p
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="uppercase font-bold text-[15px] md:text-[20px] leading-[100%] pt-15 pb-5 tracking-[3px]  text-white "
            >
              Download Now
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="font-extrabold text-white text-[28px] md:text-[56px] md:leading-[77px] "
            >
              Experience the best knowledge <br /> on oral traditions of Ifa and
              Iba.
            </motion.p>
          </div>
          <div className="bg-[#251804] w-fit hover:scale-105 ease-in duration-300 cursor-pointer flex justify-center rounded-full my-8 gap-1 md:gap-3 p-3 align-center mx-auto ">
            <div>
              {" "}
              <Image
                src="/Frame 35.png"
                alt=""
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </div>
            <div>
              <p className="font-bold text-[18px] mt-1 lg:mt-3 text-white leading-[18px] ">
                Connect With people
              </p>
            </div>
          </div>
          <div className="flex md:gap-5 gap-1 justify-center align-center">
            <div>
              <Link href="#">
                <div className="flex md:gap-3 gap-2 md:p-3 p-2 bg-white rounded-[5vh] hover:scale-105 ease-in duration-300 cursor-pointer">
                  <div>
                    <Image
                      src="/Vector (1).png"
                      alt=""
                      height={100}
                      width={100}
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className="md:mt-2">
                    <p className="text-[#191970] font-medium text-[12px] leading-[100%] ">
                      Download on the <br />{" "}
                      <span className="md:text-[20px] text-[13px] font-semibold ">
                        Apple Store
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link href="#">
                <div className="flex md:gap-3 gap-2 md:p-3 p-2 rounded-[5vh] border-white border hover:scale-105 ease-in duration-300 cursor-pointer">
                  <div>
                    <Image
                      src="/Vector.png"
                      alt=""
                      height={100}
                      width={100}
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className="md:mt-2">
                    <p className="text-[#FFFFFF] font-medium text-[12px] leading-[100%] ">
                      Download on the <br />{" "}
                      <span className="md:text-[20px] text-[13px] font-semibold ">
                        Google Play
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IfaConnect;
