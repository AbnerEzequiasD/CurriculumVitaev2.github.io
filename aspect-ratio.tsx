import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield, Bug, Lock } from "lucide-react";

const projects = [
  {
    title: "VulnScanner Pro",
    description: "Automated vulnerability scanner for web applications. Detects OWASP Top 10 threats with custom rule engine.",
    tags: ["Python", "Docker", "REST API"],
    icon: Bug,
    accent: "primary",
  },
  {
    title: "SecureAuth Framework",
    description: "Zero-trust authentication framework with MFA, biometrics support, and anomaly detection for enterprise apps.",
    tags: ["TypeScript", "OAuth 2.0", "JWT"],
    icon: Lock,
    accent: "neon-cyan",
  },
  {
    title: "ThreatMap Dashboard",
    description: "Real-time threat intelligence dashboard visualizing global attack patterns and IoC feeds.",
    tags: ["React", "D3.js", "ElasticSearch"],
    icon: Shield,
    accent: "neon-magenta",
  },
];

const accentBorder: Record<string, string> = {
  primary: "hover:border-primary/60",
  "neon-cyan": "hover:border-neon-cyan/60",
  "neon-magenta": "hover:border-neon-magenta/60",
};

const accentText: Record<string, string> = {
  primary: "text-primary",
  "neon-cyan": "text-neon-cyan",
  "neon-magenta": "text-neon-magenta",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-3">// Projects</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-neon-magenta glow-text-magenta">Work</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className={`group rounded-xl border border-border bg-card p-6 flex flex-col transition-all ${accentBorder[project.accent]}`}
            >
              <project.icon className={`w-10 h-10 mb-4 ${accentText[project.accent]}`} />
              <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
              <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
