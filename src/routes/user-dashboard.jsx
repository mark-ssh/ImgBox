import "../../src/App.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Dashboard from "../components/dashboard/dashboard";

export default function UserDashboard() {
  return (
    <div className="sm:w-full min-h-0">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}
