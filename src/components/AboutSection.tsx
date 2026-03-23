import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Music, BookOpen, Trophy, Palette } from "lucide-react";

const features = [
  { icon: Music, label: "Cultural", color: "text-golden" },
  { icon: Cpu, label: "Technical", color: "text-neon-blue" },
  { icon: BookOpen, label: "Literary", color: "text-golden" },
  { icon: Trophy, label: "Sports", color: "text-neon-blue" },
  { icon: Palette, label: "Fine Arts", color: "text-golden" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl gradient-text-fusion mb-6">
            About RHYTHM 2026
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            RHYTHM 2026 is the flagship annual fest of Bharat Ratna Babasaheb Bhimrao Ambedkar Rajkiya Engineering College, Pratapgarh — an integrated festival celebrating culture, technology, literature, sports, and fine arts. It embodies the spirit of youth, bringing together the richness of Indian tradition with the pulse of modern innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 group"
            >
              <f.icon className={`mx-auto mb-3 h-8 w-8 ${f.color} group-hover:animate-pulse-glow`} />
              <p className="font-heading font-semibold text-sm text-foreground">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
