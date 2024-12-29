import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-3xl font-extrabold text-blue-400">Emran Khoka</h1>
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖️" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed inset-0 bg-gray-800 bg-opacity-90 md:relative md:bg-transparent md:flex md:space-x-8 items-center justify-center md:justify-end transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center">
            <li>
              <a
                href="#hero"
                className="text-lg font-medium hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-lg font-medium hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
