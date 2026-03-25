import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/gallery-1.png", alt: "Mehendi celebration", category: "Mehendi" },
  { src: "/gallery-2.png", alt: "Haldi ceremony", category: "Haldi" },
  { src: "/gallery-3.png", alt: "Couple portrait", category: "Couple" },
  { src: "/gallery-4.png", alt: "Family moments", category: "Family" },
  { src: "/gallery-5.png", alt: "Wedding decorations", category: "Mehendi" },
  { src: "/gallery-6.png", alt: "Couple dancing", category: "Couple" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Our Gallery</h2>
          <div className="w-24 h-px bg-gold/50 mx-auto" />
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.src}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                style={{ minHeight: index % 3 === 0 ? "280px" : "200px" }}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <span className="font-body text-sm text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute -top-12 right-0 text-primary-foreground hover:text-gold transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={lightbox}
                alt="Gallery preview"
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
