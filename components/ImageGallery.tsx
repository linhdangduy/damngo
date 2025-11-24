"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  title?: string;
  description?: string;
  layout?: "grid" | "showcase"; // showcase for larger, more prominent display
}

export default function ImageGallery({
  images,
  title,
  description,
  layout = "grid"
}: ImageGalleryProps) {

  // Showcase layout - larger images, more elegant presentation
  if (layout === "showcase") {
    return (
      <div className="w-full max-w-5xl mx-auto px-4">
        {title && (
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl elegant-text text-wedding-primary mb-6 leading-tight">
              {title}
            </h2>

            {description && (
              <div className="w-20 sm:w-24 h-1 bg-wedding-primary mx-auto mb-6"></div>
            )}
          </motion.div>
        )}

        {description && (
          <motion.p
            className="text-base sm:text-lg md:text-xl text-center mb-12 sm:mb-16 text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl mx-auto w-full max-w-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={image}
                alt={`${title || 'Ảnh cưới'} ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                quality={90}
              />
              {/* Elegant overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Grid layout - compact display
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {title && (
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl elegant-text text-wedding-primary mb-6 leading-tight">
            {title}
          </h2>

          {description && (
            <div className="w-20 sm:w-24 h-1 bg-wedding-primary mx-auto mb-6"></div>
          )}
        </motion.div>
      )}

      {description && (
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center mb-10 sm:mb-12 text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl mx-auto w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Image
              src={image}
              alt={`${title || 'Ảnh cưới'} ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              quality={85}
            />
            {/* Elegant overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
