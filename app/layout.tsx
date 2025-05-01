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
    title: "MP-6 OAuth Assignment",
    description: "an app utilizing oauth from google",
    icons: "https://imgcdn.sigstick.com/iNqRWEt8wH6CF38gOGUS/28-1.png" // cute cat image
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en">
                <body
                      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                      {children}
                </body>
          </html>
    );
}
