import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ultramarine = localFont({
  src: [
    {
      path: './fonts/fonts_Ultramarine_WOFF_Ultramarine-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/fonts_Ultramarine_WOFF_Ultramarine-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/fonts_Ultramarine_WOFF_Ultramarine-Bold.woff2',
      weight: '700',
    },
  ],
  preload: true,
  variable: '--font-ultramarine',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Visualize Customer Journey",
  description: "Visualize Customer Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ultramarine.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
