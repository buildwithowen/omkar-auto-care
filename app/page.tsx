import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import ExpertServicesSection from "@/components/home/ExpertServicesSection";
import TopTierServicesSection from "@/components/home/TopTierServicesSection";
import ServiceStripSection from "@/components/home/ServiceStripSection";
import HomeContactSection from "@/components/home/HomeContactSection";
import ServicingProcessSection from "@/components/home/ServicingProcessSection";
import LogBookServiceSection from "@/components/home/LogBookServiceSection";
import LogBookIncludesSection from "@/components/home/LogBookIncludesSection";
import FAQSection from "@/components/home/FAQSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import PreFooterCTA from "@/components/layout/PreFooterCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ExpertServicesSection />
        <TopTierServicesSection />
        <ServiceStripSection />
        <HomeContactSection />
        <ServicingProcessSection />
        <LogBookServiceSection />
        <LogBookIncludesSection />
        <FAQSection />
        <WhyChooseUsSection />
        <PreFooterCTA />
      </main>

      <Footer />
    </>
  );
}