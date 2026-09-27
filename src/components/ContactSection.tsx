import { useState } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="main-card p-8 md:p-10">
          <h2 className="section-title mb-6">Get In Touch</h2>
          <p className="text-muted-foreground font-mono text-sm mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-mono text-sm"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-mono text-sm"
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="font-mono text-sm"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="font-mono text-sm resize-none"
              />
              <Button type="submit" className="w-full font-mono">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="experience-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:shahadat.hunter@gmail.com"
                      className="text-muted-foreground text-sm font-mono hover:text-primary"
                    >
                      shahadat.hunter@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="experience-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-foreground mb-1">
                      Location
                    </h3>
                    <p className="text-muted-foreground text-sm font-mono">
                      Chattogram, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="experience-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-foreground mb-1">
                      Response Time
                    </h3>
                    <p className="text-muted-foreground text-sm font-mono">
                      Usually within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
