import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/components/layout/Wrapper.layout";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { useRouter } from "next/router";

function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const router = useRouter();
  const handleToggleMenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <>
      <div
        className={`bg-white shrink-0 w-full h-[90px] md:h-[80px] 
        overflow-visible relative z-50 top-0 
        transition-all ease-in-out  
        decoration-lime-300 bg-opacity-0 border-none shadow backdrop-blur-sm`}
      >
        <Wrapper
          className="flex flex-row items-center text-[#12121299] 
          md:justify-evenly lg:justify-around xl:justify-between py-1 h-full w-full"
        >
          <Link href={"/"} className="flex ">
            <div className="scale-100 ml-4 md:scale-105">
              <Image src={"/imgs/logo.png"} alt={""} width={130} height={50} />
            </div>
          </Link>
          {/* <div className="flex md:hidden">
          <button
                  className="font-semibold text-sm font-sans border rounded px-6 py-3
              bg-blue-500 text-white hover:opacity-70"
                >
                  Começar 🔥
                </button>
          </div> */}
          <button
            className="flex md:hidden mr-5 border-2 border-transparent 
          focus:border-blue-700 rounded-md"
            onClick={handleToggleMenu}
          >
            {showSubmenu ? (
              <RiCloseFill className="w-10 h-10 text-black" />
            ) : (
              <RiMenu3Fill className="w-10 h-10 text-black" />
            )}
          </button>
          <div className="hidden md:block">
            <>
              <div>
                <ul
                  className="hidden md:flex flex-row justify-end 
                items-center gap-6 w-full
                font-semibold text-sm font-sans 
                z-50 text-[#12121299]"
                >
                  <Link href={"/"}>
                    <li
                      className="cursor-pointer rounded p-1 hover:text-blue-600
                    transition-all duration-200 ease-in-out font-medium drop-shadow"
                    >
                      Inicio
                    </li>
                  </Link>
                  <li
                    className="cursor-pointer rounded p-1 hover:text-blue-600
                    transition-all duration-200 ease-in-out font-medium drop-shadow"
                  >
                    Sobre nós
                  </li>
                  <li
                    className="cursor-pointer rounded p-1 hover:text-blue-600
                    transition-all duration-200 ease-in-out font-medium drop-shadow"
                  >
                    Produtos e Serviços
                  </li>
                  {/* <li
                    className="cursor-pointer rounded p-1 hover:text-blue-600
                    transition-all duration-200 ease-in-out font-medium drop-shadow"
                  >
                    Blog
                  </li>
                  <li
                    className="cursor-pointer rounded p-1 hover:text-blue-600
                    transition-all duration-200 ease-in-out font-medium drop-shadow"
                  >
                    FAQ
                  </li> */}
                </ul>
              </div>
            </>
          </div>
          <div className="hidden md:block">
            <>
              <div className="flex items-center gap-4">
                {/* <button
                  className="font-semibold text-sm font-sans border
                  border-transparent rounded px-6 py-3
                bg-black text-white hover:opacity-70"
                >
                  Entrar
                </button> */}
                <button
                  className="font-semibold text-sm font-sans border
                  border-transparent rounded px-6 py-3
                bg-blue-500 text-white hover:opacity-70"
                  onClick={() => router.push("request-form")}
                >
                  Solicitar Serviço
                </button>
              </div>
            </>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Navbar;
