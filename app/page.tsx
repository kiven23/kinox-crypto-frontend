import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar is already rendered by layout, but keeping for safety */}
      {/* <Navbar /> */}
      <Hero />
      <Stats />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </>
  );
}