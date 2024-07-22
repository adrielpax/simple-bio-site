import React from "react";
import Wrapper from "../Wrapper.layout";
import { MdWeb } from "react-icons/md";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { FaPencilRuler } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

function WeServices() {
  return (
    <>
    <div className="">
      <Wrapper className="py-12">
        <div className="flex flex-col w-full px-4 items-center justify-center mb-12">
          <div className="flex gap-2 flex-col justify-center text-center">
            <h1 className="text-5xl font-bold font-sans text-black">
              Nossos Serviços
            </h1>
            <p className="text-xl font-medium text-slate-600">
              Clique em veja mais para saber sobre como obter cada serviço
            </p>
          </div>
         
        </div>

        <div className="flex flex-wrap mx-auto gap-x-2 gap-3 justify-center">
          <>
            <div
              className="flex flex-col gap-4 
          hover:shadow-none shadow-md transition-all duration-400
          cursor-default bg-white border rounded-md p-4 w-[290px]"
            >
              <MdWeb
                className="w-12 h-12 border-2 p-1 rounded text-blue-600
               bg-white"
              />
              <h2 className="text-xl font-bold text-slate-900 font-sans">
                Desenvolvimento de Web Pages
              </h2>
              <p className="text-base font-medium text-slate-600 font-sans">
                Desenvolvemos sua pagina com integração a outros links e
                conteudos do seu negocio mostrando de forma objetiva e clara os
                beneficios do seu negocio ou produto.
              </p>
            </div>
          </>
          <>
            <div
              className="flex flex-col gap-4 
          hover:shadow-none shadow-md transition-all duration-400
          cursor-default bg-white border rounded-md p-4 w-[290px]"
            >
              <LuLayoutPanelLeft
                className="w-12 h-12 border-2 p-1
              bg-white rounded text-blue-600
              "
              />
              <h2 className="text-xl font-bold text-slate-900 font-sans">
                Gerenciador de conteudos WEB
              </h2>
              <p className="text-base font-medium text-slate-600 font-sans">
                Painel Administrativo para controlar seus leads e dados,
                liberdade para atualizar e gerir seus conteudos do jeito que
                preferir.
              </p>
            </div>
          </>
          <>
            <div
              className="flex flex-col gap-4 
            hover:shadow-none shadow-md transition-all duration-400
            cursor-default bg-white border rounded-md p-4 w-[290px]"
            >
              <FaPencilRuler
                className="w-12 h-12 border-2 p-1
              bg-white rounded text-blue-600
              "
              />
              <h2 className="text-xl font-bold text-slate-900 font-sans">
                Branding e Design
              </h2>
              <p className="text-base font-medium text-slate-600 font-sans">
                Caso queira melhorar sua marcar, logo ou conteudo fazemos
                melhorias de conteudo e gestão de posts e midias ou flyes, para
                multiplataformas.
              </p>
            </div>
          </>
          <>
            <div
              className="flex flex-col gap-4 
          hover:shadow-none shadow-md transition-all duration-400
          cursor-default bg-white border rounded-md p-4 w-[290px]"
            >
              <FaPeopleGroup
                className="w-12 h-12 border-2 p-1
              bg-white rounded text-blue-600
              "
              />
              <h2 className="text-xl font-bold text-slate-900 font-sans">
                Anuncios e Gestão de Trafego
              </h2>
              <p className="text-base font-medium text-slate-600 font-sans">
                Com contigencia desenvolvemos sua conta de Anuncios e ajudamos a
                gerir e direcionar trafego para qualquer uma de suas plataformas
                ou site online.
              </p>
            </div>
          </>
        </div>
      </Wrapper>
      </div>
    </>
  );
}

export default WeServices;
