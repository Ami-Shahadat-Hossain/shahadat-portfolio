import { Globe, Linkedin, Mail, Contact } from "lucide-react";
import { SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";

const socialLinks = [
  {
    icon: Contact,
    href: "https://ami-shahadat-hossain.github.io/profile-card/profile-card-shahadat.html",
    label: "Profile Card Portfolio",
    color: "text-foreground",
  },
  {
    icon: Globe,
    href: "https://shahadat-hossain-portfolio.vercel.app/",
    label: "Portfolio Website",
    color: "text-foreground",
  },
  // { icon: Globe, href: "#", label: "Portfolio" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohammad-shahadat-hossain-54351a139/",
    label: "LinkedIn",
    color: "text-[#0A66C2]",
  },
  {
    icon: SiDiscord,
    href: "https://discord.com/users/1072566988372713473",
    label: "Discord",
    color: "text-[#5865F2]",
  },
  {
    icon: SiGithub,
    href: "https://github.com/Ami-Shahadat-Hossain",
    label: "GitHub",
    color: "text-[#181717] dark:text-white",
  },
  {
    icon: Mail,
    href: "mailto:shahadat.user.com",
    label: "Email",
    color: "text-[#EA4335]",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Mohammad Shahadat Hossain
              </h1>

              <h2 className="text-lg md:text-xl font-semibold text-muted-foreground mb-4">
                Software Engineer & Full-Stack Web Developer
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4 font-mono text-sm">
                I build modern, scalable software products and full-stack web
                applications, with a strong focus on Laravel, PHP, JavaScript,
                Next.js, REST APIs, and modern backend technologies. I’m
                continuously expanding my expertise in Python, FastAPI, AI,
                Generative AI, and cloud technologies to develop intelligent,
                production-ready solutions.
              </p>

              <p className="text-muted-foreground text-sm font-mono mb-6">
                📍 Chattogram, Bangladesh
              </p>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    target="_blank"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon
                      size={18}
                      className={`${social.color} transition-transform duration-200 group-hover:scale-110`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex-shrink-0 mx-auto md:mx-0 group">
              {/* Animated Ring */}
              <div
                className="absolute animate-ring-spin"
                style={{ inset: "-8px" }}
                aria-hidden="true"
              >
                <div className="relative w-full h-full">
                  <div className="absolute w-1/2 h-1/2 border-t-4 border-l-4 border-[#4285f4] rounded-tl-full" />

                  <div className="absolute right-0 w-1/2 h-1/2 border-t-4 border-r-4 border-[#ea4335] rounded-tr-full" />

                  <div className="absolute bottom-0 w-1/2 h-1/2 border-b-4 border-l-4 border-[#fbbc05] rounded-bl-full" />

                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-4 border-r-4 border-[#34a853] rounded-br-full" />
                </div>
              </div>

              {/* Normal Profile Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full bg-background shadow-lg z-10">
                <img
                  src="/assets/shahadat.png"
                  alt="Mohammad Shahadat Hossain"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Full Image Hover Preview */}
              <div
                className="
                      pointer-events-none
                      absolute
                      z-50
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      opacity-0
                      scale-75
                      group-hover:opacity-100
                      group-hover:scale-100
                      transition-all
                      duration-500
                      ease-out
                    "
              >
                <div
                  className="
                        w-72
                        h-72
                        md:w-80
                        md:h-80
                        rounded-2xl
                        overflow-hidden
                        bg-background
                        border
                        border-border
                        shadow-2xl
                        p-2
                      "
                >
                  <img
                    src="/assets/shahadat.png"
                    alt="Mohammad Shahadat Hossain"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
