export default function Projects() {
  const projects = [
    {
      title: "Attendance Management System",
      description:
        "A full stack web app for managing student attendance with teacher and student dashboards.",
      tech: "•Html •Css •Javascript • Node.js • Express • MySQL",
    },
    {
      title: "Sports Talent Assessment",
      description:
        "AI-based athlete assessment system with pose verification and performance tracking.",
      tech: "React • TypeScript • MediaPipe",
    },
    
  ];

  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 font-semibold mb-2">My Work</p>

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 transition duration-300"
            >
              <div className="h-44 bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400">Project Image</p>
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

                <button className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}