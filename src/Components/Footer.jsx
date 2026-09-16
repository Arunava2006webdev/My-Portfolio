import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" text-gray-400 border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm flex items-center gap-1">
             © 2026 Arunava Mandal. Made with
        <FaHeart className="text-red-500" />
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