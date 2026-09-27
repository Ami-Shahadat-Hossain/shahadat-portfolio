import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";
const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/Ami-Shahadat-Hossain",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohammad-shahadat-hossain-54351a139/",
    label: "LinkedIn",
  },
  {
    icon: SiDiscord,
    href: "https://discord.com/users/1072566988372713473",
    label: "Discord",
  },
  { icon: Mail, href: "mailto:shahadat.hunter@gmail.com", label: "Email" },
];
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))] mt-8">
      {" "}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {" "}
        <div className="grid md:grid-cols-3 gap-10">
          {" "}
          {/* ============================================ LEFT - PROFILE ============================================ */}{" "}
          <div>
            {" "}
            <h3 className="font-mono font-bold text-xl text-white mb-2">
              {" "}
              Mohammad Shahadat Hossain{" "}
            </h3>{" "}
            <p className="font-mono text-sm text-[hsl(var(--footer-muted))] mb-4">
              {" "}
              Software Engineer & Full-Stack Web Developer{" "}
            </p>{" "}
            <p className="font-mono text-sm text-[hsl(var(--footer-foreground))] leading-relaxed mb-6">
              {" "}
              Building modern, scalable, and business-focused software solutions
              with Laravel, PHP, JavaScript, Next.js, REST APIs, and modern
              backend technologies.{" "}
            </p>{" "}
            {/* Social Icons */}{" "}
            <div className="flex gap-3">
              {" "}
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-200 hover:bg-transparent hover:-translate-y-0.5"
                    aria-label={social.label}
                    title={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Icon
                      size={18}
                      className="text-[hsl(var(--footer-foreground))] transition-transform duration-200"
                    />{" "}
                  </a>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
          {/* ============================================ MIDDLE - QUICK LINKS ============================================ */}{" "}
          <div>
            {" "}
            <h4 className="font-mono font-semibold text-white mb-4">
              {" "}
              Quick Links{" "}
            </h4>{" "}
            <ul className="space-y-2">
              {" "}
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {" "}
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className="font-mono text-sm text-[hsl(var(--footer-foreground))] hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {" "}
                    {link.name}{" "}
                  </button>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
          </div>{" "}
          {/* ============================================ RIGHT - CONTACT INFORMATION ============================================ */}{" "}
          <div>
            {" "}
            <h4 className="font-mono font-semibold text-white mb-4">
              {" "}
              Contact Info{" "}
            </h4>{" "}
            <div className="space-y-4">
              {" "}
              {/* Location */}{" "}
              <div className="flex items-start gap-3">
                {" "}
                <MapPin
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />{" "}
                <div>
                  {" "}
                  <p className="font-mono text-sm text-[hsl(var(--footer-foreground))]">
                    {" "}
                    Chattogram, Bangladesh{" "}
                  </p>{" "}
                  <p className="font-mono text-xs text-[hsl(var(--footer-muted))]">
                    {" "}
                    Available for remote work worldwide{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* Email */}{" "}
              <div className="flex items-start gap-3">
                {" "}
                <Mail
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />{" "}
                <div>
                  {" "}
                  <a
                    href="mailto:shahadat.hunter@gmail.com"
                    className="font-mono text-sm text-[hsl(var(--footer-foreground))] hover:text-white transition-colors"
                  >
                    {" "}
                    shahadat.hunter@gmail.com{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              {/* Phone */}{" "}
              <div className="flex items-start gap-3">
                {" "}
                <Phone
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />{" "}
                <div>
                  {" "}
                  <p className="font-mono text-sm text-[hsl(var(--footer-foreground))]">
                    {" "}
                    Available upon request{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* ============================================ COPYRIGHT / BOTTOM ============================================ */}{" "}
        <div className="border-t border-white/10 mt-10 pt-6">
          {" "}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {" "}
            <p className="font-mono text-sm text-[hsl(var(--footer-muted))] text-center md:text-left">
              {" "}
              © {currentYear} Mohammad Shahadat Hossain. All rights
              reserved.{" "}
            </p>{" "}
            <p className="font-mono text-xs text-[hsl(var(--footer-muted))]">
              {" "}
              Built with React & TypeScript{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
