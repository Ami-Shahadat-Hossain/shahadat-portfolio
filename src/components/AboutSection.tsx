import { useState } from "react";
import { ExternalLink, Globe, GraduationCap } from "lucide-react";

const workExperience = [
  {
    title: "Executive ERP",
    company: "HKD Innovations Ltd.",
    type: "Full-Time",
    location: "Chattogram, Bangladesh",
    period: "Jan 2026 – Present",
    description:
      "Leading the development and continuous improvement of an ERP platform, working across system architecture, backend development, database design, and business workflows. Building new modules, improving existing features, and turning real-world business requirements into practical software solutions.",
    link: "https://hkdglobal.net/",
  },
  {
    title: "Assistant Software Engineer",
    company: "Tappware Solutions Ltd.",
    type: "Full-Time",
    location: "Chattogram, Bangladesh",
    period: "May 2023 – Dec 2025",
    description:
      "Contributing to the development and maintenance of software applications. Working closely with clients to understand their requirements and deliver high-quality solutions.",
    link: "https://tappware.com/",
  },
  {
    title: "Junior Software Engineer",
    company: "Tappware Solutions Ltd.",
    type: "Full-Time",
    location: "Chattogram, Bangladesh",
    period: "May 2022 – May 2023",
    description:
      "Started my professional software engineering journey by contributing to web application development, bug fixing, database operations, and feature implementation. Worked with senior developers to learn best practices and build a strong foundation in modern software development.",
    link: "https://tappware.com/",
  },
];

const education = [
  {
    degree:
      "Master of Business Administration (Major in Supply Chain Management)",
    institution: "International Islamic University, Chittagong",
    location: "Chattogram, Bangladesh",
    period: "2017 – 2019",
    description:
      "Focused on software engineering, algorithms, and database management systems.",
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "International Islamic University, Chittagong",
    location: "Chattogram, Bangladesh",
    period: "2012 – 2016",
    description:
      "Focused on software engineering, algorithms, and database management systems.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. City College",
    location: "Chattogram, Bangladesh",
    period: "2009 – 2011",
    description: "Science group with focus on Mathematics and Physics.",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["HTML/CSS", "JavaScript", "Tailwind CSS", "Blade", "Next.js"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Python", "Django", "RESTful APIs"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis"],
  },
  { category: "DevOps", items: ["CI/CD", "Linux"] },
  {
    category: "Tools",
    items: ["VS Code", "Postman", "Figma", "Jira", "ClickUp"],
  },
  {
    category: "Currently Exploring",
    items: ["Python", "FastAPI", "Docker", "AWS", "Generative AI"],
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<"career" | "latest">("career");

  return (
    <section id="about" className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          {/* Tab Buttons */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab("career")}
                className={`tab-button ${activeTab === "career" ? "tab-active" : "tab-inactive"}`}
              >
                Career Story
              </button>
              <button
                onClick={() => setActiveTab("latest")}
                className={`tab-button ${activeTab === "latest" ? "tab-active" : "tab-inactive"}`}
              >
                Latest from Shahadat
              </button>
            </div>
          </div>

          {activeTab === "career" && (
            <>
              {/* About Me */}
              <div className="mb-10">
                <h2 className="section-title mb-4">About Me</h2>
                <div className="space-y-4 text-muted-foreground font-mono text-sm leading-relaxed">
                  <p>
                    I am a Software Engineer and Full-Stack Web Developer with
                    years of experience building modern, scalable, and
                    business-focused software solutions. My core expertise
                    includes Laravel{" "}
                    <a
                      href="https://prac-sys.co.uk/"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      products <ExternalLink size={12} />
                    </a>{" "}
                    , PHP, JavaScript, RESTful APIs, SQL, and full-stack
                    application development. Currently, I build and lead the
                    development of ERP software, working across system
                    architecture, backend development, database design, business
                    workflows, and user-facing features. I am actively involved
                    in developing new modules, improving existing functionality,
                    and customizing the system to meet evolving business
                    requirements.
                  </p>
                  <p>
                    I enjoy turning real-world business challenges into
                    practical software solutions that improve efficiency,
                    streamline workflows, and make day-to-day operations easier.
                    My experience includes working on ERP systems, business
                    management applications, e-commerce platforms, and custom
                    web solutions.
                  </p>
                  <p>
                    Alongside my professional work, I am expanding my expertise
                    in Python, FastAPI, Docker, cloud technologies, and
                    Artificial Intelligence. I am particularly interested in
                    Generative AI, RAG, AI Agents, and building intelligent
                    applications that combine modern software engineering with
                    AI.
                  </p>
                  <p>
                    My goal is to continue building reliable and impactful
                    software, stay ahead of emerging technologies, and turn
                    complex business requirements into simple, scalable, and
                    useful digital solutions.
                  </p>
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-10">
                <h2 className="section-title mb-6">Work Experience</h2>
                <div className="space-y-6">
                  {workExperience.map((job, index) => (
                    <div key={index} className="experience-card">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-mono font-semibold text-foreground">
                            {job.title}
                          </h3>
                          <p className="text-muted-foreground text-sm font-mono">
                            {job.company} · {job.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground">
                            {job.location}
                          </span>
                          <p className="text-muted-foreground text-sm font-mono mt-1">
                            {job.period}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm font-mono leading-relaxed mb-3">
                        {job.description}
                      </p>
                      <a
                        href={job.link}
                        className="inline-flex items-center gap-1 text-primary text-sm font-mono hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe size={14} />
                        {job.link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-10">
                <h2 className="section-title mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="experience-card">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <GraduationCap size={20} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-mono font-semibold text-foreground">
                              {edu.degree}
                            </h3>
                            <p className="text-muted-foreground text-sm font-mono">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground">
                            {edu.location}
                          </span>
                          <p className="text-muted-foreground text-sm font-mono mt-1">
                            {edu.period}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm font-mono leading-relaxed ml-13">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="section-title mb-6">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="experience-card">
                      <h3 className="font-mono font-semibold text-foreground mb-4">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 bg-muted rounded-lg text-sm font-mono text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "latest" && (
            <div className="max-w-3xl mx-auto text-center py-12">
              <p className="text-sm leading-relaxed text-muted-foreground">
                These days, I’m focused on building meaningful software and
                becoming a better engineer every day. I’m leading the
                development of ERP solutions while deepening my expertise in
                full-stack development, Python, AI, Generative AI, cloud
                technologies, and modern software architecture.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                At the same time, I’m preparing for international higher
                education to strengthen my academic foundation, gain global
                exposure, and take my software engineering journey to the next
                level.
              </p>

              <p className="mt-5 font-mono text-sm text-muted-foreground">
                Build. Learn. Explore. Improve. Repeat.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
