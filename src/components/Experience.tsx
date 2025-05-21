
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Application Support Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: [
        "Lead a team of 5 support engineers handling complex application issues",
        "Implemented monitoring solutions that reduced system outages by 40%",
        "Created knowledge base articles and automation scripts that improved response time by 35%",
        "Coordinate with development teams to implement fixes and enhancements"
      ]
    },
    {
      title: "Application Support Specialist",
      company: "Global Systems Ltd.",
      period: "2018 - 2021",
      description: [
        "Provided L2/L3 support for financial applications used by 5000+ users",
        "Reduced ticket resolution time by 25% through process improvements",
        "Implemented automated health checks for critical systems",
        "Collaborated with vendors to resolve complex integration issues"
      ]
    },
    {
      title: "IT Support Technician",
      company: "DataCore Services",
      period: "2016 - 2018",
      description: [
        "Provided hardware and software support for 200+ employees",
        "Assisted in network configuration and maintenance",
        "Created user guides and conducted training sessions",
        "Managed IT inventory and procurement processes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Work Experience</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-100 to-blue-accent mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            My professional journey as an Application Support Engineer, solving complex
            technical challenges across different industries.
          </p>
        </div>
        
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-100 before:via-blue-accent before:to-purple-100/0 before:z-0">
          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:justify-center`}>
              <div className="order-1 md:w-1/2 md:pr-8 md:pl-8 relative">
                <Card className="relative glass-card border-white/5 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-purple-100">{experience.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 mt-2 md:mt-0 px-3 py-1 rounded-full border border-white/10">
                        {experience.period}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      {experience.description.map((point, i) => (
                        <li key={i} className="text-gray-300">{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="z-10 flex items-center justify-center order-1 bg-purple-100 shadow-md w-10 h-10 rounded-full md:mx-0 relative">
                <span className="text-dark-300">{experiences.length - index}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
