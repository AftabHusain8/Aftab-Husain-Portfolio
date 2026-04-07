import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1200);
  };

  const inputClass = (field: string) =>
    `bg-card border-border font-body text-sm transition-all duration-300 ${
      focused === field ? "border-primary/50 shadow-[0_0_15px_hsl(142,70%,45%,0.1)]" : ""
    }`;

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono"></span>Contact
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-primary to-accent mb-3 sm:mb-4" />
          <p className="text-sm text-muted-foreground mb-8 sm:mb-10">
            Have a project in mind or want to chat? Drop me a message.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
            <div className="md:col-span-3">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="glass rounded-xl p-10 sm:p-12 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                      <CheckCircle size={40} className="text-primary mb-4" />
                    </motion.div>
                    <h3 className="font-display font-semibold text-foreground text-base sm:text-lg mb-2">Message Sent!</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} className={inputClass("name")} />
                    <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} className={inputClass("email")} />
                    <Textarea placeholder="Your Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} className={`${inputClass("message")} resize-none`} />
                    <Button type="submit" disabled={sending} className="font-mono text-xs sm:text-sm w-full sm:w-auto group">
                      {sending ? <Loader2 size={14} className="mr-2 animate-spin" /> : <Send size={14} className="mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <div className="md:col-span-2 flex flex-row md:flex-col gap-4 sm:gap-6">
              {[
                { icon: Mail, label: "Email", value: "aftabhussain22200@gmail.com" },
                { icon: MapPin, label: "Location", value: "Karnataka, India" },
              ].map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 group flex-1 md:flex-none"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={14} className="text-primary sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-mono text-foreground">{label}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
