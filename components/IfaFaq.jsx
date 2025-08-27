"use client";
import { Container } from "@mui/material";
import React from "react";
import IfaAccordion from "./IfaAccordion";
import { motion } from "motion/react";

const IfaFaq = () => {
  return (
    <div>
      <Container maxWidth={false}>
        <div className="md:mx-15 mb-20 ">
          <div className="flex flex-col md:flex-row gap-5 my-20">
            <div className="font-medium leading-[100%] px-2 w-fit text[#000000] bg-[#B9FF66] text-[20px] md:text-[40px]">
              Our Working Process{" "}
            </div>
            <div className="font-regular md:text-[20px] text-[13px] leading-[100%] ">
              Your questions answered with clarity, care, and <br /> cultural
              respect.
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {" "}
            <IfaAccordion
              text1={"01"}
              text2={"Is the knowledge on IFA Kiko open to"}
              text3={"everyone?"}
              text4={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. "
              }
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {" "}
            <IfaAccordion
              text1={"02"}
              text2={"Is the knowledge on IFA Kiko open to"}
              text3={"everyone?"}
              text4={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. "
              }
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {" "}
            <IfaAccordion
              text1={"03"}
              text2={"Is the knowledge on IFA Kiko open to"}
              text3={"everyone?"}
              text4={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. "
              }
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {" "}
            <IfaAccordion
              text1={"04"}
              text2={"Is the knowledge on IFA Kiko open to"}
              text3={"everyone?"}
              text4={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. "
              }
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {" "}
            <IfaAccordion
              text1={"05"}
              text2={"Is the knowledge on IFA Kiko open to"}
              text3={"everyone?"}
              text4={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. "
              }
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default IfaFaq;
