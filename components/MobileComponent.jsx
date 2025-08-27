import Image from "next/image";
import React from "react";

const MobileComponent = ({ text3, text4, image }) => {
  return (
    <div className="">
      <p className="md:text-[16px] text-[13px] text-center font-regular text-[#FFFFFF] py-5 ">
        {text3} <br /> {text4}
      </p>
      <div className="flex justify-center">
        <Image
          src={image}
          alt="mobile1"
          width={350}
          height={100}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default MobileComponent;
