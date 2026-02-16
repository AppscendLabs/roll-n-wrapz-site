"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Shield,
  Paintbrush,
  Palette,
  Wrench,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Full Vehicle Wraps",
    description:
      "Complete transformation of your vehicle with premium vinyl wraps in any color or finish.",
    features: [
      "Custom color selection",
      "Matte, gloss, or satin finishes",
      "Paint protection included",
      "5-7 year durability",
    ],
    price: "Starting at $2,999",
  },
  {
    icon: Paintbrush,
    title: "Partial Wraps",
    description:
      "Accent specific areas like roofs, hoods, mirrors, or create custom racing stripes.",
    features: [
      "Roof wraps",
      "Hood & trunk wraps",
      "Mirror caps",
      "Racing stripes",
    ],
    price: "Starting at $599",
  },
  {
    icon: Shield,
    title: "Paint Protection Film",
    description:
      "Invisible protection against chips, scratches, and environmental damage.",
    features: [
      "Self-healing technology",
      "UV protection",
      "Clear & invisible",
      "10-year warranty",
    ],
    price: "Starting at $1,499",
  },
  {
    icon: Wrench,
    title: "Chrome Delete",
    description:
      "Replace chrome trim with sleek black or color-matched accents for a modern look.",
    features: [
      "Window trim",
      "Door handles",
      "Emblems & badges",
      "Grille accents",
    ],
    price: "Starting at $399",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your vision, preferences, and provide expert recommendations for your vehicle.",
  },
  {
    step: "02",
    title: "Design & Quote",
    description:
      "Receive a detailed quote and visualize your wrap with our design mockups.",
  },
  {
    step: "03",
    title: "Professional Installation",
    description:
      "Our certified installers apply your wrap with precision and care in a controlled environment.",
  },
  {
    step: "04",
    title: "Quality Check & Delivery",
    description:
      "Final inspection to ensure perfection before you roll away with your transformed vehicle.",
  },
];

const finishes = [
  {
    name: "Gloss",
    description: "High-shine finish that looks like paint",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Matte",
    description: "Non-reflective, sophisticated finish",
    gradient: "from-gray-700 to-gray-800",
  },
  {
    name: "Satin",
    description: "Perfect blend of gloss and matte",
    gradient: "from-[#8dc63f] to-[#6fb82f]",
  },
  {
    name: "Chrome",
    description: "Mirror-like reflective finish",
    gradient: "from-gray-300 to-gray-400",
  },
  {
    name: "Carbon Fiber",
    description: "Textured racing-inspired look",
    gradient: "from-gray-900 to-black",
  },
  {
    name: "Color Shift",
    description: "Changes color based on viewing angle",
    gradient: "from-[#8dc63f] to-[#9ed84e]",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-tight mb-6">
            OUR <span className="text-[#8dc63f]">SERVICES</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl font-light">
            From complete transformations to subtle accents, we offer premium
            wrapping services tailored to your vision.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 mb-32 grain overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 hover:border-[#8dc63f]/50 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#8dc63f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-white/80"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#8dc63f] mr-3 flex-shrink-0"
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-lg font-bold text-[#8dc63f]">
                  {service.price}
                </span>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-white/80 hover:text-white flex items-center gap-2 group/btn"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Finishes Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4">
            AVAILABLE <span className="text-[#8dc63f]">FINISHES</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            Choose from a wide variety of finishes to match your style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {finishes.map((finish, index) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div
                className={`h-32 rounded-t-2xl bg-gradient-to-r ${finish.gradient} group-hover:scale-105 transition-transform`}
              />
              <div className="p-6 bg-white/5 rounded-b-2xl border border-white/10 border-t-0">
                <h3 className="text-xl font-bold mb-2">{finish.name}</h3>
                <p className="text-white/60 text-sm">{finish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4">
            OUR <span className="text-[#8dc63f]">PROCESS</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            From concept to completion, we ensure a seamless experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#8dc63f] flex items-center justify-center font-display text-xl text-black">
                  {item.step}
                </div>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#8dc63f] rounded-3xl p-12 md:p-16 text-center"
        >
          <Clock size={48} className="mx-auto mb-6 text-black" />
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-black">
            READY TO GET STARTED?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black/80">
            Book your free consultation today and let&apos;s bring your vision
            to life. Most projects completed within 3-5 days.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-black text-white rounded-full font-bold text-lg uppercase tracking-wider hover:shadow-2xl transition-all"
            >
              Schedule Consultation
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
