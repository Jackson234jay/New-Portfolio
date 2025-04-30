import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
