import "../../src/App.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HeroSection from "../components/heroSection/hero-section";

function Root() {
  return (
    <div className="sm:w-full">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Root;
