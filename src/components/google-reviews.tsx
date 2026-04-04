"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

interface ReviewsData {
  rating: number;
  total: number;
  reviews: Review[];
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJ8xlFGoa-0ocRr6LpZesYi8A";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const px = size === "lg" ? "w-7 h-7" : "w-4 h-4";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`${px} ${star <= rating ? "text-[#FBBC04]" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => {
        if (d.reviews && d.reviews.length > 0) {
          setData(d);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Hide section entirely if no real reviews loaded
  if (!loading && !data) return null;

  const reviews = data?.reviews.slice(0, 3) ?? [];

  return (
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <StarRating rating={5} size="lg" />
            {data?.rating && (
              <span className="ml-1 text-white font-bold text-xl">{data.rating.toFixed(1)}</span>
            )}
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl tracking-tight mb-4">
            WHAT CUSTOMERS <span className="text-[#8dc63f]">SAY</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            Don&apos;t take our word for it — here&apos;s what our customers say on Google
          </p>
        </motion.div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[0, 1, 2].map((i) => (
              <div key={i} className="p-6 bg-white/[0.04] rounded-2xl border border-white/[0.08] animate-pulse">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <div key={j} className="w-4 h-4 rounded bg-white/10" />)}</div>
                <div className="space-y-2 mb-5">
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-5/6" />
                  <div className="h-3 bg-white/10 rounded w-4/6" />
                </div>
                <div className="h-3 bg-white/10 rounded w-1/3" />
              </div>
            ))}
          </div>
        )}

        {/* Real review cards */}
        {!loading && reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 bg-gradient-to-b from-white/[0.07] to-white/[0.02] rounded-2xl border border-white/[0.08]"
              >
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{review.author_name}</p>
                    <p className="text-white/40 text-xs">{review.relative_time_description}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/30">
                    <GoogleIcon />
                    <span className="text-xs">via Google</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center">
          <a
            href={GOOGLE_MAPS_URL}
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
  );
}
