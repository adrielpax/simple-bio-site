
import Footer from "@/components/layout/Footer.layout";
import Header from "@/components/layout/Header.layout";
import Wrapper from "@/components/layout/Wrapper.layout";
import React, { use, useEffect, useState, useSyncExternalStore } from "react";

function index() {
  const isRunningOnBrowser = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isSubmitting) return; // Evita envio duplicado

    setIsSubmitting(true);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isRunningOnBrowser) {
      const inputElement = document.querySelector("input") || "";
      if (inputElement) {
        setName(inputElement.value);
      }
    }
  }, [isRunningOnBrowser]);

  return (
    <>
  
      <Wrapper className="h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-0 shadow rounded">
          <div className="border-b-4 text-center
          text-2xl py-4 bg-white rounded-t">Formulario</div>
            <form
              className="bg-[whitesmoke] flex flex-col p-6 
            rounded gap-3"
            >
              <div className="flex gap-0 flex-col">
                <label className="border-b-4">Nome</label>
                <input
                  id="inputName"
                  type="text"
                  value={name}
                  onChange={handleInputChange}
                  className="rounded py-2 px-1"
                />
              </div>
              <div className="flex gap-0 flex-col">
                <label className="border-b-4">E-mail</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => e.target.value}
                  className="rounded py-2 px-1"
                />
              </div>
              <button
                className={`bg-blue-500 text-white
              px-3 py-2 rounded font-medium font-sans 
              active:bg-blue-400
              disabled:bg-zinc-500 disabled:cursor-not-allowed`}
                disabled={!isRunningOnBrowser || isSubmitting}
                onClick={handleSubmit}
              >
                {!isRunningOnBrowser ? "Carregando.." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
  
    </>
  );
}

export default index;
