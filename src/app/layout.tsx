"use client"
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StarCursor from '@/components/star-cursor';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
        <title>Project S.H.E.: Steel Revolution</title>
        <meta name="description" content="A new era of empowerment. Join the revolution." />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <StarCursor />
        <Header />
        {isDesktop ? (
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex-1"
            >
              {children}
            </motion.main>
          </AnimatePresence>
        ) : (
          <main className="flex-1">{children}</main>
        )}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
