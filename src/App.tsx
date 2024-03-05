import Nav from "./components/Nav";
import Preview from "./views/Preview";
import Features from "./views/Features";
import Hero from "./views/Hero";
import About from "./views/About";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "./components/Footer";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="w-full h-auto bg-bg min-h-screen text-white">
      <Nav />
      <div className="hero-preview-wrapper">
        <Hero />
        <Preview />
      </div>
      <Features />
      <About/>
      <Footer/>
    </div>
  );
};

export default App;
