import Home from "./(landingpage)/home/page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LightPillar from "@/animations/LightPillar";
import FloatingLines from "@/animations/FloatingLines";

export default function HomePage() {
  return (
    <div className={`flex flex-col min-h-screen items-start justify-start 
      bg-linear-to-br from-black to-zinc-800 
      text-white`}>

      <Navbar />
      <main className="w-full flex-1">
        <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
          <FloatingLines
            linesGradient={["#209784","#1b1d1c","#1f1414","#061a6a"]}
            animationSpeed={0.2}
            interactive={false}
            bendRadius={5}
            bendStrength={-0.5}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>
        <Home />

      </main>
      <Footer />
    </div>
  );
}
