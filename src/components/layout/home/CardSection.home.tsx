import React from "react";
import Wrapper from "../Wrapper.layout";
import { SlScreenSmartphone } from "react-icons/sl";
import { TbSocial } from "react-icons/tb";
import { TiSocialInstagram } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";

function CardSection() {
  return (
    <>
      <Wrapper className="pb-10 lg:w-[1000px] justify-center">
        <div
          className="w-full flex flex-wrap items-center sm:flex-col justify-center lg:justify-between
         gap-x-5 gap-y-6 md:flex-row"
        >
          <div
            className="w-[290px] font-medium bg-white hover:translate-y-[-10px] 
            relative hover:border-blue-500 
            cursor-default transition-all ease-in-out items-center 
            h-[260px] shadow-md border rounded-lg p-4 font-sans"
          >
            <h2 className="text-6xl font-bold flex items-end 
            gap-8 border-b pb-5 mb-2 text-blue-600">
            <SlScreenSmartphone />
            51%
            </h2>
            <p className="text-lg font-medium text-left text-slate-600">
              Dos usuários de smartphones descobriram novos negócios ou produtos
              enquanto faziam buscas no google!
            </p>
          </div>
          <div
            className="w-[290px] font-medium bg-white hover:translate-y-[-10px] 
          relative hover:border-blue-500  
            cursor-default transition-all ease-in-out  items-center
            h-[260px] shadow-md border rounded-lg p-4 font-sans"
          >
            <h2 className="text-6xl font-bold border-b
            flex items-end gap-8 pb-5 mb-2 text-blue-600">
            <TiSocialInstagram />
            93%
            </h2>
            <p className="text-lg font-medium text-left text-slate-600">
              Das decisões de compra são influenciadas pelas mídias sociais!
            </p>
          </div>
          <div
            className="w-[290px] font-medium bg-white hover:translate-y-[-10px] 
          relative hover:border-blue-500  
            cursor-default transition-all ease-in-out  items-center
            h-[260px] shadow-md border rounded-lg p-4 font-sans"
          >
            <h2 className="text-6xl font-bold border-b
            flex items-end gap-8 pb-5 mb-2 text-blue-600">
            <FcGoogle />
              89%
            </h2>
            <p className="text-lg font-medium text-left text-slate-600">
              Da população só toma decisão de compra após consultar mecanismos
              de pesquisa na web!
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default CardSection;
