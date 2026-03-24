import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import leftLogo from "@/assets/left-logo.png";
import rightLogo from "@/assets/right-logo.png";

const HeroSection = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for interactive glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="RHYTHM 2026"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        
        {/* Animated circuit pattern overlay (AI element) */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L50 10 M10 20 L30 20 M40 20 L50 20 M10 30 L20 30 M30 30 L50 30 M10 40 L30 40 M40 40 L50 40 M10 50 L50 50 M20 10 L20 50 M30 10 L30 20 M30 30 L30 50 M40 10 L40 40 M50 10 L50 50' stroke='%23ffffff' stroke-width='1' fill='none' stroke-dasharray='3 3'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Traditional mandala pattern overlay (Culture element) */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            rotate: 360,
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 20 L55 35 L70 35 L58 45 L63 60 L50 50 L37 60 L42 45 L30 35 L45 35 Z' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='50' cy='50' r='15' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* ================= INTERACTIVE GLOW (Mouse Follow) ================= */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{
          left: `calc(${mousePosition.x}% - 250px)`,
          top: `calc(${mousePosition.y}% - 250px)`,
          background: "radial-gradient(circle, rgba(255,165,0,0.15) 0%, rgba(0,123,255,0.15) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ================= ANIMATED ELEMENTS ================= */}

      {/* Traditional Dance Particles (Culture) */}
      <div className="absolute left-0 top-1/4 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            animate={{
              y: [0, -50, 0],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{
              left: `${i * 40}px`,
              top: `${Math.sin(i) * 20}px`,
            }}
          />
        ))}
      </div>

      {/* AI Neural Network Particles (Technology) */}
      <div className="absolute right-0 top-1/3 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              x: [0, Math.sin(i) * 40, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
            style={{
              right: `${i * 30}px`,
              top: `${Math.cos(i) * 50}px`,
            }}
          />
        ))}
      </div>

      {/* ================= HEADER ================= */}
      <div className="absolute top-8 left-0 w-full z-20 px-4">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/20 shadow-xl flex items-center"
        >
          {/* LEFT LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg"
          >
            <img src={leftLogo} alt="Left Logo" className="w-full h-full object-cover" />
          </motion.div>

          {/* FULL WIDTH NAME */}
          <div className="absolute left-0 right-0 text-center px-24 md:px-32">
            <h2 className="font-bold text-white/90 tracking-wide text-[clamp(35px,1vw,18px)]">
              Bharat Ratna Babasaheb Bhimrao Ambedkar
            </h2>
            <h2 className="font-semibold text-white/80 tracking-wide text-[clamp(35px,1vw,18px)]">
              Rajkiya Engineering College Pratapgarh
            </h2>
          </div>

          {/* RIGHT LOGO */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="ml-auto z-10 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg"
          >
            <img src={rightLogo} alt="Right Logo" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 text-center px-5 max-w-6xl mx-auto mt-20">

        {/* RHYTHM 2026 - Single Line with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          {/* Main Title with Glow and Animation */}
          <div className="relative inline-block">
            {/* Background Glow Effect */}
            <motion.div
              className="absolute inset-0 blur-2xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: "radial-gradient(circle, rgba(255,107,53,0.3), rgba(59,130,246,0.3))",
                filter: "blur(30px)",
              }}
            />
            
            {/* Main Title Text */}
            <motion.h1 
              className="relative font-black text-7xl md:text-8xl lg:text-9xl tracking-wider whitespace-nowrap"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 20px rgba(255,107,53,0.5)",
                  "0 0 0px rgba(255,255,255,0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                animate={{
                  color: ["#FFFFFF", "#FFA500", "#FF6B35", "#FFFFFF"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                RHYTHM
              </motion.span>{" "}
              <motion.span
                animate={{
                  color: ["#FFFFFF", "#3B82F6", "#00B4FF", "#FFFFFF"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                className="inline-block"
              >
                2026
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "280px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 mx-auto rounded-full mt-4"
          />
          
          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-2xl pointer-events-none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              background: "radial-gradient(circle, rgba(255,107,53,0.2), rgba(59,130,246,0.2))",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-yellow-300 italic mb-6 font-semibold"
        >
          "Sanskriti se Silicon Tak"
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-12"
        >
          Celebrating the spirit of culture and technology—where tradition meets innovation, and dance,
           music, and art unite with artificial intelligence, circuits, and digital creativity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Discover More Button */}
          <motion.a
            href="#about"
            className="group relative px-10 py-4 rounded-full font-bold text-white overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: "linear-gradient(135deg, #FF6B35, #F7931E)",
              boxShadow: "0 10px 30px rgba(255, 107, 53, 0.4)"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white/30"
              initial={{ x: "-100%", skewX: "-20deg" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
              style={{ transform: "skewX(-20deg)" }}
            />
            
            <span className="relative z-10 flex items-center gap-2 text-lg font-bold">
              Discover More
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Explore Events Button */}
          <motion.a
            href="#events"
            className="group relative px-10 py-4 rounded-full font-bold overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: "rgba(59, 130, 246, 0.15)",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(59, 130, 246, 0.6)",
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <span className="relative z-10 flex items-center gap-2 text-lg font-bold text-blue-400">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
  
              </motion.span>
              Explore Events
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-gradient-to-b from-orange-400 to-blue-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#FFA500' : '#3B82F6'}, transparent)`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, (Math.random() - 0.5) * 150, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
