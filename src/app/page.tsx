"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Shield, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "@/components/image-with-fallback";

const portfolioItems = [
  {
    image:
      "https://images.unsplash.com/photo-1641900409160-3d288c5a5805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3cmFwJTIwY2hyb21lfGVufDF8fHx8MTc3MDk1NTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Chrome Luxury",
    category: "Chrome Wrap",
  },
  {
    image:
      "https://images.unsplash.com/photo-1760550517611-31732ef31135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB2aW55bCUyMHdyYXB8ZW58MXx8fHwxNzcwOTU1Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sport Performance",
    category: "Vinyl Wrap",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592713864248-fdef16231790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0ZSUyMGJsYWNrJTIwd3JhcHBlZCUyMGNhcnxlbnwxfHx8fDE3NzA5NTUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Matte Black",
    category: "Matte Finish",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555534650-6bb24b6fc0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmNhciUyMGV4b3RpYyUyMHdyYXB8ZW58MXx8fHwxNzcwOTU1Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Exotic Elite",
    category: "Custom Design",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Premium Materials",
    description:
      "Only the finest vinyl and chrome wraps from industry leaders",
  },
  {
    icon: Shield,
    title: "Paint Protection",
    description:
      "Preserve your vehicle's original paint while adding style",
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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1699016144012-aea937145c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdyYXBwZWQlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MDk1NTM3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wrapped Vehicle"
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-20 h-full flex items-center justify-center px-4"
        >
          <div className="text-center max-w-5xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="block text-white">TRANSFORM</span>
                <span className="block bg-gradient-to-r from-[#8dc63f] to-[#7ab835] bg-clip-text text-transparent">
                  YOUR RIDE
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Premium vehicle wrapping that turns heads and protects your
              investment
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group px-8 py-4 bg-[#8dc63f] rounded-full font-bold text-lg uppercase tracking-wider hover:shadow-2xl hover:shadow-[#8dc63f]/50 transition-all flex items-center justify-center gap-2"
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
      <section className="py-24 px-4 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              WHY CHOOSE <span className="text-[#8dc63f]">US</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We deliver excellence in every wrap, ensuring your vehicle looks
              stunning and stays protected.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8dc63f]/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-[#8dc63f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              RECENT <span className="text-[#8dc63f]">WORK</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Check out some of our latest transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform z-20">
                  <p className="text-sm uppercase tracking-wider text-[#8dc63f] mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
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

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              READY TO <span className="text-[#8dc63f]">ROLL?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s bring your vision to life. Get a free quote today and
              start your vehicle transformation journey.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-[#8dc63f] rounded-full font-bold text-xl uppercase tracking-wider hover:shadow-2xl hover:shadow-[#8dc63f]/50 transition-all inline-flex items-center gap-2"
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
