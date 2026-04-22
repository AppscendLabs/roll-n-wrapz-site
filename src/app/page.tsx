"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { GoogleReviews } from "@/components/google-reviews";

const heroSlides = [
  { src: "/gallery/tesla-cybertruck-matte.jpg", alt: "Tesla Cybertruck Satin Black Wrap", label: "Satin Wraps" },
  { src: "/gallery/cadillac-ctsv-purple-1.jpg", alt: "Cadillac CTS-V Gloss Purple Wrap", label: "Gloss Wraps" },
  { src: "/gallery/ed-edd-n-eddy-1.jpg", alt: "Ed Edd n Eddy Full Custom Graphic Wrap", label: "Custom Wraps" },
  { src: "/gallery/lotto-truck-1.jpg", alt: "Arkansas Lottery Commercial Fleet Wrap", label: "Commercial Wraps" },
  { src: "/gallery/gmc-sierra-camo-1.jpg", alt: "GMC Sierra Camo Custom Wrap", label: "Custom Graphics" },
];

const portfolioItems = [
  {
    image: "/gallery/cadillac-ctsv-purple-1.jpg",
    title: "Cadillac CTS-V",
    category: "Gloss Wrap",
  },
  {
    image: "/gallery/infiniti-pink-black.jpg",
    title: "Infiniti — Color Change",
    category: "Matte & Gloss Combo",
  },
  {
    image: "/gallery/lotto-truck-1.jpg",
    title: "Arkansas Lottery",
    category: "Commercial Wrap",
  },
  {
    image: "/gallery/tesla-cybertruck-matte.jpg",
    title: "Tesla Cybertruck",
    category: "Satin Wrap",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Premium Materials",
    description:
      "Only the finest vinyl wraps from industry leaders",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Professional installation with minimal downtime",
  },
  {
    icon: Award,
    title: "Expert Installers",
    description: "Certified professionals with years of experience",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
          <AnimatePresence mode="sync">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={heroSlides[slideIndex].src}
                alt={heroSlides[slideIndex].alt}
                className="w-full h-full object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Slide label */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <AnimatePresence mode="wait">
            <motion.span
              key={slideIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-xs uppercase tracking-[0.2em] text-[#8dc63f] font-semibold"
            >
              {heroSlides[slideIndex].label}
            </motion.span>
          </AnimatePresence>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === slideIndex ? "bg-[#8dc63f] w-8" : "bg-white/30 w-4 hover:bg-white/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          style={{ opacity, y }}
          className="relative z-20 h-full flex items-center justify-center px-4"
        >
          <div className="text-center max-w-5xl">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] mb-6 tracking-tight">
                <span className="block text-white">TRANSFORM</span>
                <span className="block bg-gradient-to-r from-[#8dc63f] via-[#a4e04f] to-[#7ab835] bg-clip-text text-transparent">
                  YOUR RIDE
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-white/70 mb-10 max-w-2xl mx-auto font-light"
            >
              Premium vehicle wrapping that turns heads and protects your
              investment
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group px-8 py-4 bg-[#8dc63f] rounded-full font-bold text-lg uppercase tracking-wider hover:shadow-2xl hover:shadow-[#8dc63f]/50 transition-all flex items-center justify-center gap-2 glow-brand"
                >
                  Get Your Quote
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/gallery" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  View Gallery
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-3 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-zinc-950 grain overflow-hidden">
        {/* Decorative vertical accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#8dc63f]/40" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-tight mb-4">
              WHY CHOOSE <span className="text-[#8dc63f]">US</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
              We deliver excellence in every wrap, ensuring your vehicle looks
              stunning and stays protected.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.08] hover:border-[#8dc63f]/40 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#8dc63f] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#8dc63f]/30 transition-all">
                  <feature.icon size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="relative py-32 px-4 bg-zinc-950 pattern-lines overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-tight mb-4">
              RECENT <span className="text-[#8dc63f]">WORK</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
              Check out some of our latest transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8dc63f] mb-2 font-medium">
                    {item.category}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-[#8dc63f] rounded-full font-bold text-lg uppercase tracking-wider hover:shadow-2xl hover:shadow-[#8dc63f]/50 transition-all inline-flex items-center gap-2"
              >
                View Full Gallery
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* CTA Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-zinc-950 to-black grain overflow-hidden">
        {/* Decorative blurred brand circles */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8dc63f]/5 blur-3xl" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#8dc63f]/5 blur-3xl" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-tight mb-6">
              READY TO <span className="text-[#8dc63f]">ROLL?</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              Let&apos;s bring your vision to life. Get a free quote today and
              start your vehicle transformation journey.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-[#8dc63f] rounded-full font-bold text-xl uppercase tracking-wider hover:shadow-2xl hover:shadow-[#8dc63f]/50 transition-all inline-flex items-center gap-2 glow-brand"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
