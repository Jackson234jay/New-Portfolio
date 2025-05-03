import { Suspense, lazy } from "react";
import { GlowCapture } from "@codaworks/react-glow";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Lightning from "./components/Lightning";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const About = lazy(() => import("./components/About"));
  const Contact = lazy(() => import("./components/Contact"));
  const Skills = lazy(() => import("./components/Skills"));
  const AudioPlayer = lazy(() => import("./components/AudioPlayer"));
  return (
    <div id="home" className="relative bg-base-200 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Lightning />
        <Analytics />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={<div>Loading audio...</div>}>
          <AudioPlayer />
        </Suspense>
        <Hero />
        <Suspense fallback={<div>Loading about...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading skills...</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div>Loading contact...</div>}>
          <GlowCapture>
            <Contact />
          </GlowCapture>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
