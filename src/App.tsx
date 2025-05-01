import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Lightning from "./components/Lightning";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="relative bg-base-200 overflow-hidden">
      {/* Lightning background layer */}
      <div className="absolute inset-0 z-0">
        <Lightning />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
