export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-cyan-400 font-semibold mb-2">
          Get To Know
        </p>

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-300 leading-8">
              I am a Computer Science student passionate about
              Full Stack Web Development. I enjoy building
              responsive and user-friendly web applications
              using React, Node.js, Express, and MySQL.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-800 rounded-xl p-4">
              <h3 className="font-semibold text-cyan-400">
                Education
              </h3>
              <p className="text-gray-400">
                B.Tech in Computer Science
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-4">
              <h3 className="font-semibold text-cyan-400">
                Location
              </h3>
              <p className="text-gray-400">
                Kolkata, India
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-4">
              <h3 className="font-semibold text-cyan-400">
                Interests
              </h3>
              <p className="text-gray-400">
                Full Stack Development • DSA • Problem Solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}