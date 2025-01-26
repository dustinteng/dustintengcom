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
        <div className="text-2xl font-bold">
          <Link
            href="/"
            className={`transition-colors duration-300 ${
              isDarkMode
                ? "text-white hover:text-[rgba(0,255,255,0.75)]"
                : "text-black hover:text-[rgba(0,255,255,0.75)]"
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
            isDarkMode ? "bg-[rgba(0,255,255,0.75)]" : "bg-darkBlue"
          }`}
        >
          <span
            className={`absolute w-5 h-5 rounded-full shadow-md transform transition-transform ${
              isDarkMode
                ? "translate-x-6 bg-black"
                : "translate-x-1 bg-gray-300"
            }`}
          />
        </button>

        {/* Mobile Menu (Headless UI) */}
        <Menu as="div" className="relative md:hidden">
          {/* Menu Button */}
          <Menu.Button
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode
                ? "bg-darkBackground/80 text-white"
                : "bg-lightBackground/80 text-black"
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

          {/* Menu Items */}
          <Menu.Items
            className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300 ${
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
                    className={`block px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active
                        ? isDarkMode
                          ? "bg-lightBlue text-darkBackground"
                          : "bg-darkBlue text-white"
                        : isDarkMode
                        ? "text-gray-400"
                        : "text-gray-700"
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
                    ? "text-white hover:text-[rgba(0,255,255,0.75)]"
                    : "text-black hover:text-[rgba(0,255,255,0.75)]"
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
