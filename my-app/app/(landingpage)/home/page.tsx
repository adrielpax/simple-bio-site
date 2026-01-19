
import HeroSection from "@/components/heroSection";
import BenefitsSection from "@/components/benefitsSection";
import ContactFormSection from "@/components/contactFormSection";
import ClientsSection from "@/components/clientsSection";
import VideoSection from "@/components/videoSection";
import ProcessSection from "@/components/processSection";
import LightPillar from "@/animations/LightPillar";
import EstatistcSection from "@/components/estatistcSection";

const Home = () => {
  return (
    <div className="w-full -z-50">
      
       {/* <img
              src={"/img/background-um.jpg"}
              alt="Hero background"
              className="w-full h-full object-contain fixed -z-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 -z-50" /> */}
      <HeroSection
        // videoUrl="/path/to/video.mp4" // Descomente e adicione o caminho do vídeo se disponível
        imageUrl="" // Fallback para imagem
        title="Qual nivel quer Elevar seu negocio hoje ?"
        subtitle="Criamos sites e automações inteligentes que trazem clareza, organização e economizam horas do seu dia."
        ctaText="Quero Elevar meu nivel"
      />
      <EstatistcSection/>
      <ContactFormSection />  
      <BenefitsSection />
      <VideoSection />
      <ProcessSection />
      <ClientsSection />
    </div>
  );
};

export default Home;
