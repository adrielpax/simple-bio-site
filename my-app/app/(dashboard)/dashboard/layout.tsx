import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Elevar Digital",
  description: "Painel de controle da Elevar Digital",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
