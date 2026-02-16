"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Background glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute w-[600px] h-[600px] rounded-full bg-[#8dc63f]/5 blur-[120px]"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative z-10"
          >
            <motion.div className="flex flex-col leading-none">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-7xl lg:text-9xl font-display tracking-tight text-white leading-[0.85]"
              >
                ROLL&apos;N
              </motion.span>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-7xl lg:text-9xl font-display tracking-tight bg-gradient-to-r from-[#8dc63f] via-[#a4e04f] to-[#7ab835] bg-clip-text text-transparent leading-[0.85]"
              >
                WRAPZ
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-0.5 bg-gradient-to-r from-transparent via-[#8dc63f] to-transparent mt-6 max-w-xs mx-auto origin-center"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
