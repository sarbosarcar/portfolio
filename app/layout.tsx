import type { Metadata } from "next";
import { Geist_Mono, Orbitron, Anton } from "next/font/google";
import "./globals.css";
const anton = Anton({
  variable: "--font-anton",
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const orbitron = Orbitron({
  variable: "--font-orbiton",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarbo's Portfolio",
  description: 'A portfolio website for Sarbo Sarcar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.className} ${orbitron.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
