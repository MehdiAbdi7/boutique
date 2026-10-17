import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DropZone (démo)",
  description: "Démo non officielle d'une boutique en ligne pour DropZone.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <p className="bg-black py-2 text-center text-sm text-white">
          {
            "Démo non officielle : ce site n'est pas celui de DropZone. Aucune commande n'est livrée."
          }
        </p>
        {children}
      </body>
    </html>
  );
}
