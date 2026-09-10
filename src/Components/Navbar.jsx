import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white">
      
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
             <a
              href="#education"
              className="hover:text-cyan-400"
              >
              Education
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-5 px-6 pb-6">
          
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-400"
            >
              About
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setIsOpen(false)}>
              Education
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-400"
            >
              Contact
            </a>
          </li>

        </ul>
      )}

    </nav>
  );
}