export default function Skills() {
  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    
  ];

  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 font-semibold mb-2">My Skills</p>

        <h2 className="text-4xl font-bold mb-10">
          Technologies I Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500 hover:scale-105 transition duration-300"
            >
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}