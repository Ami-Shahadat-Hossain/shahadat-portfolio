import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "SQA: Manual & Automation Testing",
    issuer: "Ostad Academy",
    date: "August 2026",
    credentialId: "",
    link: "https://ostad.app/",
  },
  {
    title: "Web Development with PHP and Laravel",
    issuer: "Ostad Academy",
    date: "August 2023",
    credentialId: "C6546",
    link: "https://ostad.app/",
  },
  {
    title: "PHP with Laravel",
    issuer: "BASIS-SEIP Academy",
    date: "May 2023",
    credentialId: "BASIS214/OIC19/PHP9/17",
    link: "https://seip.basis.org.bd/seip",
  },
  {
    title: "Certified Ethical Hacker: CEH v11",
    issuer: "InfoSec Academy",
    date: "October 2022",
    credentialId: "ISACH2202AH",
    link: "https://infosec.ac/",
  },
  {
    title: "Professional English Communication Skill",
    issuer: "WSDA NEW ZEALAND",
    date: "May 2023",
    credentialId: "BASIS214/OIC19/PHP9",
    link: "https://seip.basis.org.bd/seip",
  },
  // {
  //   title: "MongoDB Certified Developer",
  //   issuer: "MongoDB University",
  //   date: "Mar 2023",
  //   credentialId: "MONGO-DEV-901234",
  //   link: "#",
  // },
  // {
  //   title: "GitHub Actions Certification",
  //   issuer: "GitHub",
  //   date: "Nov 2022",
  //   credentialId: "GH-ACT-123789",
  //   link: "#",
  // },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          <h2 className="section-title mb-6">Certifications</h2>
          <p className="text-muted-foreground font-mono text-sm mb-8">
            Professional certifications and credentials
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="experience-card hover:border-primary transition-colors duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono font-semibold text-foreground text-sm leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-xs font-mono mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <Calendar size={12} />
                      {cert.date}
                    </div>
                    <a
                      href={cert.link}
                      className="inline-flex items-center gap-1 text-primary text-xs font-mono hover:underline mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={10} />
                      View Credential
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
