import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import WhyInsure from "./components/WhyInsure";
import Products from "./components/Products";
import Awards from "./components/Awards";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import ComplianceBar from "./components/ComplianceBar";
import Footer from "./components/Footer";
import WAFloat from "./components/WAFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhyInsure />
        <Products />
        <Awards />
        <WhyUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <ComplianceBar />
      <Footer />
      <WAFloat />
    </>
  );
}
