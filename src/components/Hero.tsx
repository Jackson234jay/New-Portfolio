import hero from "../freepik__surreal-and-dreamlike-saturated-pastel-dreamy-atmo__97483.jpeg";
const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src={hero}
            alt="profile"
            className="max-w-sm rounded-full drop-shadow-base-content drop-shadow-lg shadow-2xl hover:scale-105 transition-transform duration-500 hover:animate-pulse"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Building <span className="text-primary">Dreams</span> into{" "}
              <span className="text-primary">Reality</span>, One Line of Code at
              a Time.
            </h1>

            <p className="py-6">
              I'm a passionate frontend developer crafting beautiful,
              functional, and engaging experiences for the web. Let's bring
              ideas to life together.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
