import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Cyber Security Intern",
    company: "Security Firm",
    period: "Feb 2026 – Apr 2026",
    points: [
      "Conducted vulnerability assessments and penetration testing on web applications",
      "Applied OWASP Top 10 methodologies to identify and remediate critical security flaws",
      "Documented findings and presented security reports to development teams",
    ],
  },
  {
    role: "Application Developer Intern",
    company: "Tech Company",
    period: "Sep 2024 – Feb 2025",
    points: [
      "Built full-stack web applications using Django and React.js",
      "Designed and implemented CI/CD pipelines for automated testing and deployment",
      "Collaborated with cross-functional teams to deliver features on schedule",
    ],
  },
  {
    role: "AI & ML Intern",
    company: "AI Lab",
    period: "Apr 2024 – May 2024",
    points: [
      "Improved machine learning model accuracy through feature engineering and hyperparameter tuning",
      "Processed and cleaned large datasets for training pipelines",
      "Presented findings and model performance metrics to stakeholders",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono"></span>Experience
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-accent mb-8 sm:mb-10" />

          <div className="relative">
            <div className="absolute left-3 sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-border" />

            <div className="space-y-8 sm:space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-8 sm:pl-10"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full bg-secondary border border-border flex items-center justify-center">
                    <Briefcase size={12} className="text-primary sm:w-[14px] sm:h-[14px]" />
                  </div>

                  <span className="text-[10px] sm:text-xs text-primary font-mono">{exp.period}</span>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mt-1">{exp.role}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
