import { motion } from "framer-motion";
import { Shield, Code, Terminal } from "lucide-react";

const highlights = [
  { icon: Code, title: "Full Stack Dev", desc: "Building end-to-end web apps with Django, React, and modern tooling." },
  { icon: Shield, title: "Cyber Security", desc: "Vulnerability assessment, penetration testing, and OWASP Top 10 expertise." },
  { icon: Terminal, title: "DevOps Ready", desc: "CI/CD pipelines, Docker, and deployment automation." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono"></span>About
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-accent mb-6 sm:mb-8" />

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mb-8 sm:mb-12">
            I'm Aftab Husain, an Electronics & Communication Engineering graduate with a deep
            passion for software development and cybersecurity. I build robust, secure applications
            and love diving into the offensive side of security to make the web a safer place.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <h.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2 text-foreground text-sm sm:text-base">{h.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
