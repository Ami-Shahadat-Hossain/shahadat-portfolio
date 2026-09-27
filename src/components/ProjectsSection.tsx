import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP System",
    description:
      "A business-focused ERP platform designed to streamline operational workflows, manage business processes, and support day-to-day enterprise activities. I lead the development of new modules, improve existing features, and work across backend architecture, database design, and business logic.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST API"],
    link: null,
    github: null,
    stars: null,
  },
  {
    title: "RATC-PMS",
    description:
      "An accounting practice management system designed to help accounting professionals streamline daily operations, manage client relationships, and improve productivity. The platform supports client onboarding, task assignment and tracking, automated scheduling and reminders, document management, and secure client data management.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST API"],
    link: "https://prac-sys.co.uk/",
    github: null,
    stars: null,
  },
  {
    title: "Health Support BD",
    description:
      "A healthcare-focused web platform developed to provide users with accessible health-related information and digital services through a modern and user-friendly online experience.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    link: "https://www.healthsupportbd.com",
    github: null,
    stars: null,
  },
  {
    title: "Development BOM & Purchase Order Management",
    description:
      "A production workflow system for managing development styles, colors, BOM materials, purchase orders, revisions, supplier workflows, and material tracking. Built with structured relationships, audit histories, and revision-based workflows.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST API"],
    link: null,
    github: null,
    stars: null,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with product and category management, order processing, Bangladesh-wide shipping rules, payment confirmation, and customer-facing shopping experiences.",
    tech: ["Laravel", "MySQL", "Next.js", "JavaScript", "REST API"],
    link: null,
    github: null,
    stars: null,
  },
  {
    title: "Business Document Management System",
    description:
      "A modern business application for managing customer information, delivery addresses, challans, invoices, and money receipts with structured workflows and automatically generated business documents.",
    tech: ["Laravel", "PostgreSQL", "Next.js", "REST API"],
    link: null,
    github: null,
    stars: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          <h2 className="section-title mb-6">Featured Projects</h2>
          <p className="text-muted-foreground font-mono text-sm mb-8">
            Some of the projects I've built and contributed to
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="experience-card hover:border-primary transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-mono font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.stars && (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Star size={12} className="fill-current" />
                        {project.stars}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm font-mono leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-primary text-sm font-mono hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1 text-muted-foreground text-sm font-mono hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
