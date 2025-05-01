const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      level: 90,
      color: "success",
      img: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML5"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "CSS",
      level: 85,
      color: "accent",
      img: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS3"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "JavaScript",
      level: 80,
      color: "accent",
      img: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "TypeScript",
      level: 75,
      color: "secondary",
      img: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "React",
      level: 75,
      color: "secondary",
      img: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Tailwind Css",
      level: 80,
      color: "accent",
      img: (
        <img
          src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
          alt="Tailwind CSS"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Node.js",
      color: "secondary",
      level: 75,
      img: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "Git",
      level: 80,
      color: "accent",
      img: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Git"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "GitHub",
      level: 85,
      color: "accent",
      img: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="w-10 h-10 bg-white p-1 rounded-full"
        />
      ),
    },
  ];

  return (
    <div id="skills" className="bg-base-200">
      <h1 className="text-primary py-6 text-5xl text-center font-semibold">
        My Skills
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-4">
        {skillsData.map((skill, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="flex items-center gap-2">
                {skill.img}
                <h2 className="card-title">{skill.name}</h2>
              </span>
              <progress
                className={`progress progress-${skill.color} w-full`}
                value={skill.level}
                max="100"
              ></progress>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
