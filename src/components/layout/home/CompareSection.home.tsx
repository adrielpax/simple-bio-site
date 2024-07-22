import React from "react";
import Wrapper from "../Wrapper.layout";
import { MdAccessTimeFilled, MdVerified, MdVisibility } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { GiBiceps } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";

export default function CompareSection() {
  return (
    <>
      <Wrapper className="flex justify-center">
        <div
          className="flex flex-col justify-center w-[600px] md:w-full items-center
          p-6 py-8 bg-white rounded"
        >
          <h2
            className="text-4xl font-medium mb-9
          w-auto px-4 p-2 text-slate-800
          text-center pb-10 
          shadow-gray-400"
          >
            Por que devo ter uma 
            <span className="text-blue-500">{" "}Pagina{" "}</span> 
            ou um 
            <span className="text-blue-500">{" "}Web Site{" "}</span> 
            para meu negocio ? 😉👇
          </h2>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 w-full border-b
          border-t py-16">
            <li
              className="w-[250px] font-sans font-medium text-slate-600 shadow-md
              hover:translate-y-[-5px] flex items-center justify-start gap-2
              transition-all ease-in-out hover:shadow-blue-200 hover:border-blue-500
              cursor-default bg-white border rounded-lg p-5"
            >
              <MdVerified className="w-14 h-14 text-blue-500" /> Credibilidade e
              Profissionalismo
            </li>
            <li
              className="w-[250px] font-sans font-medium text-slate-600 shadow-md
              hover:translate-y-[-5px] flex items-center justify-start gap-2
              transition-all ease-in-out hover:shadow-blue-200 hover:border-blue-500 
              cursor-default bg-white border rounded-lg p-5"
            >
              <MdAccessTimeFilled className="w-10 h-10 text-blue-500" />{" "}
              Disponibilidade 24/7
            </li>
            <li
              className="w-[250px] font-sans font-medium text-slate-600 shadow-md
              hover:translate-y-[-5px] flex items-center justify-start gap-2
              transition-all ease-in-out hover:shadow-blue-200 hover:border-blue-500 
              cursor-default bg-white border rounded-lg p-5"
            >
              <FaGlobeAmericas className="w-10 h-10 text-blue-500" /> Alcance
              Global
            </li>
            <li
              className="w-[250px] font-sans font-medium text-slate-600 shadow-md
              hover:translate-y-[-5px] flex items-center justify-start gap-2
              transition-all ease-in-out hover:shadow-blue-200 hover:border-blue-500 
              cursor-default bg-white border rounded-lg p-5"
            >
              <MdVisibility className="w-10 h-10 text-blue-500" /> Marketing e
              Visibilidade
            </li>
            <li
              className="w-[250px] font-sans font-medium text-slate-600 shadow-md
              hover:translate-y-[-5px] flex justify-start gap-2 
              transition-all ease-in-out hover:shadow-blue-200 hover:border-blue-500 
              cursor-default bg-white border rounded-lg p-5"
            >
              <IoPeopleSharp className="w-12 h-12 text-blue-500" /> Informação e
              Serviço ao Cliente
            </li>
            <li
              className="w-[250px] font-sans font-medium text-slate-600 shadow-md
              hover:translate-y-[-5px] flex items-center justify-start gap-2
              transition-all ease-in-out hover:shadow-blue-200 hover:border-blue-500 
              cursor-default bg-white border rounded-lg p-5"
            >
              <GiBiceps className="w-10 h-10 text-blue-500" /> Competitividade
            </li>
            <li
              className="w-[250px] font-sans font-medium text-slate-600 shadow-md
              hover:translate-y-[-5px] flex items-center justify-start gap-2
              transition-all ease-in-out hover:shadow-blue-200 hover:border-blue-500 
              cursor-default bg-white border rounded-lg p-5"
            >
              <TbTargetArrow className="w-10 h-10 text-blue-500" />{" "}
              Custo-efetividade
            </li>
            <li
              className="w-[250px] font-sans font-medium text-slate-600 shadow-md
              hover:translate-y-[-5px] flex items-center justify-start gap-2
              transition-all ease-in-out hover:shadow-blue-200 hover:border-blue-500 
              cursor-default bg-white border rounded-lg p-5"
            >
              <BsFileEarmarkBarGraphFill className="w-10 h-10 text-blue-500" />{" "}
              Coleta de Dados e Análises
            </li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
}
