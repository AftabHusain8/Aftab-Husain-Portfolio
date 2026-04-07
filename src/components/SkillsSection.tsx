import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Django", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Security Tools",
    skills: [
      { name: "Kali Linux", level: 85 },
      { name: "Nmap", level: 80 },
      { name: "Wireshark", level: 75 },
      { name: "Burp Suite", level: 80 },
      { name: "Metasploit", level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Linux", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-3 sm:mb-4 group">
    <div className="flex justify-between mb-1.5">
      <span className="text-xs sm:text-sm text-foreground font-mono group-hover:text-primary transition-colors">{name}</span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5 }}
        className="text-[10px] sm:text-xs text-muted-foreground font-mono"
      >
        {level}%
      </motion.span>
    </div>
    <div className="h-1.5 sm:h-2 rounded-full bg-secondary overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
      >
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-primary/50 blur-sm" />
      </motion.div>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono"></span>Skills
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-accent mb-8 sm:mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="glass rounded-xl p-5 sm:p-6 hover:border-primary/20 transition-all"
              >
                <h3 className="font-mono font-semibold text-primary mb-4 sm:mb-5 text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {cat.title}
                </h3>
                {cat.skills.map((s, si) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={ci * 0.1 + si * 0.08} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
