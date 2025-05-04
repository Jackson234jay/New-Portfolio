import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen w-full overflow-hidden">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6 px-4 sm:px-6 md:px-10">
          <img
            src="/images/hero.webp"
            srcSet="
    /images/hero.webp 200w,
    /images/hero.webp 400w
  "
            sizes="(max-width: 768px) 200px, 400px"
            alt="profile"
            width="400"
            height="400"
            loading="lazy"
            className="w-full md:max-w-sm lg:max-w-sm rounded-full shadow-2xl hover:scale-105 transition"
          />

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Building <span className="text-primary">Dreams</span> into{" "}
              <span className="text-primary">Reality</span>, One Line of Code at
              a Time.
            </h1>

            <p className="py-6">
              I'm a passionate frontend developer crafting beautiful,
              functional, and engaging experiences for the web. Let's bring
              ideas to life together.
            </p>
            <Link to="contact" smooth={true}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
