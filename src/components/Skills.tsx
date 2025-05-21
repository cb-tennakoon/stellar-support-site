
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const technicalSkills: Skill[] = [
    { name: "SQL & Database Management", level: 90 },
    { name: "Windows Server Administration", level: 85 },
    { name: "Linux Administration", level: 80 },
    { name: "PowerShell & Bash Scripting", level: 75 },
    { name: "Network Troubleshooting", level: 85 },
    { name: "Cloud Services (AWS/Azure)", level: 80 },
  ];

  const softwareSkills: Skill[] = [
    { name: "ServiceNow", level: 95 },
    { name: "JIRA & Confluence", level: 90 },
    { name: "SolarWinds", level: 85 },
    { name: "Splunk", level: 80 },
    { name: "Microsoft 365 Admin", level: 90 },
    { name: "Docker & Containerization", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-dark-200">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">My Skills</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-100 to-blue-accent mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            My technical expertise and professional skills developed over years of
            solving complex problems and supporting critical business applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-purple-100">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-dark-100">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-100 to-blue-accent rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </Progress>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">Software & Tools</h3>
            <div className="space-y-6">
              {softwareSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-purple-100">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-dark-100">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-100 to-blue-accent rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </Progress>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="glass-card rounded-xl flex items-center justify-center p-6">
            <span className="text-center font-semibold">ITIL v4</span>
          </div>
          <div className="glass-card rounded-xl flex items-center justify-center p-6">
            <span className="text-center font-semibold">CompTIA A+</span>
          </div>
          <div className="glass-card rounded-xl flex items-center justify-center p-6">
            <span className="text-center font-semibold">Azure Admin</span>
          </div>
          <div className="glass-card rounded-xl flex items-center justify-center p-6">
            <span className="text-center font-semibold">AWS Cloud</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
