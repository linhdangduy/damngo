// Wedding Website Configuration
// Edit this file to customize your wedding invitation website

export const weddingConfig = {
  // Couple Information
  couple: {
    bride: {
      name: "Bride's Full Name",
      firstName: "Bride",
    },
    groom: {
      name: "Groom's Full Name",
      firstName: "Groom",
    },
  },

  // Wedding Date & Time
  wedding: {
    date: "Saturday, December 25th, 2025",
    time: "4:00 PM - 10:00 PM",
    ceremony: {
      time: "4:00 PM",
    },
    reception: {
      time: "6:00 PM",
    },
  },

  // Venue Information
  venue: {
    name: "Grand Ballroom Wedding Hall",
    address: "123 Wedding Street, Beautiful City, Country",
    city: "Beautiful City",
    // Get your Google Maps embed URL from: https://www.google.com/maps
    // Click Share -> Embed a map -> Copy the src URL from the iframe
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE",
  },

  // QR Codes for Gifts
  // Place your QR code images in the public/images folder
  gifts: {
    bride: {
      name: "Bride's Name",
      qrCodePath: "/images/bride-qr.png",
      bankName: "Bank Name",
      accountNumber: "XXXX-XXXX-XXXX",
    },
    groom: {
      name: "Groom's Name",
      qrCodePath: "/images/groom-qr.png",
      bankName: "Bank Name",
      accountNumber: "XXXX-XXXX-XXXX",
    },
  },

  // Social Media & Contact
  contact: {
    email: "wedding@example.com",
    phone: "+1 (234) 567-8900",
  },

  // Customize the text on your website
  messages: {
    heroTitle: "We're Getting Married",
    heroSubtitle: "Join us in celebrating our love story",
    heroButton: "Our Story",

    ourStory: {
      title: "Our Love Story",
      paragraph1:
        "Every love story is beautiful, but ours is our favorite. From the moment our eyes first met, we knew that destiny had brought us together. Through laughter and tears, joy and challenges, our love has only grown stronger with each passing day.",
      paragraph2:
        "Now, we are thrilled to begin the next chapter of our journey together, and we would be honored to have you witness our union and celebrate this special moment with us.",
    },

    giftMessage: {
      title: "Your Presence is Our Present",
      subtitle:
        "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have provided our details below.",
    },

    footer: {
      thankYou: "Thank You",
      message:
        "We are so grateful for your love and support as we begin this new chapter of our lives.",
    },
  },

  // Photo Gallery Sections
  // Customize the titles and descriptions for each photo section
  photoSections: {
    engagement: {
      title: "The Beginning",
      description:
        "Where our forever started. These moments captured the spark that ignited our hearts and the promise of a lifetime together.",
    },
    couple: {
      title: "Two Hearts, One Soul",
      description:
        "In each other's arms, we found our home. These cherished moments reflect the deep connection and unwavering bond we share.",
    },
    loveStory: {
      title: "A Journey of Love",
      description:
        "Love is not just a feeling; it's a journey we choose to take together every single day, hand in hand, heart to heart.",
    },
    memories: {
      title: "Beautiful Memories",
      description:
        "Every moment spent together has become a treasured memory, painting the canvas of our love story with vibrant colors of joy and happiness.",
    },
    journey: {
      title: "Our Journey Together",
      description:
        "From strangers to soulmates, our journey has been filled with countless adventures, endless laughter, and infinite love.",
    },
    celebration: {
      title: "Celebrating Us",
      description:
        "Every day with you is a celebration of love, a testament to the beautiful life we are building together.",
    },
    together: {
      title: "Together Forever",
      description:
        "In your eyes, I found my home. In your heart, I found my love. In your soul, I found my forever.",
    },
    family: {
      title: "Family & Love",
      description:
        "Family is where life begins and love never ends. We are blessed to unite our families and create new beautiful traditions together.",
    },
    special: {
      title: "Special Moments",
      description:
        "These precious moments will forever hold a special place in our hearts as we prepare to say 'I do'.",
    },
  },
};

export default weddingConfig;
