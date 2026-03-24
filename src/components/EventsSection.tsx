import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Clock, MapPin, Star, ChevronRight, Cpu, Music, BookOpen, Trophy, Palette } from "lucide-react";

import soloDanceImg from "@/assets/events/solo-dance.jpg";
import groupDanceImg from "@/assets/events/group-dance.jpg";
import singingImg from "@/assets/events/singing.jpg";
import hackathonImg from "@/assets/events/hackathon.jpg";
import roboRaceImg from "@/assets/events/robo-race.jpg";
import codeQuestImg from "@/assets/events/code-quest.jpg";
import debateImg from "@/assets/events/debate.jpg";
import poetrySlamImg from "@/assets/events/poetry-slam.jpg";
import cricketImg from "@/assets/events/cricket.jpg";
import tugOfWarImg from "@/assets/events/tug-of-war.jpg";
import rangoliImg from "@/assets/events/rangoli.jpg";
import posterMakingImg from "@/assets/events/poster-making.jpg";
import fashion_show from "@/assets/events/fashion_show.jpg";
import standUp from "@/assets/events/standup.jpg";
import drama from "@/assets/events/drama.jpg";
 import fs from "@/assets/events/fs.jpg";
 import framp from "@/assets/events/framp.jpg";
  import egame from "@/assets/events/esports.jpg";
 import tech from "@/assets/events/techquiz.jpg";
import omic from "@/assets/events/openmic.jpg";
import djday from "@/assets/events/dj_night.jpeg";
type Event = {
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  highlights: string[];
  category: string;
  image: string;
};

const categories = [
  { name: "Cultural", icon: Music, color: "text-golden", glowClass: "glow-orange" },
  { name: "Technical", icon: Cpu, color: "text-neon-blue", glowClass: "glow-blue" },
  { name: "Literary", icon: BookOpen, color: "text-golden", glowClass: "glow-orange" },
  { name: "Sports", icon: Trophy, color: "text-neon-blue", glowClass: "glow-blue" },
  { name: "Fine Arts", icon: Palette, color: "text-golden", glowClass: "glow-orange" },
];

const eventsData: Event[] = [
  { title: "Solo Dance", description: "Present an expressive solo dance performance showcasing versatility across classical, contemporary, and freestyle styles.", date: "26 March 2026", time: "9:30 AM", venue: "Fest Ground", highlights: [], category: "Cultural", image: soloDanceImg },
  { title: "Group Dance", description: "Deliver a synchronized group performance featuring creative choreography and impactful themes.",  date: "26 March 2026", time: "9:30AM", venue: "Fest Ground", highlights: ["Team of 5-12", "Theme-based",], category: "Cultural", image: groupDanceImg },
  { title: "Singing Competition", description: "Showcase your vocal talent — solo or duet — across genres of Indian classical, Bollywood, and Western.", date: "26 March 2026", time: "9:30 AM", venue: "Fest Ground", highlights: ["Solo & Duet", "All genres welcome", "Recording opportunity"], category: "Cultural", image: singingImg },
   { title: "Tech Quiz", description:  "Evaluate your technical knowledge, logical reasoning, and problem-solving abilities in a competitive quiz format.", date: "27 March  2026", time: "10:45 PM", venue: "ROOM 110 ", highlights: ["Three Competitive Rounds", "Individual Participation", "Attractive Prizes"], category: "Technical", image: tech },
  { title: "Debate", description: "Engage in structured discussions and present well-founded arguments on contemporary issues.",date: "26 March 2026", time: "10:10 AM", venue: " ELECTRICAL HALL", highlights: ["Hindi & English", "Team of 2", "Best speaker award"], category: "Literary", image: debateImg },
  { title: "Poetry Slam", description: "Speak your truth through powerful spoken word performances on themes of identity, society, and dreams.", date: "March 28, 2026", time: "4:00 PM", venue: "Open Air Theatre", highlights: ["Original poems only", "5 min per poet", "Audience choice award"], category: "Literary", image: poetrySlamImg },
   { title: "Open - Mic", description:"A dynamic platform for participants to showcase their creativity through poetry, music, storytelling, or stand-up performances.", date: "26 March, 2026", time: "2:00 PM", venue: "Fest Ground", highlights: ["Open to All Participants", "Multiple Performance Formats", "Live Audience Engagement"], category: "Literary", image: omic },
 { title: "Stand-up Comedy", description: "Deliver engaging and humorous performances through original stand-up comedy acts.", date: "25 March 2026", time: "2:00PM", venue: "Fest Ground", highlights: ["Original poems only", "5 min per poet", "Audience choice award"], category: "Literary", image: standUp },

  { title: "E-Sports", description: "A college-level E-Sports tournament featuring top gaming titles with competitive matches, elimination rounds, and an exciting grand finale.", date: "26 March 2026", time: "11:00 AM", venue: "AMBEDKR HAL", highlights: ["Free fire", "Knockout rounds", "BGMI "], category: "Sports", image: egame},
     { title: "Fashion Show & Ramp Walk", description: "A prestigious ramp walk event featuring traditional, western, and fusion styles, where participants showcase confidence, creativity, and stage presence.", date: "March 29, 2026", time: "3:00 PM", venue: "Fest Ground", highlights: ["Men & Women categories", "Ramp Walk"], category: "Cultural", image: framp },
  { title: "Drama", description: "A grand theatrical showcase where participants bring powerful stories to life through expressive acting, compelling narratives, and captivating stage presence, reflecting creativity, emotion, and artistic excellence.", date: "26 March 2026", time: "11:00 AM", venue: "Fest Ground", highlights: ["Team Performance", "Theatrical Presentation", "Creative Expression"], category: "Cultural", image: drama },
   { title: "Freshers' Event", description: "A grand fresher’s celebration welcoming new students with elegance and excitement, featuring vibrant performances, introductions, and a lively atmosphere that marks the beginning of their memorable journey.", date: "25 March 2026", time: "3:00 PM", venue: "Fest Ground", highlights: ["Dancing", "Singing", "Drama"], category: "Cultural", image: fs },
   { title: "DJ Day", description: "An electrifying DJ Day filled with high-energy beats, vibrant lights, and a thrilling crowd atmosphere. Experience non-stop music, dance, and excitement as the fest ground transforms into a lively celebration zone.", date: "26 March 2026", time: "2:00 PM", venue: "Fest Ground", highlights: ["Live DJ", "Dance Floor", "Lighting Show"], category: "Cultural", image: djday },
  
  { title: "Face Painting & Poster Making", description: "Design impactful Design of  posters and Faces on social themes blending artistic expression with meaningful messages.", date: "27 March 2026", time: "11:00 AM", venue: "Engineering Graphic Lab", highlights: ["On-the-spot", "All mediums", "Display exhibition"], category: "Fine Arts", image: posterMakingImg },
];


const EventsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeCategory === "All"
    ? eventsData
    : eventsData.filter((e) => e.category === activeCategory);

  return (
    <section id="events" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl md:text-5xl gradient-text-fusion text-center mb-12"
        >
          Events
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === "All"
                ? "bg-primary text-primary-foreground glow-blue"
                : "glass-card text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.name}
              onClick={() => setActiveCategory(c.name)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === c.name
                  ? `bg-primary text-primary-foreground ${c.glowClass}`
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <c.icon size={14} />
              {c.name}
            </button>
          ))}
        </motion.div>

        {/* Event Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((event) => {
              const cat = categories.find((c) => c.name === event.category);
              return (
                <motion.div
                  key={event.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedEvent(event)}
                  className="glass-card rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 group gradient-border"
                >
                  {/* Thumbnail */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      width={800}
                      height={512}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <span className={`absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider ${cat?.color}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      View Details <ChevronRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Event Detail Sidebar */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-background/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[480px] z-50 bg-background/95 backdrop-blur-xl border-l border-border overflow-y-auto"
            >
              {/* Poster Image */}
              <div className="relative w-full h-56 sm:h-64">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  width={800}
                  height={512}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background/80 transition text-foreground"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 md:p-8 -mt-8 relative">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-muted text-primary mb-4">
                  {selectedEvent.category}
                </span>

                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                  {selectedEvent.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedEvent.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock size={16} className="text-primary" />
                    <span className="text-muted-foreground">
                      {selectedEvent.date} • {selectedEvent.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} className="text-secondary" />
                    <span className="text-muted-foreground">{selectedEvent.venue}</span>
                  </div>
                </div>

                {selectedEvent.highlights.length > 0 && (
                  <div>
                    <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star size={14} className="text-golden flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;
