import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Instagram, Youtube, Linkedin } from "lucide-react";

const contacts = [
  {
    role: "Director",
    name: "Prof. Yogendra Narain Singh",
     phone: "05343-297424",
    email: " director@recp.ac.in",
  },
  {
    role: "Dean Academics",
    name:" Dr. Arvind Kumar Verma",
    phone: "05343-297424",
    email: "doa.recpratapgarh@gmail.com",
  },
  {
    role: "Dean of Student Welfare",
    name: "Er. Asit Singh",
    phone: "05343-297424",
    email: "dosw.recpratapgarh@gmail.com",
  },
  {
    role: "Fest Student Coordinaror",
    name: "Praval Sexana",
    phone: "7533828012",
    email: "rhythm2026@recp.ac.in",
  },
  {
    role: "Fest Student Coordinator",
    name: "Riya Kumari",
    phone: "8076961509",
    email: "rhythm2026@recp.ac.in",
  },
  {
    role: "Fest Student Coordinator",
    name: "Rupali Shrama",
    phone: "7080681941",
    email: "rhythm2026@recp.ac.in",
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rhythm.brbbarecp" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bharat-ratna-babasaheb-bhimrao-ambedkar-rajkiya-engineering-college-pratapgarh-564a6a383/" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl md:text-5xl gradient-text-fusion text-center mb-14"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{c.role}</p>
              <h4 className="font-heading font-bold text-lg text-foreground mb-4">{c.name}</h4>
              <div className="space-y-2">
                <a href={`tel:${c.phone}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={14} /> {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  <Mail size={14} /> {c.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-5"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="p-3 glass-card rounded-full hover:scale-110 transition-transform text-muted-foreground hover:text-primary"
            >
              <s.icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
