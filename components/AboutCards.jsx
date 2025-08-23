import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const AboutCards = ({ image, text1, text2, text3 }) => {
  return (
    <div>
      <div className="bg-[#74B117] hover:bg-[#251804] p-5 rounded-[5vh]">
        <Image
          src={image}
          alt="nodes"
          width={60}
          height={0}
          className="rounded-full p-4 hover:bg-[#74B117]  bg-[#251804]"
        />

        <p className="font-[700] text-[#FFFFFF] py-3 text-[25px] ">{text1}</p>
        <p className=" font-[400] text-[#FFFFFF] text-[16px] "> {text2}</p>
        <Link className=" hover:underline text-[#FFFFFF]" href="#">
          <p className="pt-7">
            {text3}{" "}
            <span>
              <ArrowRightAltIcon />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AboutCards;
