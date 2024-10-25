import {
  Figtree,
  Libre_Caslon_Display,
  Playfair_Display,
  Abril_Fatface,
  Open_Sans,
  Questrial,
} from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const libreCaslonDisplay = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-libreCaslonDisplay",
  weight: ["400"],
});

const figtree = Questrial({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400"],
});

const playFair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playFair",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Rasim Exports Pvt Ltd - EST. 2002",
  description: "Manufactures and Exporters of Fashion Apparels",
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
