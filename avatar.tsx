import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Offensive Security",
    color: "primary",
    skills: ["Penetration Testing", "Red Teaming", "Social Engineering", "Exploit Development", "Bug Bounty"],
  },
  {
    title: "Defensive Security",
    color: "neon-cyan",
    skills: ["SIEM / SOC", "Incident Response", "Threat Hunting", "Malware Analysis", "Digital Forensics"],
  },
  {
    title: "Tools & Technologies",
    color: "neon-magenta",
    skills: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "Kali Linux"],
  },
  {
    title: "Development & Cloud",
    color: "neon-yellow",
    skills: ["Python", "Bash / PowerShell", "AWS Security", "Docker", "CI/CD Hardening"],
  },
];

const colorMap: Record<string, string> = {
  primary: "border-primary/40 text-primary",
  "neon-cyan": "border-neon-cyan/40 text-neon-cyan",
  "neon-magenta": "border-neon-magenta/40 text-neon-magenta",
  "neon-yellow": "border-neon-yellow/40 text-neon-yellow",
};

const headerColor: Record<string, string> = {
  primary: "text-primary",
  "neon-cyan": "text-neon-cyan",
  "neon-magenta": "text-neon-magenta",
  "neon-yellow": "text-neon-yellow",
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-3">// Skills</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            My <span className="text-neon-cyan">Arsenal</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <h4 className={`font-mono font-semibold text-lg mb-4 ${headerColor[cat.color]}`}>
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-md border text-sm font-mono bg-background/50 ${colorMap[cat.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
