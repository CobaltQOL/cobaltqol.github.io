import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cobalt",
  description: "Free QOL.",
  themeColor: "#172554", 

  openGraph: {
    title: "Cobalt",
    description: "Free QOL.",
    type: "website",
    url: "https://cobaltqol.github.io",
    images: [
      {
        url: "/logo.png", 
        width: 500,
        height: 500,
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
      <body
        className={`${exo.variable} ${exo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
