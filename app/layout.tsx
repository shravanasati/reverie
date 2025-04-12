import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

// const font = Epilogue({
//   subsets: ["latin"],
//   display: "swap",
// })

export const metadata: Metadata = {
  title: "reverie",
  description: "Transform your thoughts with AI powered journalling",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <meta property="og:title" content="reverie" />
        <meta property="og:description" content="AI powered journalling app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_softbubble" />
        <meta name="twitter:image" content="/logo.png" /> */}
      </head>
      <body
        className={`${GeistSans.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
