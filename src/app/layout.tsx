import type { Metadata } from "next";
import { Outfit, Crimson_Text } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animal Husbandry Farm | Premium Livestock & Care",
  description: "Specializing in the sustainable raising and care of poultry, cattle, and goats. Our farm represents the pinnacle of modern animal husbandry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${crimsonText.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
