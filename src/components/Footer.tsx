
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-100 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-gradient mb-2">CBPortfolio</div>
            <p className="text-gray-400">Application Support Engineer</p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-purple-100 transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-purple-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:chathuranga.bandara@example.com" 
              className="text-gray-400 hover:text-purple-100 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="h-px bg-white/10 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Chathuranga Bandara. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
