import Wrapper from "@/components/layout/Wrapper.layout";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function InfoNavbar() {
  const pathname = usePathname();
  const homepage = pathname === "/";

  return (
    <div
      className={`bg-black text-white px-8 py-2 z-10 transition-all 
      ease-in ${homepage ? "hidden md:block" : "hidden"}`}
    >
      <Wrapper className="flex justify-between">
        <p className="flex flex-col md:flex-row md:gap-4 font-medium z-10">
          {/* Fale Conosco pelo WhatApp:
          <a
            href="/"
            className="bg-green-500
          rounded px-3 font-medium text-ellipsis border border-black
          hover:bg-green-800 flex
          items-center gap-2"
          >
            <ImWhatsapp className="w-4 h-4 text-bold text-white" />
            Clique Aqui
          </a> */}
        </p>
        <div className="flex gap-6 z-10">
          <>
            <button className="flex gap-4  items-center">
              <FaInstagram className="text-white w-4 h-6" />
            </button>
            <button className="flex gap-4  items-center">
              <FaFacebook className="text-white w-4 h-6" />
            </button>
            <button className="flex gap-4  items-center">
              <FaXTwitter className="text-white w-4 h-6" />
            </button>
          </>
        </div>
      </Wrapper>
    </div>
  );
}

export default InfoNavbar;
