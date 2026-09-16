import Attendance from "../assets/Attendance.png";
import Sports from "../assets/Sports.png";
export default function Projects() {
  const projects = [
    {
      title: "Attendance Management System",
      description:
        "A full stack web app for managing student attendance with teacher and student dashboards.",
      tech: "•Html •Css •Javascript • Node.js • Express • MySQL",
      image: Attendance,
      github: "https://github.com/Arunava2006webdev/Attendance-System",
    live: "https://attendance-system-arunava.netlify.app/",
    },
    {
      title: "Sports Talent Assessment",
      description:
        "AI-based athlete assessment system with pose verification and performance tracking.",
      tech: "React • TypeScript • MediaPipe",
      image: Sports,
      github: "https://github.com/Arunava2006webdev/KhelsetuApp",
      live: "#",
    },
    
  ];

  return (
    <section id="projects" className=" text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 font-semibold mb-2">My Work</p>

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
  key={project.title}
  className="border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
>
  <div className="bg-gray-900 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-auto"
  />
</div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4">
                  {project.description}
                </p>

                <p className="text-cyan-400 text-sm mb-5">
                  {project.tech}
                </p>

                <div className="flex gap-4">

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
  >
    GitHub
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-300 transition"
  >
    Live Demo
  </a>

</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}