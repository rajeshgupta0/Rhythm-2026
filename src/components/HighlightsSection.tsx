import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Music2, Shirt, Mic2, PartyPopper } from "lucide-react";

const highlights = [
  {
    title: "DJ",
    description: "An electrifying Day of beats and bass drops to set the campus on fire.",
    icon: Music2,
    gradient: "from-neon-blue to-dark-blue",
    glow: "glow-blue",
  },
  {
    title: "Fashion Show",
    description: "Where tradition meets trend — walk the ramp in stunning fusion couture.",
    icon: Shirt,
    gradient: "from-orange to-golden",
    glow: "glow-orange",
  },
  {
    title: "Kavi Sammelan",
    description: "An evening of powerful poetry celebrating Hindi literature and contemporary voices.",
    icon: Mic2,
    gradient: "from-golden to-orange",
    glow: "glow-orange",
  },
  {
    title: "Fresher's Event",
    description: "A warm welcome to the newest members of our college family with fun and performances.",
    icon: PartyPopper,
    gradient: "from-dark-blue to-neon-blue",
    glow: "glow-blue",
  },
];

const HighlightsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="highlights" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl md:text-5xl gradient-text-fusion text-center mb-14"
        >
          Highlight Events
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-300 ${h.glow}`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${h.gradient} mb-5`}>
                <h.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
                {h.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
