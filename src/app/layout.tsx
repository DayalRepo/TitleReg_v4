import type { Metadata } from "next";
import { Suspense } from "react";
import ClientFontLoader from "./ClientFontLoader";
import ClientProviders from "./ClientProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "TITLEREG",
<<<<<<< HEAD
  description: "Powered By Project BlockChain.",
=======
  description: "Powered By Project BlockChain",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://titlereg.vercel.app'),
  openGraph: {
    title: "TITLEREG",
    description: "Powered By Project BlockChain",
    type: "website",
    url: "/",
    siteName: "TITLEREG",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "TITLEREG Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TITLEREG",
    description: "Powered By Project BlockChain",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
>>>>>>> e412c67 (Add Open Graph and Twitter Card metadata with logo for social media sharing)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols - using next/font/google for Lexend Deca, external for Material Symbols only */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=eye_tracking"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="antialiased bg-black text-white transition-colors"
        suppressHydrationWarning
      >
        <ClientFontLoader />
        <ClientProviders>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </ClientProviders>
      </body>
    </html>
  );
}
