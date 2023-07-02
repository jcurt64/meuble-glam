import Image from "next/image";
import HeroSection from "./../components/HeroSection";
import Appart from "./../components/Appart";
import Bonus from "./../components/Bonus";
import ConfianceDetail from "./../components/ConfianceDetail";
import Contact from "./../components/Contact";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
         <Header />
      <HeroSection />
      {/* <Appart /> */}
      {/* <Bonus/> */}
      <ConfianceDetail />
      <Contact/>
      <Footer />
    </div>
  );
}
