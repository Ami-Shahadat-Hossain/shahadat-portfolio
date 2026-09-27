const techStack = [
  // Languages
  { name: "PHP", icon: "🐘", category: "Languages" },
  { name: "JavaScript", icon: "🟨", category: "Languages" },
  { name: "Python", icon: "🐍", category: "Languages" },

  // Frontend
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "Blade", icon: "◈", category: "Frontend" },

  // Backend
  { name: "Laravel", icon: "🔴", category: "Backend" },
  { name: "Django", icon: "🟢", category: "Backend" },
  { name: "FastAPI", icon: "⚡", category: "Backend" },
  { name: "RESTful API", icon: "🔗", category: "Backend" },

  // Database
  { name: "MySQL", icon: "🐬", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Redis", icon: "🔴", category: "Database" },

  // DevOps & Cloud
  { name: "Git", icon: "📦", category: "DevOps & Cloud" },
  { name: "Docker", icon: "🐳", category: "DevOps & Cloud" },
  { name: "Linux", icon: "🐧", category: "DevOps & Cloud" },
  { name: "AWS", icon: "☁️", category: "DevOps & Cloud" },

  // Tools
  { name: "VS Code", icon: "💻", category: "Tools" },
  { name: "Postman", icon: "📮", category: "Tools" },
  { name: "Figma", icon: "🎨", category: "Tools" },
];

const TechStackSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          <h2 className="section-title mb-6">Tech Stack</h2>
          <p className="text-muted-foreground font-mono text-sm mb-8">
            Technologies and tools I work with on a daily basis
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span className="font-mono text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
