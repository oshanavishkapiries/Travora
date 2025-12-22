import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const mockupImages = [
  "/mockups/371shots_so.png",
  "/mockups/425shots_so.png",
  "/mockups/561shots_so.png",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockupImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 bg-grid-light overflow-hidden pt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Travel together,
              <br />
              <span className="text-gray-800">even before you arrive</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-md leading-relaxed"
            >
              From trip planning to spontaneous meetups, Kipso keeps every
              travel conversation in one smart inbox connecting you with people,
              places, and experiences that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all hover:scale-105">
                Join now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-sm"
            >
              Join <span className="font-semibold">2,847</span> others on the
              waitlist
            </motion.p>
          </div>

          {/* Right - Animated Mockup Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={mockupImages[currentIndex]}
                  alt={`Kipso app mockup ${currentIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-auto rounded-2xl"
                />
              </AnimatePresence>

              {/* White to transparent gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent rounded-b-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
