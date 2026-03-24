import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const galleryItems = [
  { label: "Stage Performances", span: "col-span-2 row-span-2" },
  { label: "Tech Workshops", span: "col-span-1 row-span-1" },
  { label: "Cultural Dance", span: "col-span-1 row-span-1" },
  { label: "Freshers", span: "col-span-1 row-span-1" },
  { label: "Campus Vibes", span: "col-span-1 row-span-1" },
  { label: "Art & Rangoli", span: "col-span-2 row-span-1" },
];

const colors = [
  "from-neon-blue/30 to-dark-blue/50",
  "from-orange/30 to-golden/50",
  "from-golden/30 to-orange/50",
  "from-dark-blue/30 to-neon-blue/50",
  "from-neon-blue/20 to-golden/30",
  "from-orange/20 to-neon-blue/30",
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl md:text-5xl gradient-text-fusion text-center mb-14"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`${item.span} glass-card rounded-2xl overflow-hidden relative group cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[i]} group-hover:opacity-80 transition-opacity`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-heading font-bold text-lg md:text-xl text-foreground text-center px-4 drop-shadow-lg">
                  {item.label}
                </p>
              </div>
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/10 to-secondary/10" />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Photos from previous editions • RHYTHM 2026 gallery coming soon
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
