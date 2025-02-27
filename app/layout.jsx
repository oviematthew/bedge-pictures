import { Cormorant_Garamond, Poppins, Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Bedge Pictures - Creative Perspective",
  description:
    "Bedge Pictures is a team of photographers, who push the boundaries by changing the way Nigerian weddings have traditionally been photographed. By doing so, we create images that stand out in today’s highly competitive wedding market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
