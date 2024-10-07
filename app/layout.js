import {
  Figtree,
  Libre_Caslon_Display,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const libreCaslonDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  variable: "--font-libreCaslonDisplay",
  weight: ["400"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "700"],
});

const playFair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playFair",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Rasim Exports Textile Enterprises",
  description:
    "Rasim Textile Enterprises is a prominent company engaged in the manufacturing and exporting of a wide range of garments. Established in 2002, the company specializes in producing high-quality men’s shirts, men’s shorts, women’s blouses, and children’s garments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libreCaslonDisplay.variable} ${figtree.variable} ${playFair.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
