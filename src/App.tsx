import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Lightning from "./components/Lightning";
import { GlowCapture } from "@codaworks/react-glow";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills";
import AudioPlayer from "./components/AudioPlayer";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="relative bg-base-200 overflow-hidden">
      {/* Lightning background layer */}
      <div className="absolute inset-0 z-0">
        <Lightning />
        <Analytics />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <AudioPlayer />
        <Hero />
        <About />
        <Skills />
        <GlowCapture>
          <Contact />
        </GlowCapture>
      </div>
    </div>
  );
};

export default App;
