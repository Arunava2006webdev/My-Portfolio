import hero from "../assets/arunava.png";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div className="text-center md:text-left">
          <p className="text-cyan-400 text-lg mb-2">Hello, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Arunava Mandal
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 leading-7 mb-8 max-w-xl mx-auto md:mx-0">
            I build responsive web applications using React,
            Node.js, Express, and MySQL.
          </p>

          <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition duration-300">
            Download Resume
          </button>
        </div>

        <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400">
            <img
            src={hero}
            alt="Arunava Mandal"
            className="w-full h-full object-cover"
             />
            </div>
        </div>

      </div>
    </section>
  );
}