import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "reverie",
  description: "mindful thoughts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="reverie" />
        <meta property="og:description" content="AI powered journalling app" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_softbubble" />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
