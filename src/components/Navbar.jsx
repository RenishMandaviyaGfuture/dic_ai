import React from "react";
import { FaBook, FaHistory } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";

const Navbar = ({clear}) => {
  return (
    <>
      <div className="navbar px-[250px] flex items-center justify-between h-[100px] border-bottom-[1px] border-[#374151]">
        <div className="logo flex items-center gap-[5px]">
          <FaBook size={"40px"} color="oklch(55.8% 0.288 302.321)" />
          <h3 className="text-[25px] font-[600]">
            Lexi<span className="text-purple-600">AI</span>
          </h3>
        </div>
        <div className="icons flex items-center gap-[20px]">
          <FaHistory onClick={clear} size={"35px"} className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]" />
          <CiBookmark size={"35px"} className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]" />
          <IoMdMoon size={"35px"} className="cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
