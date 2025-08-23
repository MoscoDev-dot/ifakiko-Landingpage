import Link from "next/link";
import React from "react";

const FooteQuickLink = () => {
  return (
    <div className="flex flex-col md:justify-center md:items-center">
      <p className="uppercase text-white text-[25px] leading-[37.5px] ">
        quick link
      </p>
      <ul className=" flex md:mt-5  flex-col gap-3">
        <Link
          href="#"
          className="hover:border-b w-fit   text-[16px] leading-[24px] text-white "
        >
          Terms
        </Link>
        <Link
          href="#"
          className="hover:border-b w-fit  text-[16px] leading-[24px] text-white "
        >
          Privacy
        </Link>
        <Link
          href="#"
          className="hover:border-b w-fit  text-[16px] leading-[24px] text-white "
        >
          Spiritual Commitment
        </Link>
        <Link
          href="#"
          className="hover:border-b w-fit  text-[16px] leading-[24px] text-white "
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default FooteQuickLink;
