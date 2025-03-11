import type { Metadata, Viewport } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2C75D5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cobalt",
  description: "Free QOL.",
  openGraph: {
    title: "Cobalt",
    description: "Free QOL.",
    url: "https://cobaltqol.github.io",
    images: [
      {
        url: "https://cobaltqol.github.io/logo.png",
        width: 50,
        height: 50,
        alt: "Cobalt Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.variable} ${exo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
