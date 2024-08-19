import React from "react";
import Wrapper from "./Wrapper.layout";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  const actualYear = new Date().getFullYear().toString();
  return (
    <>
      <div
        className="bg-white backdrop-blur-sm z-5 
        w-full h-auto mt-20 b-0 border-t relative
        flex-wrap"
      >
        <Wrapper
          className="my-12 h-auto w-[100%]
        flex flex-col md:flex-row px-6"
        >
          <div
            className="flex-[2_1_0] p-4 pt-0 flex flex-col
          gap-3 justify-start"
          >
            <div>
              <Image src={"/imgs/logo.png"} alt={""} width={200} height={200} />
            </div>
            <p className="text-lg font-medium text-slate-900">
              Encontre-nos tambem nas redes sociais
            </p>
            <div className="flex gap-6 z-10">
              <>
                <button className="flex gap-4  items-center">
                  <FaInstagram className="text-slate-900 w-4 h-6" />
                </button>
                <button className="flex gap-4  items-center">
                  <FaFacebook className="text-slate-900 w-4 h-6" />
                </button>
                <button className="flex gap-4  items-center">
                  <FaXTwitter className="text-slate-900 w-4 h-6" />
                </button>
              </>
            </div>
          </div>
          <div className="flex-[1_1_0] p-4 pt-0 hidden">
            <h4 className="mb-6 text-lg font-sans font-medium text-slate-800">
              Links Uteis
            </h4>
            <ul className="flex flex-col gap-2">
              <Link href={""} className="text-slate-600">
                Blogs
              </Link>
              <Link href={""} className="text-slate-600">
                Preços
              </Link>
              <Link href={""} className="text-slate-600">
                Sobre nós
              </Link>
            </ul>
          </div>
          <div className="flex-[1_1_0] p-4 pt-0 hidden">
            <h4 className="mb-6 text-lg font-sans font-medium text-slate-800">
              Termos
            </h4>
            <ul className="flex flex-col gap-2">
              <Link href={""} className="text-slate-600">
                Termos de Uso e Serviços
              </Link>
              <Link href={""} className="text-slate-600">
                Politica de Privacidade
              </Link>
              <Link href={""} className="text-slate-600">
                Politica de Reembolso
              </Link>
            </ul>
          </div>
          <div className="flex-[1_1_0] p-4 pt-0 hidden">
            <h4 className="mb-6 text-lg font-sans font-medium text-slate-800">
              Suporte & Ajuda
            </h4>
            <ul className="flex flex-col gap-2">
              <Link href={""} className="text-slate-600">
                Suporte
              </Link>
              <Link href={""} className="text-slate-600">
                Termos de Uso
              </Link>
              <Link href={""} className="text-slate-600">
                Sobre
              </Link>
            </ul>
          </div>
        </Wrapper>
      </div>
      <div className="w-full text-black opacity-90 backdrop-blur-sm border-t-1">
        <Wrapper className="py-2 flex flex-col justify-center items-center gap-5">
          <div className="flex text-xs font-sans flex-col gap-2 text-center justify-end">
            <p>Copyrights all directs reserves at - Square Oden.</p>
            <p>Desde 2020 - {actualYear}</p>
          </div>
          <div className="text-xs ">
            <p>
              Developed by{" "}
              <a href="https://adrieldev.vercel.app/" target="_blank">
                adrieldev
              </a>
            </p>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Footer;
