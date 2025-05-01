import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col bg-base-200 justify-center items-center px-4"
    >
      {/* Small Static Heading */}
      <h2 className="text-primary text-sm tracking-widest uppercase mb-2">
        About Me
      </h2>

      {/* Typing Animation Text */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          <Typewriter
            words={[
              "Frontend Developer",
              "Creative Coder",
              "Building CodeAura",
            ]}
            loop={0} // 0 = infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      {/* About Me Paragraph */}
      <p className="max-w-2xl text-center text-base-content mb-8">
        Hi, I'm John Ezekiel, a passionate Frontend Developer with a deep love
        for crafting interactive, dynamic, and beautiful web experiences. I
        focus on creating performant, user-friendly applications with attention
        to detail and a clean, modern aesthetic. Currently building innovative
        projects at <span className="text-primary font-semibold">CodeAura</span>
        !
      </p>

      {/* Call To Action Button */}
      <Link to="contact" smooth={true}>
        <button className="btn btn-primary">Let's Connect</button>
      </Link>
    </section>
  );
};

export default About;
