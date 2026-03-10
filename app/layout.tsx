import type { Metadata } from "next";
import "./globals.css";
import "./global-header.css";
import GlobalVvHeader from "@/components/layout/GlobalVvHeader";
import Footer from "@/components/layout/Footer";




export const metadata: Metadata = {
  title: "Vodivus Venture Studios",
  description: "The entry to the new world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

  <GlobalVvHeader />

  {children}

  <Footer />

</body>
    </html>
  );
}
