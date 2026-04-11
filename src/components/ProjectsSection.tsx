import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, Hospital, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const projects = [
  {
    icon: Lock,
    title: "Password Strength Auditor",
    description: "A security tool that evaluates password strength using entropy analysis, common pattern detection, and breach database checks.",
    tags: ["Python", "Security", "CLI"],
    github: "https://github.com/AftabHusain8/passaudit",
    demo: "#",
  },
  {
    icon: Hospital,
    title: "Hospital Management System",
    description: "Full-stack CRUD application for managing patients, appointments, doctors, and medical records with role-based access.",
    tags: ["Django", "React", "PostgreSQL"],
    github: "https://github.com/AftabHusain8/hospital-management",
    demo: "#",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat App",
    description: "WebSocket-based chat app with user authentication, message history, and CI/CD pipeline for automated deployment.",
    tags: ["Node.js", "React", "WebSocket", "CI/CD"],
    github: "https://github.com/aftabhusain/chat-app",
    demo: "#",
  },
  {
  icon: Shield,
  title: "Subdomain Sentinel",
  description: "A subdomain enumeration and live host detection tool designed to map attack surfaces and identify potential security risks in web applications.",
  tags: ["Python", "DNS", "Cybersecurity", "Automation"],
  github: "https://github.com/AftabHusain8/subdomain-sentinel",
  demo: "#",
}
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono"></span>Projects
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-accent mb-8 sm:mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all group relative"
              >
                <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <p.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-sm sm:text-base group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 flex-1 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[9px] sm:text-[10px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:border-primary/40 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <Button asChild size="sm" variant="outline" className="text-[10px] sm:text-xs font-mono border-border hover:border-primary/50 hover:text-primary h-8">
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github size={12} className="mr-1" /> Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="text-[10px] sm:text-xs font-mono h-8">
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={12} className="mr-1" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
