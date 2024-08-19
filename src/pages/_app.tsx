import Footer from "@/components/layout/Footer.layout";
import Header from "@/components/layout/Header.layout";
import "@/styles/globals.css";
// import "react-multi-carousel/lib/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="font-sans">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
