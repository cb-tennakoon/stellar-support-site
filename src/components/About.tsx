
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Settings } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-100 to-blue-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-2xl border-2 border-purple-100/20">
                <div className="w-full h-full bg-dark-100 flex items-center justify-center">
                  <span className="text-4xl text-gray-600">Profile Image</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-accent rounded-full -z-10"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-blue-accent to-purple-100 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold">Application Support Engineer</h3>
            <p className="text-gray-300">
              With over 5 years of experience in application support and system administration,
              I specialize in ensuring business-critical applications run smoothly and efficiently.
              I'm passionate about troubleshooting complex issues and improving system performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-100"></span>
                <span>Based in New York, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-100"></span>
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-100"></span>
                <span>ITIL Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-100"></span>
                <span>Available for Remote Work</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="bg-dark-200 border border-white/5">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100/10 w-14 h-14 flex items-center justify-center mb-6">
                <Briefcase className="text-purple-100" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-gray-400">
                Providing expert-level support for critical business applications, 
                ensuring minimal downtime and maximum user satisfaction.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-dark-200 border border-white/5">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100/10 w-14 h-14 flex items-center justify-center mb-6">
                <Code className="text-purple-100" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automation</h3>
              <p className="text-gray-400">
                Creating scripts and workflows to automate repetitive tasks,
                improving efficiency and reducing human error.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-dark-200 border border-white/5">
            <CardContent className="p-6">
              <div className="rounded-full bg-purple-100/10 w-14 h-14 flex items-center justify-center mb-6">
                <Settings className="text-purple-100" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">System Optimization</h3>
              <p className="text-gray-400">
                Analyzing and improving system performance through monitoring, 
                troubleshooting, and implementing best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
