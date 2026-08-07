import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from '@/components/footer/page.js'
import Header from '@/components/header/page.js'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HMStudio",
  description:
    "HMStudio is a digital agency specializing in Full Stack Web Development, WordPress websites, SEO, Graphic Design, Branding, and modern digital solutions for businesses.",

  verification: {
    other: {
      "p:domain_verify": "2e2ff638820016327e99749187e7dce8",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-gray-950">
        <Header />
        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
