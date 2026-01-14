import Home from "./(landingpage)/home/page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className={`flex flex-col min-h-screen items-start justify-start 
      bg-gradient-to-br from-zinc-700 to-zinc-600 
      text-white`}>
      <Navbar />
      <main className="w-full flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
