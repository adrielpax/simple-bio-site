import React from "react";
import Wrapper from "../Wrapper.layout";

function Costumers() {
  return (
    <>
      <Wrapper className="flex justify-center mb-0">
        <div className="flex gap-2 flex-col text-center">
          <h1 className="text-4xl font-bold font-sans text-slate-800">
            Clientes Parceiros
          </h1>
          <p className="text-xl font-medium text-slate-600">
            Veja quem acredita no nosso trabalho
          </p>
        </div>
      </Wrapper>
      <div className="w-full bg-zinc-300 mb-12 mt-2 h-auto py-10">
        <Wrapper className="flex lg:flex-row items-center mb-0 p-0 justify-evenly">
            <h1 className="text-4xl font-bold font-sans text-zinc-600">Elluxus</h1>
        </Wrapper>
      </div>
    </>
  );
}

export default Costumers;
