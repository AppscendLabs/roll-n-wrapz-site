"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Paperclip, X as XIcon } from "lucide-react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(501) 945-9727",
    link: "tel:5019459727",
  },
  {
    icon: Mail,
    title: "Email",
    content: "admin@rollnwrapz.com",
    link: "mailto:admin@rollnwrapz.com",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "4420 East 43rd Street, North Little Rock, AR 72117",
    link: "https://www.google.com/maps/search/?api=1&query=4420+East+43rd+Street+North+Little+Rock+AR+72117",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon–Fri: 8am–5pm",
    link: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFiles([]);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", vehicle: "", service: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-tight mb-6">
            GET IN <span className="text-[#8dc63f]">TOUCH</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Ready to transform your vehicle? Reach out for a free consultation
            and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#8dc63f] focus:ring-1 focus:ring-[#8dc63f] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#8dc63f] focus:ring-1 focus:ring-[#8dc63f] transition-all text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#8dc63f] focus:ring-1 focus:ring-[#8dc63f] transition-all text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Vehicle Year, Make & Model *
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  required
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#8dc63f] focus:ring-1 focus:ring-[#8dc63f] transition-all"
                  placeholder="e.g., 2023 BMW M4"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#8dc63f] focus:ring-1 focus:ring-[#8dc63f] transition-all"
                >
                  <option value="" className="bg-black">
                    Select a service
                  </option>
                  <option value="full-wrap" className="bg-black">
                    Full Vehicle Wrap
                  </option>
                  <option value="partial-wrap" className="bg-black">
                    Partial Wrap
                  </option>
                  <option value="chrome-delete" className="bg-black">
                    Chrome Delete
                  </option>
                  <option value="commercial" className="bg-black">
                    Commercial Wrap
                  </option>
                  <option value="residential" className="bg-black">
                    Residential / Architectural
                  </option>
                  <option value="custom-design" className="bg-black">
                    Custom Designed Wrap
                  </option>
                  <option value="window-perf" className="bg-black">
                    Window Perforation
                  </option>
                  <option value="other" className="bg-black">
                    Other / Not Sure
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#8dc63f] focus:ring-1 focus:ring-[#8dc63f] transition-all resize-none"
                  placeholder="Tell us about your vision, preferred colors, timeline, etc."
                />
              </div>

              {/* File Attachments */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Attach Photos <span className="text-white/40">(optional, up to 5)</span>
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full px-4 py-3 bg-white/5 border border-dashed border-white/20 rounded-lg text-white/60 hover:text-white hover:border-[#8dc63f]/50 transition-all flex items-center gap-3 text-sm"
                >
                  <Paperclip size={16} />
                  <span>Click to attach images or PDFs</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {files.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {files.map((file, i) => (
                      <li key={i} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/70">
                        <span className="truncate">{file.name}</span>
                        <button type="button" onClick={() => removeFile(i)} className="ml-3 text-white/40 hover:text-white flex-shrink-0">
                          <XIcon size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className={`w-full py-4 rounded-full font-bold text-lg uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? "bg-green-600 cursor-not-allowed"
                    : "bg-[#8dc63f] hover:shadow-2xl hover:shadow-[#8dc63f]/50"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <span>&#10003;</span> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#8dc63f]/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8dc63f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">{info.title}</p>
                    <p className="text-white font-medium">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4">Follow Our Work</h3>
              <p className="text-white/60 mb-6">
                Stay updated with our latest projects and transformations on
                social media.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#8dc63f] flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map Link */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=4420+East+43rd+Street+North+Little+Rock+AR+72117"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.02 }}
              className="block h-64 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center hover:border-[#8dc63f]/50 transition-all cursor-pointer"
            >
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-[#8dc63f]" />
                <p className="text-white/60">Open in Google Maps</p>
                <p className="text-white/40 text-sm">
                  4420 East 43rd Street, North Little Rock, AR 72117
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
