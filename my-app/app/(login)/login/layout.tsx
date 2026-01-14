import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Elevar Digital",
  description: "Faça login para acessar o dashboard",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
