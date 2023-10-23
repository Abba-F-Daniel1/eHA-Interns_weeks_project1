import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import DarkMode from "../components/DarkMode"; // Import DarkMode

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <section>
      <nav className={`py-10 mb-12 flex justify-between ${darkMode ? 'dark:text-white' : ''}`}>
        <h1 className="font-burtons text-xl dark:text-white">Abba Daniel</h1>
        <ul className="flex items-center">
          <li>
            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          </li>
          <li>
            <Link
              smooth to="/abba-portfolio#about"
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth to="/abba-portfolio#skills"
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              smooth to="/abba-portfolio#contact"
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
