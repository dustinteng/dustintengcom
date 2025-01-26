import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const sections = [
    "home",
    "about",
    "experience",
    "education",
    "portfolio",
    "contact",
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 py-4 transition-colors duration-300 ${
        isDarkMode
          ? "bg-darkBackground text-white"
          : "bg-lightBackground text-black"
      } bg-opacity-80 backdrop-blur`}
    >
      <nav className="container flex justify-between items-center px-6">
        {/* Logo */}
        <div
          className={`text-2xl font-bold transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-darkBlue"
          }`}
        >
          <Link
            href="/"
            className={`hover:text-neonBlue transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Tengdyantono
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className={`mx-auto relative w-12 h-7 rounded-full flex items-center transition-all duration-300 ${
            isDarkMode ? "bg-neonBlue" : "bg-darkBlue"
          }`}
        >
          <span
            className={`absolute w-5 h-5 rounded-full shadow-md transform transition-transform ${
              isDarkMode
                ? "translate-x-6 bg-white"
                : "translate-x-1 bg-gray-300"
            }`}
          />
        </button>

        {/* Mobile Menu (Headless UI) */}
        <Menu as="div" className="relative md:hidden">
          <Menu.Button
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode
                ? "bg-lightBlue/20 hover:bg-lightBlue text-white"
                : "bg-darkBlue/20 hover:bg-darkBlue text-black"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {({ open }) =>
              open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )
            }
          </Menu.Button>
          <Menu.Items
            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isDarkMode
                ? "bg-darkBackground text-white"
                : "bg-lightBackground text-black"
            }`}
          >
            {sections.map((section) => (
              <Menu.Item key={section}>
                {({ active }) => (
                  <Link
                    href={`#${section}`}
                    className={`block px-4 py-2 text-sm ${
                      active
                        ? isDarkMode
                          ? "bg-lightBlue text-darkBackground"
                          : "bg-darkBlue text-white"
                        : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 ml-auto">
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-white hover:text-neonBlue"
                    : "text-black hover:text-darkBlue"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
