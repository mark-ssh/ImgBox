import "../../src/App.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import LandingPage from "../components/landingPage/landing-page";

export default function AppAbout() {
  return (
    <div className="sm:w-full min-h-0">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}
