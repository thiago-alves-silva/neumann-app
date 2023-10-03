import "./globals.css";
import "./notification.css";
import { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Neumann",
    default: "Neumann",
  },
  description:
    "Plataforma de aux\u00edlio no desenvolvimento dos filhos atrav\u00e9s de educa\u00e7\u00e3o positiva",
  manifest: "/manifest.json",
  icons: { apple: "/icon-512x512.png" },
  themeColor: "#f4f3ff",
  viewport: {
    userScalable: false,
    initialScale: 1,
    maximumScale: 1,
    width: "device-width",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
