import React from "react";
import Wrapper from "../Wrapper.layout";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

export default function Testimonials() {
  const Star = <FaStar className="text-yellow-400 w-5 h-5" />;
  const MidStar = <FaRegStarHalfStroke />;
  const EmptyStar = <FaRegStar />;

  return (
    <Wrapper className="mt-12">
      <div className="w-full flex items-end justify-center
      text-4xl font-medium text-slate-500">O que falam nossos clientes: </div>
      <div className="flex overflow-x-scroll scroll-smooth  py-14 my-6 gap-x-4">
      <div className="w-[600px] flex justify-center mx-auto">
          <div
            className="md:w-[580px] flex flex-col 
          bg-white rounded-lg font-sans border py-4 px-8"
          >
            <div
              className="flex items-end gap-2 my-2
          text-base font-medium text-slate-600 font-sans"
            >
              <div className="w-10 h-10 rounded-full bg-slate-300"></div>
              <h3>Juliana Andrade</h3>
              {" - "}
              <h4 className="text-x font-bold text-slate-900">Judite Bolos</h4>
            </div>
            <div className="flex items-center">
              {Star}
              {Star}
              {Star}
              {Star}
              {Star}
            </div>
            <div className="border-t pt-3 mt-3">
              <p className="text-base font-medium text-slate-600 font-sans">
                Achei excelente o trabalho que me foi entregue dentro do prazo e
                superando as expectativas com a qualidade e desenpenho, uma
                confiabilidade que so pude encontrar aqui, merece muito essas
                estrelas parabens para a Equipe👏👏.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[600px] flex justify-center">
          <div
            className="md:w-[580px] flex flex-col 
          bg-white rounded-lg font-sans border py-4 px-8"
          >
            <div
              className="flex items-end gap-2 my-2
          text-base font-medium text-slate-600 font-sans"
            >
              <div className="w-10 h-10 rounded-full bg-slate-300"></div>
              <h3>Juliana Andrade</h3>
              {" - "}
              <h4 className="text-x font-bold text-slate-900">Judite Bolos</h4>
            </div>
            <div className="flex items-center">
              {Star}
              {Star}
              {Star}
              {Star}
              {Star}
            </div>
            <div className="border-t pt-3 mt-3">
              <p className="text-base font-medium text-slate-600 font-sans">
                Achei excelente o trabalho que me foi entregue dentro do prazo e
                superando as expectativas com a qualidade e desenpenho, uma
                confiabilidade que so pude encontrar aqui, merece muito essas
                estrelas parabens para a Equipe👏👏.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[600px] flex justify-center mx-auto">
          <div
            className="md:w-[580px] flex flex-col 
          bg-white rounded-lg font-sans border py-4 px-8"
          >
            <div
              className="flex items-end gap-2 my-2
          text-base font-medium text-slate-600 font-sans"
            >
              <div className="w-10 h-10 rounded-full bg-slate-300"></div>
              <h3>Juliana Andrade</h3>
              {" - "}
              <h4 className="text-x font-bold text-slate-900">Judite Bolos</h4>
            </div>
            <div className="flex items-center">
              {Star}
              {Star}
              {Star}
              {Star}
              {Star}
            </div>
            <div className="border-t pt-3 mt-3">
              <p className="text-base font-medium text-slate-600 font-sans">
                Achei excelente o trabalho que me foi entregue dentro do prazo e
                superando as expectativas com a qualidade e desenpenho, uma
                confiabilidade que so pude encontrar aqui, merece muito essas
                estrelas parabens para a Equipe👏👏.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
