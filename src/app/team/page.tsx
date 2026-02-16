"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { Award, Wrench, Palette, Shield } from "lucide-react";

const teamMembers = [
  {
    name: "Marcus Rodriguez",
    role: "Master Installer & Founder",
    image:
      "https://images.unsplash.com/photo-1578935570956-4326d9c62ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWNoYW5pYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDk1NjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "With over 15 years of experience in vehicle wrapping, Marcus founded ROLL'N WRAPZ with a vision to bring premium wrapping services to the community. His attention to detail and perfectionist approach has earned him recognition across the industry. Marcus specializes in complex color-matching and intricate custom designs that push the boundaries of what's possible with vinyl.",
    specialties: [
      "Chrome Wraps",
      "Color Matching",
      "Custom Designs",
      "Full Body Wraps",
    ],
    icon: Award,
  },
  {
    name: "Sarah Chen",
    role: "Lead Design Specialist",
    image:
      "https://images.unsplash.com/photo-1723099971299-3789db53604c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwdGVjaG5pY2lhbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzcwOTMyMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Sarah brings a unique blend of automotive knowledge and artistic vision to every project. Before joining ROLL'N WRAPZ, she worked in automotive design for major manufacturers. Her expertise in color theory and brand identity helps clients visualize their dream wrap before installation begins. She's passionate about creating designs that reflect each client's personality.",
    specialties: [
      "Design Consultation",
      "Color Theory",
      "Brand Identity",
      "Digital Mockups",
    ],
    icon: Palette,
  },
  {
    name: "Devon Mitchell",
    role: "Senior Wrap Technician",
    image:
      "https://images.unsplash.com/photo-1770656505713-b0fd2f5751e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzcGVjaWFsaXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDk1NjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Devon's precision and speed make him one of the most sought-after wrap technicians in the region. With 10+ years of hands-on experience, he's wrapped everything from everyday commuters to exotic supercars. His calm demeanor and methodical approach ensure every wrap is installed flawlessly. Devon is certified in multiple vinyl brands and stays current with the latest installation techniques.",
    specialties: [
      "Luxury Vehicles",
      "Paint Protection Film",
      "Matte Finishes",
      "Racing Stripes",
    ],
    icon: Wrench,
  },
  {
    name: "Alex Thompson",
    role: "Paint Protection Specialist",
    image:
      "https://images.unsplash.com/photo-1588610846596-4df43c0fbdc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwOTU2NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Alex is our go-to expert for paint protection film (PPF) installations. With a background in automotive detailing and ceramic coatings, Alex understands how to preserve a vehicle's finish better than anyone. His meticulous prep work and flawless application techniques have protected thousands of vehicles from chips, scratches, and environmental damage. Clients trust Alex to keep their investments looking showroom-fresh.",
    specialties: [
      "PPF Installation",
      "Ceramic Coating",
      "Surface Preparation",
      "Clear Bra",
    ],
    icon: Shield,
  },
];

export default function TeamPage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-tight mb-6">
            MEET THE <span className="text-[#8dc63f]">TEAM</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl font-light">
            Our passionate team of experts brings years of experience and
            dedication to every wrap.
          </p>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#8dc63f] flex items-center justify-center shadow-lg shadow-[#8dc63f]/50">
                      <member.icon
                        size={28}
                        className="text-black md:w-8 md:h-8"
                      />
                    </div>
                  </div>

                  {/* Name Badge */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20">
                    <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <h3 className="text-xl md:text-2xl font-display mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#8dc63f] font-medium text-sm md:text-base">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Info */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-display mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl text-[#8dc63f] font-medium">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4 font-bold">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 hover:bg-[#8dc63f]/20 hover:border-[#8dc63f]/50 transition-all"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#8dc63f] rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-black">
            READY TO WORK WITH THE BEST?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black/80">
            Our expert team is ready to transform your vehicle. Book a
            consultation and meet us in person!
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-black text-white rounded-full font-bold text-lg uppercase tracking-wider hover:shadow-2xl transition-all"
            >
              Schedule Consultation
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
