import Footer from "@/components/layout/Footer.layout";
import Header from "@/components/layout/Header.layout";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const SurveyComponent = dynamic(
  () => import("@/components/spec/forms/surveyForm"),
  {
    ssr: false,
    loading: () => <p className="w-full h-screen 
    flex justify-center items-center text-xl text-slate-700
    font-medium bg-zinc-100">Carregando Formulario...</p>,
  }
);

function index() {
  return (
    <>
      <Header />

      <Suspense fallback={<p>Um momento carregando seu formulario</p>}>
        <SurveyComponent />
      </Suspense>

      <Footer />
    </>
  );
}

export default index;
