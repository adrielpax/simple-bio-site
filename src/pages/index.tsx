import Footer from "@/components/layout/Footer.layout";
import Header from "@/components/layout/Header.layout";
import Hero from "@/components/layout/Hero.layout";
import CardSection from "@/components/layout/home/CardSection.home";
import CompareSection from "@/components/layout/home/CompareSection.home";
import Offer from "@/components/layout/home/OfferSection.home";
import Highlighted from "@/components/layout/home/Section.home";
import ServicesOffer from "@/components/layout/home/ServicesOffer.home";
import WeServices from "@/components/layout/home/WeServices.home";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Highlighted />
      <CompareSection />
      <CardSection />
      <Offer />
      <WeServices />
      <ServicesOffer />
      {/* <VSL/> */}
      {/* <Testimonials/>  */}
      {/* <Galery/> */}
      {/* <Costumers/> */}
      <Footer />
    </>
  );
}
