import HeroSection from "@/components/heroSection";
import BenefitsSection from "@/components/benefitsSection";
import ContactFormSection from "@/components/contactFormSection";
import ClientsSection from "@/components/clientsSection";
import VideoSection from "@/components/videoSection";
import ProcessSection from "@/components/processSection";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection
        // videoUrl="/path/to/video.mp4" // Descomente e adicione o caminho do vídeo se disponível
        imageUrl="/img/background-um.jpg" // Fallback para imagem
        title="Eleve Seu Negócio ao Próximo Nível"
        subtitle="Transformação digital que gera resultados reais. Mais de 500 empresas já confiaram em nós para alcançar o sucesso online."
        ctaText="Quero Transformar Minha Empresa"
      />
      <ContactFormSection />  
      <BenefitsSection />
      <VideoSection />
      <ProcessSection />
      <ClientsSection />
    </div>
  );
};

export default Home;
