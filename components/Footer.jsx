"use client";
import { Container } from "@mui/material";
import React from "react";
import FooterIfaSocila from "./FooterIfaSocila";
import FooteQuickLink from "./FooteQuickLink";
import FooteNewsLetter from "./FooteNewsLetter";
import Image from "next/image";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div id="footer-1" className="bg-[#251804] pb-10">
      <Container maxWidth={false}>
        <div>
          <div className="grid md:grid-cols-3 lg:mx-15 mx-5 md:mx-2 pt-20  grid-cols-1 md:gap-2 gap-10 lg:gap-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <FooterIfaSocila />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <FooteQuickLink />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <FooteNewsLetter />
            </motion.div>
          </div>
          <hr className=" lg:me-60 lg:ms-20 md:mx-10 border-t-1  my-5 border-white" />
          <motion.div
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex justify-center py-4 gap-5 align-center"
          >
            <div>
              <Image
                src="/copyright-line.png"
                alt="copyright"
                width={100}
                height={100}
                className="h-auto w-auto"
              />
            </div>
            <div className="text-[16px]  leading-[24px] text-white ">
              Copyright 2025 IFAKIKO. All Right Reserved.
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
