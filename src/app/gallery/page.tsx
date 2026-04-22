"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

type Category = "All" | "Gloss" | "Custom" | "Commercial" | "Matte";

interface GalleryProject {
  id: number;
  images: string[];
  title: string;
  category: Category;
  description: string;
}

const galleryProjects: GalleryProject[] = [
  // ── Gloss ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    images: [
      "/gallery/cadillac-ctsv-purple-1.jpg",
      "/gallery/cadillac-ctsv-purple-2.jpg",
      "/gallery/cadillac-ctsv-purple-3.jpg",
    ],
    title: "Cadillac CTS-V",
    category: "Gloss",
    description: "Full gloss purple wrap on a Cadillac CTS-V",
  },
  {
    id: 2,
    images: ["/gallery/gmc-sierra-matte-pink.jpg"],
    title: "GMC Sierra 1500 — Matte Pink",
    category: "Matte",
    description: "Full matte pink wrap on a lifted GMC Sierra 1500",
  },

  // ── Custom ─────────────────────────────────────────────────────────────────
  {
    id: 3,
    images: ["/gallery/infiniti-pink-black.jpg"],
    title: "Infiniti — Pink & Black",
    category: "Custom",
    description: "Two-tone pink and matte black custom split wrap",
  },
  {
    id: 4,
    images: ["/gallery/infiniti-chameleon.jpg"],
    title: "Infiniti Q50 — Color Shift",
    category: "Custom",
    description: "Chameleon color-shift wrap with iridescent finish",
  },
  {
    id: 5,
    images: ["/gallery/slingshot-custom.jpg"],
    title: "Polaris Slingshot — Custom",
    category: "Custom",
    description: "Custom graphic wrap on a Polaris Slingshot",
  },
  {
    id: 6,
    images: ["/gallery/slingshot-superman.jpg"],
    title: "Polaris Slingshot — Superman",
    category: "Custom",
    description: "Superman-themed custom wrap on a Polaris Slingshot",
  },
  {
    id: 7,
    images: ["/gallery/motorcycle-gold.jpg"],
    title: "Sport Bike — Gold Wrap",
    category: "Custom",
    description: "Full gold vinyl wrap on a sport motorcycle",
  },
  {
    id: 8,
    images: ["/gallery/motorcycle-chameleon.jpg"],
    title: "Sport Bike — Holographic",
    category: "Custom",
    description: "Holographic color-shift wrap on a sport bike",
  },
  {
    id: 9,
    images: [
      "/gallery/woo-pig-car-1.jpg",
      "/gallery/woo-pig-car-2.jpg",
    ],
    title: "Razorback — Woo Pig Sooie",
    category: "Custom",
    description: "Arkansas Razorbacks-themed custom graphic wrap",
  },
  {
    id: 10,
    images: [
      "/gallery/freightliner-rv-1.jpg",
      "/gallery/freightliner-rv-2.jpg",
      "/gallery/freightliner-rv-3.jpg",
      "/gallery/freightliner-rv-4.jpg",
    ],
    title: "Freightliner RV — Custom",
    category: "Custom",
    description: "Full custom wrap on a Freightliner-based RV",
  },
  {
    id: 11,
    images: [
      "/gallery/silverado-hex-1.jpg",
      "/gallery/silverado-hex-2.jpg",
      "/gallery/silverado-hex-3.jpg",
    ],
    title: "Chevy Silverado — Hex Stripe Kit",
    category: "Custom",
    description: "Geometric hexagon stripe kit on a Chevy Silverado",
  },
  {
    id: 12,
    images: [
      "/gallery/dodge-charger-stripe-1.jpg",
      "/gallery/dodge-charger-stripe-2.jpg",
      "/gallery/dodge-charger-stripe-3.jpg",
    ],
    title: "Dodge Charger — Racing Stripes",
    category: "Custom",
    description: "Custom racing stripe graphics on a Dodge Charger",
  },
  {
    id: 13,
    images: ["/gallery/dodge-charger-skull.jpg"],
    title: "Dodge Charger — Hellcat Decal",
    category: "Custom",
    description: "Custom Hellcat decal wrap on a Dodge Charger",
  },
  {
    id: 14,
    images: [
      "/gallery/mahindra-roxor-camo-1.jpg",
      "/gallery/mahindra-roxor-camo-2.jpg",
      "/gallery/mahindra-roxor-camo-3.jpg",
      "/gallery/mahindra-roxor-camo-4.jpg",
    ],
    title: "Mahindra Roxor — Camo",
    category: "Custom",
    description: "Full camouflage wrap on a Mahindra Roxor off-road vehicle",
  },
  {
    id: 15,
    images: [
      "/gallery/ed-edd-n-eddy-1.jpg",
      "/gallery/ed-edd-n-eddy-2.jpg",
      "/gallery/ed-edd-n-eddy-3.jpg",
    ],
    title: "Ed, Edd n Eddy — Custom Graphic",
    category: "Custom",
    description: "Full custom cartoon-themed graphic wrap",
  },
  {
    id: 16,
    images: [
      "/gallery/polaris-utv-camo-1.jpg",
      "/gallery/polaris-utv-camo-2.jpg",
    ],
    title: "Polaris UTV — Camo",
    category: "Custom",
    description: "Full camouflage wrap on a Polaris UTV",
  },
  {
    id: 17,
    images: [
      "/gallery/49ers-casket-1.jpg",
      "/gallery/49ers-casket-2.jpg",
    ],
    title: "San Francisco 49ers — Casket",
    category: "Custom",
    description: "Custom 49ers-themed vinyl wrap on a casket",
  },
  {
    id: 18,
    images: [
      "/gallery/gmc-sierra-camo-1.jpg",
      "/gallery/gmc-sierra-camo-2.jpg",
      "/gallery/gmc-sierra-camo-3.jpg",
      "/gallery/gmc-sierra-camo-4.jpg",
      "/gallery/gmc-sierra-camo-5.jpg",
    ],
    title: "GMC Sierra — Camo & Orange Stripes",
    category: "Custom",
    description: "Full camo wrap with custom orange Roll N Wrapz racing stripes",
  },

  // ── Commercial ─────────────────────────────────────────────────────────────
  {
    id: 19,
    images: [
      "/gallery/lotto-truck-1.jpg",
      "/gallery/lotto-truck-2.jpg",
    ],
    title: "Arkansas Lottery Truck",
    category: "Commercial",
    description: "Full commercial wrap for the Arkansas Lottery",
  },
  {
    id: 20,
    images: ["/gallery/ford-mobile-service.jpg"],
    title: "Ford Transit — Mark McLarty Ford",
    category: "Commercial",
    description: "Full branded commercial wrap for a Ford dealership",
  },
  {
    id: 21,
    images: ["/gallery/binswanger-glass.jpg"],
    title: "Binswanger Glass — Fleet Wrap",
    category: "Commercial",
    description: "Full branded fleet wrap for Binswanger Glass",
  },
  {
    id: 22,
    images: ["/gallery/siemens-f150.jpg"],
    title: "Powers — Ford F-150",
    category: "Commercial",
    description: "Powers decals commercial wrap on a Ford F-150",
  },
  {
    id: 23,
    images: [
      "/gallery/ar-game-fish-1.jpg",
      "/gallery/ar-game-fish-2.jpg",
    ],
    title: "AR Game & Fish — Trailer Wrap",
    category: "Commercial",
    description: "Full branded wrap for the Arkansas Game & Fish Commission trailer",
  },
  {
    id: 24,
    images: ["/gallery/ar-methodist-ambulance.jpg"],
    title: "AR Methodist — Ambulance Wrap",
    category: "Commercial",
    description: "Professional branded wrap for an Arkansas Methodist ambulance",
  },
  {
    id: 25,
    images: [
      "/gallery/clear-fruit-truck-1.jpg",
      "/gallery/clear-fruit-truck-2.jpg",
      "/gallery/clear-fruit-truck-3.jpg",
      "/gallery/clear-fruit-truck-4.jpg",
    ],
    title: "Clear Fruit — Fleet Truck",
    category: "Commercial",
    description: "Vibrant full commercial wrap for the Clear Fruit brand fleet",
  },
  {
    id: 26,
    images: [
      "/gallery/mustang-mach-e-pink-1.jpg",
      "/gallery/mustang-mach-e-pink-2.jpg",
      "/gallery/mustang-mach-e-pink-3.jpg",
    ],
    title: "Mustang Mach-E — Everett GMC",
    category: "Commercial",
    description: "Eye-catching pink branded wrap for Everett GMC dealership",
  },
  {
    id: 27,
    images: [
      "/gallery/infiniti-qx60-1.jpg",
      "/gallery/infiniti-qx60-2.jpg",
      "/gallery/infiniti-qx60-3.jpg",
    ],
    title: "Infiniti QX60 — Everett GMC",
    category: "Commercial",
    description: "Full branded commercial wrap for Everett GMC dealership",
  },
  {
    id: 28,
    images: [
      "/gallery/aaa-business-systems-1.jpg",
      "/gallery/aaa-business-systems-2.jpg",
    ],
    title: "AAA Business Systems — Toyota",
    category: "Commercial",
    description: "Full branded commercial wrap on a Toyota Corolla",
  },
  {
    id: 35,
    images: ["/gallery/hummer-h2-miracle-motors.jpg"],
    title: "Hummer H2 — Miracle Motors",
    category: "Commercial",
    description: "Custom wing graphic commercial wrap on a Hummer H2",
  },

  // ── Matte ──────────────────────────────────────────────────────────────────
  {
    id: 29,
    images: [
      "/gallery/escalade-chrome-delete-1.jpg",
      "/gallery/escalade-chrome-delete-2.jpg",
    ],
    title: "Cadillac Escalade — Tuxedo Wrap",
    category: "Matte",
    description: "Tuxedo wrap with blacked-out trim and wheels on a Cadillac Escalade",
  },
  {
    id: 30,
    images: ["/gallery/ram-rebel-partial.jpg"],
    title: "RAM Rebel — Partial Wrap",
    category: "Matte",
    description: "Matte black partial wrap on a RAM Rebel 4x4",
  },
  {
    id: 31,
    images: [
      "/gallery/ford-expedition-chrome-delete-1.jpg",
      "/gallery/ford-expedition-chrome-delete-2.jpg",
      "/gallery/ford-expedition-chrome-delete-3.jpg",
      "/gallery/ford-expedition-chrome-delete-4.jpg",
      "/gallery/ford-expedition-chrome-delete-5.jpg",
    ],
    title: "Ford Expedition — Tuxedo Wrap",
    category: "Matte",
    description: "Tuxedo wrap with matte accents on a Ford Expedition",
  },
  {
    id: 32,
    images: ["/gallery/dodge-durango-stripe.jpg"],
    title: "Dodge Durango — Hood Stripe",
    category: "Matte",
    description: "Matte black hood stripe accent wrap on a Dodge Durango",
  },
  {
    id: 33,
    images: [
      "/gallery/gmc-yukon-military-1.jpg",
      "/gallery/gmc-yukon-military-2.jpg",
    ],
    title: "GMC Yukon — Military Green",
    category: "Matte",
    description: "Matte military green full wrap on a GMC Yukon",
  },
  {
    id: 34,
    images: ["/gallery/tesla-cybertruck-matte.jpg"],
    title: "Tesla Cybertruck — Satin Black",
    category: "Matte",
    description: "Satin black full wrap on a Tesla Cybertruck",
  },
];

const categories: Category[] = ["All", "Gloss", "Custom", "Commercial", "Matte"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === selectedCategory);

  const openProject = (project: GalleryProject) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setImageIndex(0);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setImageIndex((i) => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setImageIndex((i) => (i + 1) % selectedProject.images.length);
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
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => openProject(project)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity z-10" />

                {/* Multi-photo badge */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-white/80">
                    <Images size={12} />
                    <span>{project.images.length}</span>
                  </div>
                )}

                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform z-20">
                  <span className="text-xs uppercase tracking-wider text-[#8dc63f] mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Close */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeProject}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close"
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
              {/* Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <ImageWithFallback
                      src={selectedProject.images[imageIndex]}
                      alt={`${selectedProject.title} — photo ${imageIndex + 1}`}
                      className="object-cover"
                      sizes="90vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next — only show if multiple images */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={22} />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedProject.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setImageIndex(i); }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === imageIndex ? "bg-[#8dc63f] w-4" : "bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <span className="text-sm uppercase tracking-wider text-[#8dc63f] block mb-2">
                  {selectedProject.category}
                  {selectedProject.images.length > 1 && (
                    <span className="text-white/40 normal-case tracking-normal ml-2">
                      · {imageIndex + 1} / {selectedProject.images.length}
                    </span>
                  )}
                </span>
                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-white/70">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
