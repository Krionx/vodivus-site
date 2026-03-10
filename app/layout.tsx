import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./global-header.css";
import GlobalVvHeader from "@/components/layout/GlobalVvHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Vodivus Venture Studios",
  description: "Venture architecture for founders and operators. Define positioning, design systems, and execute with precision.",
  applicationName: "Vodivus Venture Studios",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Vodivus",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  metadataBase: new URL("https://vodivus.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vodivus Venture Studios",
    description: "Venture architecture for founders and operators. Define positioning, design systems, and execute with precision.",
    url: "https://vodivus.com",
    siteName: "Vodivus Venture Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vodivus Venture Studios",
    description: "Venture architecture for founders and operators. Define positioning, design systems, and execute with precision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030814",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="vodivus-site-shell">
          <GlobalVvHeader />
          <main id="vv-main-shell">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
