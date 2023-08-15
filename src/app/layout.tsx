'use client'
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Naufal's Web",
//   description: "A personal website created by Naufal",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </head>
      <AnimatePresence>
        <body className={inter.className}>
          <motion.div
            initial={{opacity: 0, y:20}}
            animate={{opacity: 1, y:0}}
            exit={{opacity: 0, y:20}}
            transition={{ delay: 0.55 }}
          >
            {children}
          </motion.div>
        </body>
      </AnimatePresence>
      <Analytics />
    </html>
  );
}
