import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thegreenbranch.nl"),
  title: {
    default: "The Green Branch | Activating nature for a liveable future",
    template: "%s | The Green Branch",
  },
  description:
    "The Green Branch develops certified nature-based removal projects in Brazil — reforestation and biochar. We restore forests, produce durable removals, and structure the capital that makes both possible.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "The Green Branch | Activating nature for a liveable future",
    description:
      "Certified nature-based removal projects in Brazil. We restore forests, produce durable removals, and structure the capital that makes both possible.",
    url: "https://www.thegreenbranch.nl",
    siteName: "The Green Branch",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
