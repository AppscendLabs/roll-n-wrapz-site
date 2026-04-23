"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { Award, Wrench, Palette, Printer, Phone, Layers } from "lucide-react";

const teamMembers = [
  {
    name: "Fred Falgout",
    role: "Shop Manager",
    image: "/team/fred-falgout.jpg",
    bio: "With over 20 years of hands-on experience in the graphics and installation industry, Fred brings a wealth of knowledge, precision, and leadership to every project. Specializing in the installation of high-quality vinyl graphics, he has developed a strong reputation for delivering clean, accurate, and durable results across a wide range of applications—from vehicle wraps to large-scale signage. His extensive background allows him to efficiently oversee shop operations, manage production timelines, and ensure that every installation meets the highest standards of craftsmanship. Known for his attention to detail and problem-solving skills, he plays a key role in maintaining quality control while mentoring team members and supporting a collaborative work environment.",
    specialties: ["Shop Management", "Vinyl Graphics", "Production Oversight", "Quality Control"],
    icon: Award,
  },
  {
    name: "Zach Patterson",
    role: "Lead Vinyl Wrap Installer",
    image: "/team/zach-patterson.jpg",
    bio: "Zach is a Lead Vinyl Wrap Installer at Roll'n Wrapz with over six years of dedicated experience with the company. Throughout his time with the team, he has consistently demonstrated a high level of skill, precision, and craftsmanship across a wide range of projects. Zach specializes in color change wraps, commercial vehicle graphics, tuxedo wraps, and chrome deletes, bringing a detail-oriented approach to every installation. His ability to execute clean, seamless finishes while maintaining efficiency has made him a trusted leader within the shop. As a lead installer, Zach plays a key role in upholding quality standards, guiding team members, and ensuring each project meets client expectations.",
    specialties: ["Color Change Wraps", "Commercial Graphics", "Tuxedo Wraps", "Chrome Deletes"],
    icon: Wrench,
  },
  {
    name: "Mike Hinshaw II",
    role: "Print Production Specialist",
    image: "/team/mike-hinshaw.jpg",
    bio: "Mike Hinshaw II is our go-to guy for all questions regarding materials. He is responsible for the creation of signs and banners as well as all the graphics we install on vehicles. From the time our designer's job ends and our installers begin, is where you will find all of his responsibilities. Mike has grown up in print as his father, Mike Sr., is an over 30-year veteran pre-press production technician/designer that is still active in the area. Mike Jr. has a graphic design education background that complements his love for car customization — landing him doing what he loves with Roll'n Wrapz for almost 10 years now.",
    specialties: ["Signs & Banners", "Vehicle Graphics", "Print Production", "Materials Expert"],
    icon: Printer,
  },
  {
    name: "Jenna Hickenbottom",
    role: "Graphic Designer",
    image: "/team/jenna-hickenbottom.jpg",
    bio: "Jenna is a graphic designer at Roll'N Wrapz with over 8 years of experience, including the past 4 years with the company. She specializes in helping customers bring their ideas to life, whether that means creating a design from scratch or working with existing graphics. From eye-catching vehicle wraps to custom signage, Jenna enjoys turning concepts into something people can see and be proud of. Known for her friendly and laid-back approach, she makes the design process easy and collaborative, ensuring each client feels heard and confident in the final result. Jenna takes pride in delivering creative solutions that not only look great but also reflect each customer's unique vision.",
    specialties: ["Vehicle Wrap Design", "Custom Signage", "Digital Mockups", "From-Scratch Design"],
    icon: Palette,
  },
  {
    name: "Jaicee Whitmarsh",
    role: "Customer Experience & Sales",
    image: "/team/jaicee-whitmarsh.jpg",
    bio: "When you reach out to Roll'n Wrapz, Jaicee is the voice on the phone, the name in your inbox, and the one who helps push your ideas into action. Whether that means answering your questions, gathering quote information, or making sure your vision — whether it's clean, crazy, or something completely out of the box — gets locked into an estimate ticket before passing it off to our designer to work her magic. From first call to final product, she keeps it rolling so your wrap gets from concept to reality without the chaos.",
    specialties: ["Customer Experience", "Quote Management", "Project Coordination", "Client Relations"],
    icon: Phone,
  },
  {
    name: "Anias Rose Patterson",
    role: "Shop Production & Office Administration",
    image: "/team/anias-patterson.jpg",
    bio: "Anias is a dynamic and highly versatile team member at Roll'n Wrapz, with over five years of experience supporting both shop production and front office operations. Whether she's working alongside the installation team in the shop with her husband, Zach, or assisting customers and managing administrative tasks up front for Roll'n Wrapz and its sister company, D&D Suncontrol, Anias plays a key role in keeping daily operations running smoothly. Known for her adaptability and hands-on approach, Anias has built a reputation for taking on projects that fall outside the \"normal\" scope of work — including embalming machines, airplanes, and caskets — projects that require precision, creativity, and a strong attention to detail.",
    specialties: ["Shop Production", "Office Administration", "Unique Applications", "D&D Suncontrol"],
    icon: Layers,
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
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#8dc63f] flex items-center justify-center shadow-lg shadow-[#8dc63f]/50">
                      <member.icon size={28} className="text-black md:w-8 md:h-8" />
                    </div>
                  </div>

                  {/* Name Badge */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20">
                    <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <h3 className="text-xl md:text-2xl font-display mb-1">{member.name}</h3>
                      <p className="text-[#8dc63f] font-medium text-sm md:text-base">{member.role}</p>
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
                    <h3 className="text-3xl md:text-4xl font-display mb-2">{member.name}</h3>
                    <p className="text-xl text-[#8dc63f] font-medium">{member.role}</p>
                  </div>

                  <p className="text-white/70 text-lg mb-8 leading-relaxed">{member.bio}</p>

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
