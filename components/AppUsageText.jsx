import React from "react";

const AppUsageText = ({text1, text2, text3}) => {
  return (
    <div>
      <p className="font-medium py-5 md:text-[28px] text-[20px] text-white "> {text1} </p>
      <p className=" md:text-[18px] text-[13px]  font-[400] leading-[130%] text-white ">
        {text2} <br /> {text3} 
      </p>
    </div>
  );
};

export default AppUsageText;
