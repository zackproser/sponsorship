import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sponsor Zachary Proser",
  description: "Staff developer, technical writer, content creator and machine learning specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-DFX9S1FRMB" />
      </body>
    </html>
  );
}
