"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { X } from "lucide-react";

type Category = "All" | "Chrome" | "Matte" | "Gloss" | "Custom";

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
    image:
      "https://images.unsplash.com/photo-1641900409160-3d288c5a5805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3cmFwJTIwY2hyb21lfGVufDF8fHx8MTc3MDk1NTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Chrome Luxury Sedan",
    category: "Chrome",
    description: "Full chrome wrap with premium finish",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1760550517611-31732ef31135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB2aW55bCUyMHdyYXB8ZW58MXx8fHwxNzcwOTU1Mzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sport Performance Wrap",
    category: "Gloss",
    description: "High-gloss vinyl with custom accents",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1592713864248-fdef16231790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0ZSUyMGJsYWNrJTIwd3JhcHBlZCUyMGNhcnxlbnwxfHx8fDE3NzA5NTUzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Matte Black Beast",
    category: "Matte",
    description: "Sleek matte black finish",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1555534650-6bb24b6fc0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmNhciUyMGV4b3RpYyUyMHdyYXB8ZW58MXx8fHwxNzcwOTU1Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Exotic Supercar",
    category: "Custom",
    description: "Custom color-shifting wrap",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1699016144012-aea937145c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHdyYXBwZWQlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MDk1NTM3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Vibrant Custom Design",
    category: "Custom",
    description: "Multi-color custom wrap design",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1532793962127-d6735aba5cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB3cmFwcGVkJTIwc3BvcnRzJTIwY2FyfGVufDF8fHx8MTc3MDk1NTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Racing Red",
    category: "Gloss",
    description: "High-impact gloss red finish",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1735231830244-bed9285556c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwd3JhcHBlZCUyMGx1eHVyeSUyMHNlZGFufGVufDF8fHx8MTc3MDk1NTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Blue",
    category: "Matte",
    description: "Matte blue with metallic accents",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1707999494553-27506fa302a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjB3cmFwcGVkJTIwc3VwZXJjYXJ8ZW58MXx8fHwxNzcwOTU1NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Yellow Thunder",
    category: "Gloss",
    description: "Bright yellow gloss finish",
  },
];

const categories: Category[] = ["All", "Chrome", "Matte", "Gloss", "Custom"];

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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
            OUR <span className="text-[#8dc63f]">GALLERY</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
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
