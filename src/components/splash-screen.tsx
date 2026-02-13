"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col leading-none"
            >
              <span className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-2">
                ROLL&apos;N
              </span>
              <span className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-r from-[#8dc63f] to-[#7ab835] bg-clip-text text-transparent animate-gradient">
                WRAPZ
              </span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-1 bg-[#8dc63f] rounded-full mt-8 max-w-xs mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
