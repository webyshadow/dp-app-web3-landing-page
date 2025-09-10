import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Vision from "@/components/Vision";
import Problems from "@/components/Problems";
import CasinoCardsSection from "@/components/CardsShowcase";
import TokenEcosystem from "@/components/TokenEcosystem";
import RevenueModel from "@/components/RevenueModel";
import SecuritySection from "@/components/SecuritySection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ComparisonSection from "@/components/ComparisonSection";
import LastSection from "@/components/LastSection";
import Footer from "@/components/Footer";
import CardsShowcase from "@/components/CardsShowcase";

const Home: NextPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-6"> {/* Navbar space */}
        <Hero />
        <Vision />
        <Problems />
        <CardsShowcase />
        <TokenEcosystem />
        <RevenueModel />
        <SecuritySection />
        <ArchitectureSection />
        <ComparisonSection />
        <LastSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
