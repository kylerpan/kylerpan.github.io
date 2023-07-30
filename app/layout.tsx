import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Pan",
  description: "Kyle Pan's portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Nav />
        {children}
        <Footer menu={false} />
      </body>
    </html>
  );
}
