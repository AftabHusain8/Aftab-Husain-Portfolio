import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Title (same as Projects) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono"></span>Resume
          </h2>

          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-accent mb-8 sm:mb-10" />

          {/* Card (same style as project card) */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all group relative max-w-xl mx-auto"
          >
            {/* top gradient line */}
            <div className="h-1 bg-gradient-to-r from-primary to-accent" />

            {/* hover overlay */}
            <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-6 flex flex-col items-center text-center relative z-10">

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <FileText size={22} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                My Resume
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                A detailed overview of my skills, experience, and projects in cybersecurity and full stack development.
              </p>

              {/* Tags (same style as projects) */}
              <div className="flex flex-wrap gap-2 mb-5">
                {["Cybersecurity", "Full Stack", "Projects", "Skills"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:border-primary/40 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                
                <a
                  href="/resume.pdf"
                  download
                  className="text-xs font-mono px-4 py-2 rounded-lg bg-primary text-black hover:scale-105 transition flex items-center gap-1"
                >
                  <Download size={14} /> Download
                </a>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Resume;