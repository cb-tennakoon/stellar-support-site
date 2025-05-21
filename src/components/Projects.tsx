
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Automated Incident Response System",
      description: "Developed a system that automatically categorizes and routes support tickets based on content analysis, reducing triage time by 60%.",
      technologies: ["Python", "ServiceNow", "NLP", "REST API"]
    },
    {
      title: "System Performance Dashboard",
      description: "Created a real-time monitoring dashboard for critical business applications, providing early warning of potential issues.",
      technologies: ["Grafana", "Prometheus", "SQL", "Docker"]
    },
    {
      title: "Knowledge Base Optimization",
      description: "Restructured and enhanced the company knowledge base, reducing time to find relevant solutions by 45%.",
      technologies: ["Confluence", "Jira", "Content Management"]
    },
    {
      title: "Automated Backup Verification",
      description: "Built a system to automatically verify database backups by spinning up temporary instances and validating data integrity.",
      technologies: ["PowerShell", "SQL Server", "Azure", "Automation"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-dark-200">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-100 to-blue-accent mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Key projects where I've applied my skills to solve real-world problems
            and improve application support processes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-dark-100 border-white/5 overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-100/10 to-blue-accent/10 flex items-center justify-center">
                <span className="text-xl text-gray-500">Project Image</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-purple-100/10 text-purple-100 border-purple-100/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="text-purple-100 hover:bg-purple-100/10">
                  <Link className="mr-2" size={16} />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
