import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-muted/20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-3">// Contact</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-primary glow-text-green">Connect</span>
          </h3>
          <p className="text-muted-foreground text-lg mb-10">
            Have a security challenge or want to collaborate? Feel free to reach out.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { icon: Mail, href: "mailto:abner09ezequias@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+18099022664", label: "809-902-2664" },
              { icon: Github, href: "https://github.com/AbnerEzequiasD", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abner-dominguez2", label: "LinkedIn" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-xl border border-border bg-card flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">{link.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 font-mono text-sm transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 font-mono text-sm transition-colors"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 font-mono text-sm resize-none transition-colors"
            />
            <button
              type="submit"
              className="gradient-cyber text-primary-foreground font-semibold px-8 py-3 rounded-lg glow-green hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
