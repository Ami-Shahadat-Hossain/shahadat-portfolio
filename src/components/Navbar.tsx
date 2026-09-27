import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Gallery", href: "#gallery" },
  // { name: 'Courses', href: '#courses' },
  // { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const Navbar = ({ activeSection, onNavClick }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    const section = href.replace("#", "");
    onNavClick(section);
    setMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="flex items-center gap-3 group"
            aria-label="Mohammad Shahadat Hossain - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span className="text-primary-foreground font-mono font-bold text-lg">
                SH
              </span>
            </div>

            <div className="hidden sm:block leading-tight">
              <div className="font-semibold text-foreground">
                Shahadat Hossain
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                Software Engineer
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const section = item.href.replace("#", "");
              const isActive = activeSection === section;
              return (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className={`nav-link ${isActive ? "nav-link-active" : "nav-link-inactive"}`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const section = item.href.replace("#", "");
                const isActive = activeSection === section;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.href)}
                    className={`nav-link text-left ${isActive ? "nav-link-active" : "nav-link-inactive"}`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
