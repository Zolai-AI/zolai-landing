import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Repos } from "./components/Repos";
import { TechStack } from "./components/TechStack";
import { Credits } from "./components/Credits";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Repos />
      <TechStack />
      <Credits />
      <CTA />
      <Footer />
    </div>
  );
}
