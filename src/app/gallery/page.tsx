"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { X } from "lucide-react";

type Category = "All" | "Gloss" | "Custom" | "Commercial" | "Matte";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: Category;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/gallery/cadillac-ctsv-purple-1.jpg",
    title: "Cadillac CTS-V",
    category: "Gloss",
    description: "Full gloss purple wrap on a Cadillac CTS-V",
  },
  {
    id: 2,
    image: "/gallery/cadillac-ctsv-purple-2.jpg",
    title: "Cadillac CTS-V — Side Profile",
    category: "Gloss",
    description: "Full gloss purple wrap showcasing the side profile",
  },
  {
    id: 3,
    image: "/gallery/cadillac-ctsv-purple-3.jpg",
    title: "Cadillac CTS-V — Golden Hour",
    category: "Gloss",
    description: "Gloss purple finish catching the golden hour light",
  },
  {
    id: 4,
    image: "/gallery/infiniti-pink-black.jpg",
    title: "Infiniti — Pink & Black",
    category: "Custom",
    description: "Two-tone pink and matte black custom split wrap",
  },
  {
    id: 5,
    image: "/gallery/infiniti-chameleon.jpg",
    title: "Infiniti Q50 — Color Shift",
    category: "Custom",
    description: "Chameleon color-shift wrap with iridescent finish",
  },
  {
    id: 6,
    image: "/gallery/slingshot-custom.jpg",
    title: "Polaris Slingshot",
    category: "Custom",
    description: "Custom graphic wrap on a Polaris Slingshot",
  },
  {
    id: 7,
    image: "/gallery/motorcycle-gold.jpg",
    title: "Sport Bike — Gold Wrap",
    category: "Custom",
    description: "Full gold vinyl wrap on a sport motorcycle",
  },
  {
    id: 8,
    image: "/gallery/motorcycle-chameleon.jpg",
    title: "Sport Bike — Holographic",
    category: "Custom",
    description: "Holographic color-shift wrap on a sport bike",
  },
  {
    id: 9,
    image: "/gallery/lotto-truck-1.jpg",
    title: "Arkansas Lottery Truck",
    category: "Commercial",
    description: "Full commercial wrap for the Arkansas Lottery",
  },
  {
    id: 10,
    image: "/gallery/lotto-truck-2.jpg",
    title: "Arkansas Lottery — Side View",
    category: "Commercial",
    description: "Bold purple and orange branding wrap",
  },
  {
    id: 11,
    image: "/gallery/ford-mobile-service.jpg",
    title: "Ford Transit — Mark McLarty Ford",
    category: "Commercial",
    description: "Full branded commercial wrap for a Ford dealership",
  },
  {
    id: 12,
    image: "/gallery/escalade-chrome-delete-1.jpg",
    title: "Cadillac Escalade — Chrome Delete",
    category: "Matte",
    description: "Chrome delete with blacked-out trim and wheels",
  },
  {
    id: 13,
    image: "/gallery/escalade-chrome-delete-2.jpg",
    title: "Cadillac Escalade — Side Profile",
    category: "Matte",
    description: "Clean matte finish with full chrome delete",
  },
  {
    id: 14,
    image: "/gallery/ram-rebel-partial.jpg",
    title: "RAM Rebel — Partial Wrap",
    category: "Matte",
    description: "Matte black partial wrap on a RAM Rebel 4x4",
  },
];

const categories: Category[] = ["All", "Gloss", "Custom", "Commercial", "Matte"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
            OUR <span className="text-[#8dc63f]">GALLERY</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Explore our portfolio of stunning vehicle transformations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all ${
                selectedCategory === category
                  ? "bg-[#8dc63f] text-black shadow-lg shadow-[#8dc63f]/50"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform z-20">
                  <span className="text-xs uppercase tracking-wider text-[#8dc63f] mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="object-cover"
                  sizes="90vw"
                />
              </div>
              <div className="mt-6 text-center">
                <span className="text-sm uppercase tracking-wider text-[#8dc63f] block mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/70">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
