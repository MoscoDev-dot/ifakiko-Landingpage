import Link from "next/link";
import React from "react";

const NavButton = () => {
  return (
    <div>
      <Link href="#">
        <button className="py-3 px-12 cursor-pointer rounded-lg border-2 border-[#74B117] font-semibold text-[#74B117] ">
          Sign up
        </button>
      </Link>
    </div>
  );
};

export default NavButton;
