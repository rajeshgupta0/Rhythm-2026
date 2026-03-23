import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = {
  "Day 1 — 25 March": [
   { time: "10:00 AM - 11:00 AM", event: "Lamp Lighting, Saraswati Vandana & Felicitation", venue: "Civil Ground" },
    { time: "11:05 AM - 1:30 PM", event: "Freshers Event (Dance, Singing, Drama)", venue: "Civil Ground" },
    { time: "1:30 PM - 2:00 PM", event: "Lunch Break", venue: "Central Lobby" },
    { time: "2:00 PM - 2:45 PM", event: "Open Mic (Poetry, Shayari, Literary Performances)", venue: "Civil Ground" },
    { time: "3:00 PM - 5:00 PM", event: "Kavi Sammelan", venue: "Civil Ground" },

    { time: "9:30 AM - 11:00 AM", event: "Singing & Dancing", venue: "Electrical Hall" },
    { time: "11:10 AM - 12:00 PM", event: "Drama", venue: "Electrical Hall" },
    { time: "12:00 PM - 12:20 PM", event: "Break", venue: "Electrical Hall" },
    { time: "1:00 PM - 3:00 PM", event: "Fashion Show & Paper Designing", venue: "Electrical Hall" }
  ],
  "Day 2 — 26 March": [
     { time: "12:25 PM - 1:15 PM", event: "Tech Content Creator Felicitation", venue: "Civil Ground" },
    { time: "1:15 PM - 1:45 PM", event: "Lunch Break", venue: "Central Lobby" },
    { time: "2:00 PM - 4:30 PM", event: "Live Performance / DJ", venue: "Civil Ground" },

    { time: "10:10 AM - 11:30 AM", event: "Parliamentary Debate", venue: "Electrical Hall" },
    { time: "11:30 AM - 12:30 PM", event: "E-Gaming (BGMI, Free Fire)", venue: "Ambedkar Hall" },
    { time: "12:30 PM - 1:30 PM", event: "Face Painting & Poster Designing", venue: "Engineering Graphic Lab" }
  ],
  "Day 3 — 27 March": [
   
   { time: "9:30 AM - 10:30 AM", event: "Fashion Show & Ramp Walk", venue: "Civil Ground" },
    { time: "10:30 AM - 10:45 AM", event: "Break / Refreshments", venue: "Central Lobby" },
    { time: "10:45 AM - 11:00 AM", event: "Tech Quiz", venue: "Room 110" },
    { time: "11:10 AM - 12:20 PM", event: "Lunch Break", venue: "Civil Ground" },
    { time: "12:30 PM - 2:00 PM", event: "Prize Distribution, Felicitation & Speech", venue: "Civil Ground" },

    { time: "9:30 AM - 10:30 AM", event: "Frame Painting", venue: "Engineering Graphic Lab" }
  ],
};

const days = Object.keys(schedule) as (keyof typeof schedule)[];

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(days[0]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-heading font-bold text-3xl md:text-5xl gradient-text-fusion text-center mb-12"
        >
          Schedule
        </motion.h2>

        {/* Day tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeDay === day
                  ? "bg-primary text-primary-foreground glow-blue"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-6">
            {schedule[activeDay].map((item, i) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex gap-4 md:gap-6 items-start"
              >
                <div className="relative z-10 flex-shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-full glass-card flex items-center justify-center">
                  <Clock size={16} className="text-primary" />
                </div>
                <div className="glass-card rounded-xl p-4 md:p-5 flex-1 hover:scale-[1.01] transition-transform">
                  <p className="text-xs font-semibold text-primary mb-1">{item.time}</p>
                  <h4 className="font-heading font-bold text-foreground">{item.event}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.venue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
