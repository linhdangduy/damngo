"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface QRCode {
  name: string;
  imagePath: string;
}

interface GiftSectionProps {
  brideQR?: QRCode;
  groomQR?: QRCode;
}

export default function GiftSection({
  brideQR = { name: "Cô Dâu", imagePath: "/images/bride-qr.png" },
  groomQR = { name: "Chú Rể", imagePath: "/images/groom-qr.png" },
}: GiftSectionProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedQR, setSelectedQR] = useState<QRCode | null>(null);

  const openModal = (qr: QRCode) => {
    setSelectedQR(qr);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedQR(null);
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl elegant-text text-wedding-primary mb-6 sm:mb-8 leading-tight">
            Sự Hiện Diện Của Quý Vị Là Món Quà Quý Giá Nhất
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            Sự có mặt của quý vị trong ngày trọng đại là món quà lớn nhất đối với chúng mình. Tuy nhiên,
            nếu quý vị muốn gửi tặng chúng mình một món quà, chúng mình đã chuẩn bị thông tin bên dưới.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.button
              onClick={() => openModal(brideQR)}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-wedding-primary text-4xl sm:text-5xl mb-4">💝</div>
              <h3 className="text-2xl sm:text-3xl elegant-text mb-4 text-wedding-accent">{brideQR.name}</h3>
              <p className="text-base sm:text-lg text-gray-600">Nhấn để xem mã QR</p>
            </motion.button>

            <motion.button
              onClick={() => openModal(groomQR)}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-wedding-primary text-4xl sm:text-5xl mb-4">💝</div>
              <h3 className="text-2xl sm:text-3xl elegant-text mb-4 text-wedding-accent">{groomQR.name}</h3>
              <p className="text-base sm:text-lg text-gray-600">Nhấn để xem mã QR</p>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && selectedQR && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
            >
              &times;
            </button>

            <h3 className="text-3xl elegant-text mb-6 text-center text-wedding-primary">
              Mã QR của {selectedQR.name}
            </h3>

            <div className="relative w-full aspect-square mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* You'll need to add actual QR code images */}
              <p className="text-gray-500 text-center px-4">
                Hình ảnh mã QR sẽ hiển thị tại đây
                <br />
                <span className="text-sm">Đường dẫn: {selectedQR.imagePath}</span>
              </p>
              {/* Uncomment when you have actual QR images
              <Image
                src={selectedQR.imagePath}
                alt={`Mã QR ${selectedQR.name}`}
                fill
                className="object-contain"
              />
              */}
            </div>

            <button
              onClick={closeModal}
              className="w-full py-3 bg-wedding-primary text-white rounded-lg hover:bg-wedding-accent transition-colors duration-300 elegant-text text-lg"
            >
              Đóng
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
