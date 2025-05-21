
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-200/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">JSPortfolio</div>
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "skills", "experience", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-gray-300 hover:text-purple-100 transition-colors text-sm uppercase tracking-wider cursor-pointer"
            >
              {section}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-gray-300">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
