import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Wedding Invitation",
  description: "Join us in celebrating our special day",
  keywords: ["wedding", "invitation", "celebration"],
  openGraph: {
    title: "Our Wedding Invitation",
    description: "Join us in celebrating our special day",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="smooth-scroll">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="w-full max-w-[2000px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
