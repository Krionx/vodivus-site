import type { Metadata } from "next";
import "./globals.css";
import "./global-header.css";
import GlobalVvHeader from "@/components/layout/GlobalVvHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Vodivus Venture Studios",
  description: "Venture architecture for founders and operators. Define positioning, design systems, and execute with precision.",
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
