export default function Education() {
  return (
    <section id="education" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">

        <p className="text-cyan-400 font-semibold mb-2">
          My Journey
        </p>

        <h2 className="text-4xl font-bold mb-10">
          Education
        </h2>

        <div className="border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition duration-300">

          <h3 className="text-2xl font-semibold">
            B.Tech in Computer Science and Engineering
          </h3>

          <p className="text-cyan-400 mt-2">
            Budge Budge Institute of Technology
          </p>

          <p className="text-gray-400 mt-2">
            Kolkata, West Bengal
          </p>

          <p className="text-gray-400 mt-4">
            Currently pursuing my Bachelor's degree in Computer
            Science and Engineering.
          </p>

        </div>
        <div className="border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition duration-300">

          <h3 className="text-2xl font-semibold">
            Higher Secondary Education
          </h3>

          <p className="text-cyan-400 mt-2">
            Kalipur High School
          </p>

          <p className="text-gray-400 mt-2">
            Kolkata, West Bengal
          </p>

          <p className="text-gray-400 mt-4">
            Completed Higher Secondary education in 2023.
          </p>

        </div>
        <div className="border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition duration-300">

          <h3 className="text-2xl font-semibold">
            Secondary Education
          </h3>

          <p className="text-cyan-400 mt-2">
            Kalipur High School
          </p>

          <p className="text-gray-400 mt-2">
            Kolkata, West Bengal
          </p>

          <p className="text-gray-400 mt-4">
            Completed Higher Secondary education in 2021.
          </p>

        </div>



      </div>
    </section>
  );
}