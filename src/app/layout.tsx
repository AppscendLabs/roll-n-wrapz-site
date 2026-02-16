import type { Metadata } from "next";
import { Barlow, Anton } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SplashScreen } from "@/components/splash-screen";

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "ROLL'N WRAPZ | Premium Vehicle Wrapping",
  description:
    "Premium vehicle wrapping that turns heads and protects your investment. Full wraps, partial wraps, paint protection film, and chrome delete services.",
  keywords: [
    "vehicle wrap",
    "car wrap",
    "vinyl wrap",
    "paint protection",
    "chrome delete",
    "matte wrap",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${anton.variable} font-sans antialiased`}>
        <SplashScreen />
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
