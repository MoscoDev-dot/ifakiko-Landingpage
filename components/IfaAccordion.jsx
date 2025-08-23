"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const IfaAccordion = ({ text1, text2, text3, text4 }) => {
  return (
    <div className="mb-8">
      <Accordion
        sx={{
          backgroundColor: "#F3F3F3",
          boxShadow: "none",
         
          border: "5px",
          borderRadius: "40px",
          "&.MuiPaper-root": {
            borderRadius: "40px",
             border: "1px solid #000000",
             borderBottom: "8px solid"
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex gap-5 py-4 px-7">
            <div className="font-medium leading-[100%] text-[#000000] text-[30px] md:text-[60px]">
              {text1}
            </div>
            <div className="font-medium leading-[100%] text-[#000000] text-[15px] md:text-[30px]">
              {text2} <br /> {text3}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="px-7 text-[15px] md:text-[20px]">{text4}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default IfaAccordion;