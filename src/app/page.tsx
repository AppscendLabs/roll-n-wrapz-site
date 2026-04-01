"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "@/components/image-with-fallback";

const portfolioItems = [
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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1699016144012-aea937145c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdyYXBwZWQlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MDk1NTM3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Wrapped Vehicle"
            className="w-full h-full object-cover"
            sizes="100vw"
          />
        </motion.div>

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

      {/* Google Reviews Section */}
      <section className="relative py-32 px-4 bg-black grain overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#8dc63f]/30" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            {/* Google Stars */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-white font-bold text-xl">5.0</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-tight mb-4">
              WHAT CUSTOMERS <span className="text-[#8dc63f]">SAY</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
              Don&apos;t take our word for it — here&apos;s what our customers say on Google
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "James R.",
                review: "Roll N Wrapz did an incredible job on my truck. The matte black finish looks absolutely perfect — you can tell they take their time and do it right. Will be back for my next vehicle.",
                time: "2 weeks ago",
              },
              {
                name: "Destiny M.",
                review: "I had a custom design done by their in-house designer and I couldn't be happier. The whole process was smooth and the final result was beyond what I imagined. Highly recommend!",
                time: "1 month ago",
              },
              {
                name: "Carlos T.",
                review: "Best wrap shop in Arkansas. Got my company van wrapped for branding and the quality is outstanding. Tons of compliments already. Fast turnaround too — done in 2 days.",
                time: "3 weeks ago",
              },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 bg-gradient-to-b from-white/[0.07] to-white/[0.02] rounded-2xl border border-white/[0.08]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">&ldquo;{review.review}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-white/40 text-xs">{review.time}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/30">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-xs">via Google</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=4420+East+43rd+Street+North+Little+Rock+AR+72117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              See all reviews on Google
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

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
