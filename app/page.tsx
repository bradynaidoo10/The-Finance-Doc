import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Symptoms from "./components/Symptoms";
import Prescriptions from "./components/Prescriptions";
import Awards from "./components/Awards";
import OurPractice from "./components/OurPractice";
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
        <Symptoms />
        <Prescriptions />
        <Awards />
        <OurPractice />
        <Testimonials />
        <FinalCTA />
      </main>
      <ComplianceBar />
      <Footer />
      <WAFloat />
    </>
  );
}
