import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import CursorEffect from "./components/CursorEffect";
import { CurrencyProvider } from "./components/CurrencyContext";
import { ThemeProvider } from "./components/ThemeProvider";
import VideoBackground from "./components/Home/Navbar/VideoBackground";
import Footer from "./components/footer/Footer";
import { DestinationProvider } from "./destinations/DestinationContext";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Crafted-vacays",
  description: "Travel with crafted-vacays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ThemeProvider>
          <CurrencyProvider>
            <DestinationProvider>
              <CursorEffect />
              <Header />

              {/* Hero Section with Video and Navbar Overlay */}
              <div className="relative w-full h-screen overflow-hidden">
                <VideoBackground />
                {/* Navbar positioned above video */}
                <div className="absolute top-0 left-0 w-full z-20">
                  <ResponsiveNav />
                </div>
              </div>

              {/* Main Content */}
              <main className="dark:bg-gray-950 bg-white transition-colors duration-300">
                {children}
              </main>

              <ScrollToTop />
              <Footer />
            </DestinationProvider>
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
