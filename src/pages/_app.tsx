import "@/styles/globals.css";
// import "react-multi-carousel/lib/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
