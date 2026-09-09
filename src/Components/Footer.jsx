export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p>
          © 2026 Arunava Mandal. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Arunava2006webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arunava-mandal-891a50307/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}