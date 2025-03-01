import { Cormorant_Garamond, Poppins } from "next/font/google";
import ThemeProviderWrapper from "./ThemeProviderWrapper";
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
    "Bedge Pictures is a team of photographers who push the boundaries by changing the way Nigerian weddings have traditionally been photographed. By doing so, we create images that stand out in today’s highly competitive wedding market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
