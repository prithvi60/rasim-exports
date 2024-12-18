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


// Update Meta Data
export async function generateMetadata() {
  return {
    title: "Rasim Exports Pvt Ltd - EST. 2002",
    description:
      "Manufactures and Exporters of Fashion Apparels",
    robots: "index, follow",
    applicationName: "Rasim Exports Pvt Ltd - EST. 2002",
    authors: [{ name: "Webibee" }],
    generator: "Next.js",
    keywords: [
      "India",
      "Rasim Exports Textiles",
      "Indian Textile Manufacturing",
      "Custom Textile Production",
      "Quality Textile Supplier",
      "Sustainable Textiles India",
      "Textile Export Services",
      "India Textile Manufacturing Hub",
      "Textile Sourcing India",
      "Textile Supplier for B2B",
      "Eco-Friendly Textiles",
      "Textile Brand Protection",
      "Textile Manufacturer Tamil Nadu",
      "India to Global Textile Export",
      "Textile Supplier for Middle East Markets",
    ],
    
    referrer: "origin-when-cross-origin",
    creator: "Webibee",
    publisher: "Manufactures and Exporters of Fashion Apparels",
    metadataBase: new URL("https://rasims.com/"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      url: `https://rasims.com/`,
      title: "Rasim Exports Pvt Ltd - EST. 2002",
      description:
        "Manufactures and Exporters of Fashion Apparels.",
      siteName: "Rasim",
    //   images: [
    //     {
    //       url: "https://rasims.com/daga-new-logo.png",
    //     },
    //   ],
    //   "@context": "https://schema.org",
    //   "@type": "LawFirm",
    //   logo: "https://rasims.com/daga-new-logo.png",
    //   address: {
    //     "@type": "PostalAddress",
    //     streetAddress: "Swarna Shree Complex, 3rd Floor, 36, Veerappan St",
    //     addressLocality: "Sowcarpet",
    //     addressRegion: "Tamil Nadu, Chennai",
    //     postalCode: "600001",
    //     addressCountry: "IN",
    //   },
    //   contactPoint: {
    //     "@type": "ContactPoint",
    //     telephone: "+91-9551028280",
    //     contactType: "Customer Service",
    //     areaServed: "IN",
    //     availableLanguage: "English",
    //   },
    //   sameAs: ["https://www.linkedin.com/company/daga-daga"],
    //   department: {
    //     "@type": "LegalService",
    //     name: "Intellectual Property Law",
    //     serviceType: "IPR Services",
    //     serviceArea: {
    //       "@type": "Place",
    //       name: "India",
    //     },
    //     address: {
    //       "@type": "PostalAddress",
    //       streetAddress: "Swarna Shree Complex, 3rd Floor, 36, Veerappan St",
    //       addressLocality: "Sowcarpet",
    //       addressRegion: "Tamil Nadu, Chennai",
    //       postalCode: "600001",
    //       addressCountry: "IN",
    //     },
    //     additionalType: "https://schema.org/Service",
    //     url: "https://rasims.com/contact",
    //     description: "Get in touch with our team for any enquiries.",
    //   },
    //   additionalType: "https://schema.org/Service",
    //   serviceType: "Legal Services",
    //   url: "https://rasims.com/services",
    //   description:
    //     "Reliable legal services for all your intellectual property needs.",
    },
  };
}


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

// export const metadata = {
//   title: "Rasim Exports Pvt Ltd - EST. 2002",
//   description: "Manufactures and Exporters of Fashion Apparels",
// };

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
