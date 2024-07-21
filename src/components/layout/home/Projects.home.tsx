import React from "react";
import Wrapper from "../Wrapper.layout";

export default function Galery() {
  return (
    <>
      <Wrapper className="mt-16 mb-16">
        <div className="flex gap-2 flex-col mb-12">
        <h1 className="text-5xl font-bold font-sans text-slate-800">Sites que Desenvolvemos</h1>
        <p className="text-xl font-medium text-slate-600">Veja um pouco dos Nossos Sites e Designs que Desenvolvemos</p>
        </div>
        <div className="flex flex-wrap w-full md:gap-4 gap-2 justify-evenly lg:justify-evenly">
          <div
            className="md:w-[360px] max-w-[400px] min-h-[300px] md:h-[500px] 
          group relative"
          >
            <div
              className="bg-blue-200 text-white
              min-w-[250px] md:scale-100 w-full h-full
              flex items-center justify-center rounded"
            >
              Picture Here
            </div>
            <div
              className="flex justify-center gap-2 flex-col px-6 absolute 
            top-0 left-0 h-full w-full items-center bg-white 
            opacity-0 group-hover:opacity-100 group-hover:bg-opacity-90
            transition-all ease-in-out duration-300"
            >
              <h2
                className="text-2xl font-sans font-medium
              text-slate-900 cursor-default"
              >
                Landing Page - WebMotors
              </h2>
              <p className="cursor-default">Web site, CRM, plusmode, Custom change</p>
              <button
                className="text-white font-medium font-sans border py-2 px-4 rounded
              bg-blue-600 active:bg-blue-400 active:border-blue-200 border-transparent"
              >
                Ver de perto
              </button>
            </div>
          </div>
          
        
      
          
       
         
          
         
        </div>
      </Wrapper>
    </>
  );
}
