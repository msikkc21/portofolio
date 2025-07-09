import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Cek apakah ada preferensi yang tersimpan di localStorage
    const savedTheme = localStorage.getItem("theme");
    // Jika tidak ada preferensi tersimpan, gunakan 'dark' sebagai default
    return savedTheme ? savedTheme : "dark";
  });
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };
  
  const navItems = [
    { href: "#about", text: "About" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#skills", text: "Skills" },
    // { href: "#certificates", text: "Certificates" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <div className="w-full transition-all duration-200">
      <nav className={`navbar flex items-center justify-between relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${scrolled ? 'py-2' : 'py-4'} z-50`}>
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img 
              src={darkMode === "dark" ? "assets/logo_dark.png" : "assets/logo_light.png"}
              alt="Logo" 
              className="w-10 h-10 rounded-full transition-opacity duration-200" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="text-gray-800 dark:text-gray-200 hover:text-[#007BFF] dark:hover:text-[#007BFF] font-medium transition-colors duration-200 relative nav-link"
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode === "dark" ? (
              <svg className="w-5 h-5 text-[#007BFF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#007BFF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-700 dark:text-gray-200"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-all duration-200 ease-in-out ${
          isOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0" onClick={() => setIsOpen(false)}>
          <div className={`flex flex-col flex-grow bg-white/80 dark:bg-[#051630]/80 backdrop-blur-md ${scrolled ? 'mt-14' : 'mt-16'} shadow-sm border-l border-gray-800`}>
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="block px-6 py-4 text-black hover:bg-gray-200 dark:text-gray-200 dark:hover:text-white dark:hover:bg-[#002a5c] transition-colors duration-200 font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
