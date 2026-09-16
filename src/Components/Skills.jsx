import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb
} from "react-icons/si";
export default function Skills() {
  const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-300" }
    ]
  },

  {
    title: "Frontend",
    skills: [
       { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
    ]
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" }

    ]
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
    ]
  },

  {
    title: "Tools",
    skills: [
       { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" }
    ]
  }
];

  return (
    <section id="skills" className=" text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 font-semibold mb-2">My Skills</p>

        <h2 className="text-4xl font-bold mb-10">
          Technologies I Use
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
  {skillCategories.map((category) => (
  <div key={category.title}>

    <h3 className="text-2xl font-semibold mb-6">
      {category.title}
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {category.skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <div
            key={skill.name}
            className="border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400 hover:scale-105 transition duration-300"
          >
            <Icon className={`text-5xl ${skill.color} mx-auto mb-3`} />

            <p className="font-semibold">
              {skill.name}
            </p>
          </div>
        );
      })}

    </div>
  </div>
))}
</div>
        
      </div>
    </section>
  );
}