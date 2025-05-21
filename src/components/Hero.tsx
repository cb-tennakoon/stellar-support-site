
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 pb-16 px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-200 via-dark-300 to-dark-300"></div>
        <div className="absolute top-40 left-[10%] w-72 h-72 bg-purple-100/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-[10%] w-72 h-72 bg-blue-accent/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-gray-400 text-xl mb-3 animate-fade-in">Hello, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gradient">
          John Smith
        </h1>
        <div className="h-[2px] w-24 bg-gradient-to-r from-purple-100 to-blue-accent mx-auto mb-6 animate-scale-in"></div>
        <h3 className="text-2xl md:text-3xl mb-8 animate-fade-in">
          Application Support Engineer
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in">
          I solve complex technical challenges and ensure seamless system operations.
          With expertise in troubleshooting, monitoring, and optimization, I bridge 
          the gap between users and technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in">
          <Button className="bg-purple-100 hover:bg-purple-200 text-white px-8 py-6 rounded-lg">
            Download Resume
          </Button>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Button variant="outline" className="border-purple-100 text-purple-100 hover:bg-purple-100/10 px-8 py-6 rounded-lg">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="flex flex-col items-center text-gray-400 hover:text-purple-100 cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
