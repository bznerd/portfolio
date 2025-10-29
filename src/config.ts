export const siteConfig = {
  name: "Ben Campbell",
  title: "BS Electrical Engineering @ Georgia Tech",
  description: "Portfolio website of Ben Campbell",
  accentColor: "#9834eb",
  backgroundColor: "#1d1c1f",
  textColor: "#5c586b",
  buttonColor: "#a6a4b0",
  social: {
    email: "bcampbell72@gatech.edu",
    linkedin: "https://www.linkedin.com/in/ben-campbell-5bba36225/",
    github: "https://github.com/bznerd",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "AvL Technologies",
      title: "Hardware/Software Engineering Intern",
      dateRange: "May 2025- Jul 2025",
      bullets: [
        "Prototyped a differential GPS based AHRS system with higher accuracy and faster heading acquisition times than commericial options for 80% cheaper",
        "Designed a POE ethernet switch as a drop in replacement for existing systems",
        "Created four scripts and utility programs to eliminate manual data collection and accelerate development cycles",
      ],
    },
    {
      company: "Mu Nirvana",
      title: "Cloud Engineering Intern",
      dateRange: "Jul 2021 - Aug 2024",
      bullets: [
        "Developed solutions for clients in regulated industries such as JP Morgan Chase and the US Air Force",
        "Used a variety of tools including Terraform, Docker, Kubernetes, and AWS to provision cloud infrastructure using declarative patterns to promote maintainability",
        "Improved CI/CD workflows to increase efficiency by as much as 10x",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institue of Technology",
      degree: "Bachelor of Science in Electrical Engineering",
      dateRange: "2024 - 2028",
      achievements: [
        "4.0 GPA",
        "IEEE SoutheastCon Hardware Competition Lead",
      ],
    },
  ],
};
