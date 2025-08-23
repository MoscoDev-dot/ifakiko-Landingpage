import Link from "next/link";
import React from "react";

const NavButton = () => {
  return (
    <div>
      <Link href="#">
        <button className="py-3 px-12 rounded-lg border-2 font-semibold text-[#74B117] ">
          Sign up
        </button>
      </Link>
    </div>
  );
};

export default NavButton;
