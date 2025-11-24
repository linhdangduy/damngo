import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ImageGallery from "@/components/ImageGallery";
import VenueSection from "@/components/VenueSection";
import GiftSection from "@/components/GiftSection";

export default function Home() {
  // Curated photo collection - 10 best moments
  const ourJourneyPhotos = [
    "/images/QLN_4745.JPG",
    "/images/AMV_1790.JPG",
  ];

  const couplePhotos = [
    "/images/AMV_0710.JPG",
    "/images/AMV_0826.JPG",
  ];

  const loveStoryPhotos = [
    "/images/AMV_2064.jpg",
    "/images/AMV_0701.JPG",
  ];

  const journeyPhotos = [
    "/images/AMV_1222.JPG",
    "/images/AMV_0951.JPG",
  ];

  const togetherPhotos = [
    "/images/AMV_0061.JPG",
    "/images/AMV_0531.JPG",
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Wedding Invitation Display */}
      <Section className="bg-wedding-primary">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl elegant-text text-white mb-8 sm:mb-12">
            Thiệp Cưới
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 p-4 sm:p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl text-white mb-4 elegant-text">Mặt Ngoài</h3>
              <div className="relative w-full aspect-square">
                <img
                  src="/images/wedding-invitation/outlook-of-wedding-invitation.png"
                  alt="Wedding Invitation Outlook"
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="bg-white/10 p-4 sm:p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl text-white mb-4 elegant-text">Mặt Trong</h3>
              <div className="relative w-full aspect-square">
                <img
                  src="/images/wedding-invitation/inside-of-wedding-invitation.png"
                  alt="Wedding Invitation Inside"
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            Mỗi chi tiết trong thiệp cưới đều được chúng mình chọn lọc cẩn thận,
            thể hiện tình yêu và sự trân trọng dành cho quý vị - những người đặc biệt trong cuộc đời chúng mình.
          </p>
        </div>
      </Section>

      {/* Wedding Venue */}
      <Section className="bg-white">
        <VenueSection
          venueName="Diamond Palace - Khách sạn Giao Tế"
          address="Sảnh 3 - Tầng 1, số 9, Đ. Hồ Tùng Mậu, phường Thành Vinh, Nghệ An"
          date="29/11/2025"
          time="11:00 ~"
          mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.5767989624867!2d105.6861888!3d18.6711835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139cfecdfe7f2dd%3A0x391460d1698e18ba!2sDiamond%20Palace!5e1!3m2!1sen!2s!4v1732445678901!5m2!1sen!2s"
        />
      </Section>

      {/* Our Journey - Showcase the main couple photos */}
      <Section className="bg-wedding-cream">
        <ImageGallery
          images={ourJourneyPhotos}
          title="Hành Trình Tình Yêu"
          description="Từ những ngày đầu gặp gỡ, chúng mình đã biết rằng đây là duyên số trời định. Mỗi khoảnh khắc bên nhau đều là món quà quý giá, từ nụ cười đầu tiên đến những ước mơ chung về tương lai."
          layout="showcase"
        />
      </Section>

      {/* Couple Portraits */}
      <Section className="bg-white">
        <ImageGallery
          images={couplePhotos}
          title="Chân Dung Hạnh Phúc"
          description="Trong ánh mắt nhau, chúng mình tìm thấy tình yêu vô điều kiện. Mỗi nụ cười, mỗi cử chỉ nhỏ đều thể hiện sự trân trọng và yêu thương mà chúng mình dành cho nhau."
          layout="showcase"
        />
      </Section>

      {/* Love Story Moments */}
      <Section className="bg-wedding-cream">
        <ImageGallery
          images={loveStoryPhotos}
          title="Khoảnh Khắc Ngọt Ngào"
          description="Tình yêu không chỉ là lời hứa, mà còn là những khoảnh khắc bình dị nhưng đong đầy ý nghĩa. Từng giây phút bên nhau đều là kỷ niệm đáng nhớ trong câu chuyện tình của chúng mình."
          layout="grid"
        />
      </Section>

      {/* Journey Together */}
      <Section className="bg-white">
        <ImageGallery
          images={journeyPhotos}
          title="Cùng Nhau Bước Đi"
          description="Chúng mình đã cùng nhau trải qua biết bao điều. Mỗi bước chân đều là minh chứng cho tình yêu bền chặt, sẵn sàng đối mặt với mọi thử thách để đến với ngày hôm nay."
          layout="grid"
        />
      </Section>

      {/* Cherished Moments */}
      <Section className="bg-wedding-cream">
        <ImageGallery
          images={togetherPhotos}
          title="Hạnh Phúc Viên Mãn"
          description="Bên nhau, chúng mình tìm thấy sự bình yên và hạnh phúc trọn vẹn. Những khoảnh khắc giản đơn này chính là nền tảng cho tình yêu lớn lao mà chúng mình đang xây dựng."
          layout="grid"
        />
      </Section>

      {/* Gift Section */}
      <Section className="bg-white">
        <GiftSection
          brideQR={{ name: "Thục Hiền", imagePath: "/images/bride-qr.png" }}
          groomQR={{ name: "Duy Linh", imagePath: "/images/groom-qr.png" }}
        />
      </Section>

      {/* Footer */}
      <footer className="bg-wedding-accent text-white py-8 sm:py-12 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl elegant-text mb-4">Cảm Ơn Quý Vị</h3>
          <p className="text-base sm:text-lg mb-6 leading-relaxed">
            Chúng mình vô cùng biết ơn tình yêu thương và sự hỗ trợ của quý vị khi chúng mình bước
            vào chương mới của cuộc đời.
          </p>
          <p className="text-sm opacity-75">
            Trân trọng và biết ơn,
            <br />
            Thục Hiền & Duy Linh
          </p>
        </div>
      </footer>
    </main>
  );
}
