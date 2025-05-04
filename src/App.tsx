import { Suspense, lazy } from "react";
import { GlowCapture } from "@codaworks/react-glow";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";

// Lazily import heavy or below-the-fold components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Lightning = lazy(() => import("./components/Lightning"));
const AudioPlayer = lazy(() => import("./components/AudioPlayer"));

const App = () => {
  return (
    <div id="home" className="relative bg-base-200 overflow-hidden">
      {/* Background lightning layer */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Lightning />
        </Suspense>
        <Analytics />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={null}>
          <AudioPlayer />
          <Hero />
          <About />
          <Skills />
          <GlowCapture>
            <Contact />
          </GlowCapture>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
