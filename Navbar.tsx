import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye, Server } from "lucide-react";

const stats = [
  { icon: Shield, value: "50+", label: "Security Audits" },
  { icon: Lock, value: "99.9%", label: "Uptime Protected" },
  { icon: Eye, value: "200+", label: "Vulnerabilities Found" },
  { icon: Server, value: "30+", label: "Systems Secured" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-3">// About Me</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Passionate about <span className="text-neon-magenta glow-text-magenta">security</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Cybersecurity Engineer graduated from the Instituto Tecnológico de Santo Domingo (INTEC), with a strong foundation in secure systems design, risk management, and enterprise security architecture.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I specialize in designing and implementing security controls that protect critical infrastructure, cloud environments, and enterprise applications. My experience includes vulnerability management, threat detection and response, security hardening, and aligning cybersecurity frameworks with business objectives.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I have led medium-to-high complexity security initiatives, coordinated cross-functional teams, and implemented security solutions that reduce risk while enabling operational efficiency. I combine hands-on technical expertise (network security, endpoint protection, SIEM, cloud security, and secure development practices) with strategic thinking and governance awareness.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            I am passionate about building resilient architectures, strengthening organizational security posture, and making strategic security decisions that balance risk, compliance, and business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/40 transition-colors group"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
