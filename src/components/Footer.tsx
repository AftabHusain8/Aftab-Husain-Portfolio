import { Github, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-6 sm:py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
      <p className="text-xs sm:text-sm text-muted-foreground font-mono text-center sm:text-left">
        &copy; {new Date().getFullYear()} <span className="text-primary">aftab-husain</span> — Built with React & Tailwind
      </p>
      <div className="flex gap-3 sm:gap-4">
        {[
          { icon: Github, href: "https://github.com/AftabHusain8" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/aftabhussain08/" },
          { icon: Youtube, href: "https://www.youtube.com/@AKGXtreme" },
        ].map(({ icon: Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
            <Icon size={14} className="sm:w-4 sm:h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
