import type { Metadata } from "next";
import { Geist, Geist_Mono, Red_Hat_Display, Roboto, Poppins} from "next/font/google";
import "./ui/globals.css";

const redhat = Red_Hat_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${redhat.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
