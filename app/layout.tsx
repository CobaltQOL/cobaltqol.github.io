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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} ${exo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
