import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Elevar Digital | Serviços de Tecnologia e Automação digital",
  description: "agencia de serviços de tecnologia e automação digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className={`flex flex-col min-h-screen items-start justify-start 
    text-white`}>
      <Image src={""} alt={""}/>
        <Navbar />
        <main className="w-full flex-1">
        {children}
        </main>
        <Footer />
   </div>
  );
}
