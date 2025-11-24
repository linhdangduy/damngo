"use client";

import { motion } from "framer-motion";

interface VenueSectionProps {
  venueName?: string;
  address?: string;
  date?: string;
  time?: string;
  mapEmbedUrl?: string;
}

export default function VenueSection({
  venueName = "Địa Điểm Tổ Chức",
  address = "123 Đường Tiệc Cưới, Thành Phố, Quốc Gia",
  date = "[Ngày Cưới]",
  time = "[Giờ Cưới]",
  mapEmbedUrl = "",
}: VenueSectionProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl elegant-text text-wedding-primary mb-8 sm:mb-12">
          Thời Gian & Địa Điểm
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-wedding-primary text-3xl sm:text-4xl mb-4">📅</div>
            <h3 className="text-2xl sm:text-3xl elegant-text mb-4 text-wedding-accent">Ngày & Giờ</h3>
            <p className="text-lg sm:text-xl md:text-2xl mb-2">{date}</p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">{time}</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-wedding-primary text-3xl sm:text-4xl mb-4">📍</div>
            <h3 className="text-2xl sm:text-3xl elegant-text mb-4 text-wedding-accent">Địa Điểm</h3>
            <p className="text-lg sm:text-xl md:text-2xl mb-2">{venueName}</p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 break-words">{address}</p>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí địa điểm tổ chức"
            ></iframe>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center p-4">
              <p className="text-gray-500 text-base sm:text-lg text-center">
                Bản đồ sẽ hiển thị tại đây
                <br />
                <span className="text-sm">Vui lòng thêm URL nhúng Google Maps của bạn</span>
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
