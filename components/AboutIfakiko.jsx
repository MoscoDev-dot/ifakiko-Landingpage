"use client";
import React from "react";
import AboutCards from "./AboutCards";
import { Container } from "@mui/material";
import { motion } from "motion/react";

const AboutIfakiko = () => {
  return (
    <div
      
      id="about-1"
      className="my-20 mx-5 md:mx-20"
    >
      <Container maxWidth={false}>
        <motion.p
        initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3,  }}
        className="text-center font-[700] text-[45px] tracking-[5px] text-[#10111A]">
          ABOUT Ifá Kiko
        </motion.p>
        <motion.p
        initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5,  }}
        className="text-center font-[400] text-[#251804] text-[18px] ">
          IFA Kiko is a sacred digital space created to preserve and teach the
          oral traditions of Ifa and Orisa in an <br /> ethical, secure, and
          lineage-respectful manner. Rooted in Yoruba spirituality and guided by
          revered <br /> elders, the platform is not just an app—it is a
          spiritual mission.
        </motion.p>
        <div className="grid lg:grid-cols-3 mt-20 grid-cols-1 gap-4">
          <motion.div 
          initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }} >
            <AboutCards
              image={"/circle-nodes 2.png"}
              text1={"Respect for lineage"}
              text2={
                "IFA Kiko was co-created with input from traditional priests, lineage heads, and spiritual leaders—not just tech experts. Every verse,feature, and function is spiritually validated before implementation."
              }
              text3={"How it works"}
            />
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut'  }} >
            <AboutCards
              image={"/shield-keyhole 2.png"}
              text1={"A kiving evolving library"}
              text2={
                "IFA Kiko is not a static archive or data bank — it is a sacred living space that grows through spiritual contribution. New verses are added by recognized priests as part of an expanding oral tradition."
              }
              text3={"How it works"}
            />
          </motion.div  >
          <motion.div initial={{ y: 20, opacity: 0 }} // ANNIMATIONS
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7, ease: 'easeInOut'  }} >
            <AboutCards
              image={"/block 1.png"}
              text1={"Lineage is identity"}
              text2={
                "In Ifa tradition, the source of a verse is just as important as the verse itself. Our platform preserves this identity by linking each piece of content to the priest, their teacher, and their ancestral root."
              }
              text3={"How it works"}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default AboutIfakiko;
